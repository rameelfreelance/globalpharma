export const validPages = new Set([
  'home',
  'about',
  'contact',
  'careers',
  'pharmacovigilance',
  'facility',
  'product',
  'antibiotics',
  'antiinflammatory',
  'gastrointestinal',
  'cns',
  'cardiovascular',
  'respiratory',
  'dermatology',
] as const)

export type Page =
  | 'home'
  | 'about'
  | 'contact'
  | 'careers'
  | 'pharmacovigilance'
  | 'facility'
  | 'product'
  | 'antibiotics'
  | 'antiinflammatory'
  | 'gastrointestinal'
  | 'cns'
  | 'cardiovascular'
  | 'respiratory'
  | 'dermatology'

export type AboutSection = 'about' | 'vision' | 'ims'
export type FacilitySection = 'production' | 'quality'

type ParseHashParams = {
  setPage: (page: Page) => void
  setAboutSection: (section: AboutSection) => void
  setFacilitySection: (section: FacilitySection) => void
}

const defaultRoute = {
  page: 'home' as Page,
  aboutSection: 'about' as AboutSection,
  facilitySection: 'production' as FacilitySection,
}

/** Parse `#page` / `#about:vision` etc. Returns null if hash missing or page token invalid. */
function parseHashInput(raw: string): {
  page: Page
  aboutSection: AboutSection
  facilitySection: FacilitySection
} | null {
  if (!raw) return null

  const [rawPage, rawSection] = raw.split(':')
  const parsedPage = rawPage as Page

  if (!validPages.has(parsedPage)) return null

  let aboutSection: AboutSection = 'about'
  let facilitySection: FacilitySection = 'production'

  if (parsedPage === 'about') {
    const about = rawSection as AboutSection
    if (about === 'about' || about === 'vision' || about === 'ims') {
      aboutSection = about
    }
  }

  if (parsedPage === 'facility') {
    const facility = rawSection as FacilitySection
    if (facility === 'production' || facility === 'quality') {
      facilitySection = facility
    }
  }

  return { page: parsedPage, aboutSection, facilitySection }
}

/** Synchronous route from the URL — use for `useState` initializers so refresh / StrictMode remount match `#hash`. */
export function readRouteFromLocation(): {
  page: Page
  aboutSection: AboutSection
  facilitySection: FacilitySection
} {
  if (typeof window === 'undefined') return { ...defaultRoute }
  const raw = window.location.hash.replace(/^#/, '')
  return parseHashInput(raw) ?? { ...defaultRoute }
}

export function parseAndApplyHash({
  setPage,
  setAboutSection,
  setFacilitySection,
}: ParseHashParams) {
  const raw = window.location.hash.replace(/^#/, '')
  const parsed = parseHashInput(raw)
  if (!parsed) return

  setPage(parsed.page)
  setAboutSection(parsed.aboutSection)
  setFacilitySection(parsed.facilitySection)
}

export function syncHash(
  page: Page,
  aboutSection: AboutSection,
  facilitySection: FacilitySection
) {
  let hash: string = page
  if (page === 'about') hash = `about:${aboutSection}`
  if (page === 'facility') hash = `facility:${facilitySection}`

  if (window.location.hash !== `#${hash}`) {
    window.history.replaceState(null, '', `#${hash}`)
  }
}
