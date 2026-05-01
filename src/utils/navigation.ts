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

export function parseAndApplyHash({
  setPage,
  setAboutSection,
  setFacilitySection,
}: ParseHashParams) {
  const raw = window.location.hash.replace(/^#/, '')
  if (!raw) return

  const [rawPage, rawSection] = raw.split(':')
  const parsedPage = rawPage as Page

  if (!validPages.has(parsedPage)) return
  setPage(parsedPage)

  if (parsedPage === 'about') {
    const about = rawSection as AboutSection
    if (about === 'about' || about === 'vision' || about === 'ims') {
      setAboutSection(about)
    }
  }

  if (parsedPage === 'facility') {
    const facility = rawSection as FacilitySection
    if (facility === 'production' || facility === 'quality') {
      setFacilitySection(facility)
    }
  }
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
