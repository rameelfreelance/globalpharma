import type { ComponentProps } from 'react'
import Navbar from './Navbar'

const defaultLogoMark = '/assets/figma/54801a94-07eb-437f-932b-63e38695d851.svg'

type DesktopSiteHeaderProps = {
  activePage: ComponentProps<typeof Navbar>['activePage']
  onNavigateHome: () => void
  logoMark?: string
} & Omit<ComponentProps<typeof Navbar>, 'activePage' | 'onNavigateHome'>

export default function DesktopSiteHeader({
  activePage,
  onNavigateHome,
  logoMark = defaultLogoMark,
  ...navProps
}: DesktopSiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)]">
      <div className="flex h-[88px] w-full items-stretch">
        <button
          type="button"
          onClick={onNavigateHome}
          className="relative z-[90] flex h-full shrink-0 items-stretch border-0 bg-transparent p-0 text-left"
          aria-label="Global Pharmaceuticals Pakistan — Home"
        >
          <div
            className="flex h-full items-center gap-3 bg-[#9d0b0f] pl-4 text-white sm:gap-3.5 sm:pl-5"
            style={{
              width: 'min(300px, 28vw)',
              minWidth: '240px',
              paddingRight: '2.75rem',
              clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0 100%)',
            }}
          >
            <img
              alt=""
              className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
              src={logoMark}
            />
            <div className="min-w-0 font-['Myriad_Pro:Semibold','Inter',sans-serif] text-[clamp(15px,1.15vw,19px)] font-semibold leading-[1.08] text-white">
              <p className="m-0">Global</p>
              <p className="m-0">Pharmaceuticals</p>
              <p className="m-0">Pakistan</p>
            </div>
          </div>
        </button>

        <div className="flex min-w-0 flex-1 justify-end pr-4 xl:pr-8">
          <Navbar activePage={activePage} onNavigateHome={onNavigateHome} {...navProps} />
        </div>
      </div>
    </header>
  )
}
