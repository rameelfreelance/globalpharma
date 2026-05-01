import { useEffect, useRef, useState } from 'react'

type ProductMenuLink = {
  label: string
  onClick: () => void
  isActive?: boolean
}

type ProductCardData = {
  imageSrc: string
  title: string
  body: string
}

type ProductTemplateAssets = {
  logoShape: string
  logoMark: string
  navArrowDark: string
  navArrowLight: string
  footerLogo: string
  footerIconMap: string
  footerIconPhone: string
  footerIconMail: string
  footerSocialFacebook: string
  footerSocialLinkedIn: string
}

type ProductTemplateNavigation = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateFacility: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
}

export type ProductTemplateProps = {
  headline: string
  categoryTitle: string
  description: string
  subtitle?: string
  icon: string
  backArrow: string
  heroMaskSrc: string
  heroImagePrimarySrc: string
  heroImageSecondarySrc?: string
  cards: ProductCardData[]
  assets: ProductTemplateAssets
  navigation: ProductTemplateNavigation
  productMenuLinks: ProductMenuLink[]
}

export default function ProductTemplate({
  headline,
  categoryTitle,
  description,
  subtitle,
  icon,
  backArrow,
  heroMaskSrc,
  heroImagePrimarySrc,
  heroImageSecondarySrc,
  cards,
  assets,
  navigation,
  productMenuLinks,
}: ProductTemplateProps) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)
  const cardRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const closeMenus = () => {
      setShowCompanyMenu(false)
      setShowProductsMenu(false)
    }
    window.addEventListener('click', closeMenus)
    return () => window.removeEventListener('click', closeMenus)
  }, [])

  useEffect(() => {
    if (cards.length === 0) {
      return
    }

    const mountedCards = cardRefs.current.filter((card): card is HTMLElement => card !== null)

    // Ensure initial hidden state is applied before observation starts.
    mountedCards.forEach((card, index) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(40px)'
      card.style.transitionProperty = 'opacity, transform'
      card.style.transitionDuration = '600ms'
      card.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      card.style.transitionDelay = `${index * 100}ms`
    })

    // Debug visibility of refs during observer setup.
    console.log('ProductTemplate cardRefs:', cardRefs.current)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }
          const card = entry.target as HTMLElement
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
          observer.unobserve(card)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0,
      }
    )

    mountedCards.forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [cards.length])

  return (
    <div className="w-full" style={{ backgroundColor: 'var(--color-bg-page)' }}>
      <header className="sticky top-0 z-[70] border-b" style={{ backgroundColor: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)', boxShadow: 'var(--shadow-soft)' }}>
        <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between gap-6 py-4" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
          <div className="flex shrink-0 items-center gap-3">
            <img alt="" className="h-[4.5rem] w-auto object-contain" src={assets.logoShape} />
            <img alt="" className="h-[3.25rem] w-[3.25rem]" src={assets.logoMark} />
            <div className="font-['Myriad_Pro:Semibold',sans-serif] leading-tight" style={{ color: 'var(--color-text-strong)', fontSize: 'clamp(1rem, 1.5vw, 1.375rem)' }}>
              <p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-4 lg:gap-6">
            <button type="button" onClick={navigation.onNavigateHome} className="leading-tight" style={{ color: 'var(--color-primary)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Home</button>

            <div className="relative">
              <button type="button" onClick={navigation.onNavigateAbout} className="leading-tight" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Our Company</button>
              <button
                type="button"
                aria-label="Toggle company menu"
                onClick={(event) => {
                  event.stopPropagation()
                  setShowCompanyMenu((prev) => !prev)
                  setShowProductsMenu(false)
                }}
                className="ml-1 inline-flex size-[24px] items-center justify-center border-0 bg-transparent p-0 align-middle"
              >
                <img alt="" className="size-full" src={assets.navArrowDark} />
              </button>
              {showCompanyMenu ? (
                <div className="absolute left-0 top-[110%] w-[270px]">
                  <button type="button" onClick={navigation.onNavigateAbout} className="block h-[49px] w-full border-b pl-[23px] text-left text-white transition-colors duration-200 hover:bg-[var(--color-dropdown-hover)]" style={{ borderColor: 'var(--color-dropdown-border)', backgroundColor: 'var(--color-dropdown-bg)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>About Us</button>
                  <button type="button" onClick={navigation.onNavigateAbout} className="block h-[49px] w-full border-b pl-[23px] text-left text-white transition-colors duration-200 hover:bg-[var(--color-dropdown-hover)]" style={{ borderColor: 'var(--color-dropdown-border)', backgroundColor: 'var(--color-dropdown-bg)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Vision &amp; Mission</button>
                  <button type="button" onClick={navigation.onNavigateAbout} className="block h-[49px] w-full pl-[23px] text-left text-white transition-colors duration-200 hover:bg-[var(--color-dropdown-hover)]" style={{ backgroundColor: 'var(--color-dropdown-bg)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>IMS Policy</button>
                </div>
              ) : null}
            </div>

            <div className="relative">
              <button type="button" onClick={navigation.onNavigateProducts} className="rounded px-2 py-1 text-white leading-tight" style={{ backgroundColor: 'var(--color-primary)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Products</button>
              <button
                type="button"
                aria-label="Toggle products menu"
                onClick={(event) => {
                  event.stopPropagation()
                  setShowProductsMenu((prev) => !prev)
                  setShowCompanyMenu(false)
                }}
                className="ml-1 inline-flex size-[24px] items-center justify-center border-0 bg-transparent p-0 align-middle"
              >
                <img alt="" className="size-full" src={assets.navArrowLight} />
              </button>
              {showProductsMenu ? (
                <div className="absolute left-0 top-[110%] w-[365px]">
                  {productMenuLinks.map((link) => (
                    <button
                      key={link.label}
                      type="button"
                      onClick={link.onClick}
                      className="block h-[49px] w-full border-b pl-[23px] text-left text-white transition-colors duration-200 hover:bg-[var(--color-dropdown-hover)]"
                      style={{
                        borderColor: 'var(--color-dropdown-border)',
                        backgroundColor: link.isActive ? 'var(--color-primary)' : 'var(--color-dropdown-bg)',
                        fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)',
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <button type="button" onClick={navigation.onNavigateFacility} className="leading-tight" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Facility</button>
            <button type="button" onClick={navigation.onNavigatePharmacovigilance} className="leading-tight" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Pharmacovigilance</button>
            <button type="button" onClick={navigation.onNavigateCareers} className="leading-tight" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Careers</button>
            <button type="button" onClick={navigation.onNavigateContact} className="leading-tight" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(0.95rem, 1.5vw, 1.5rem)' }}>Contact us</button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[var(--container-max)]">
        <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div
            className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[center] mask-size-[100%_100%]"
            style={{ maskImage: `url('${heroMaskSrc}')` }}
          >
            <img alt="" className="h-full w-full object-cover" src={heroImagePrimarySrc} />
          </div>
          {heroImageSecondarySrc ? (
            <div
              className="absolute inset-0 opacity-90 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[center] mask-size-[100%_100%]"
              style={{ maskImage: `url('${heroMaskSrc}')` }}
            >
              <img alt="" className="h-full w-full object-cover" src={heroImageSecondarySrc} />
            </div>
          ) : null}

          <div className="relative grid min-h-[455px] grid-cols-1 gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-end" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
            <p className="max-w-[56rem] font-['Google_Sans:Medium',sans-serif] leading-[1.16] fade-up d0" style={{ color: 'var(--color-text-strong)', fontSize: 'var(--text-hero)' }}>
              {headline}
            </p>
            <div className="w-full max-w-[28rem] self-end">
              <div className="bg-white px-8 py-5">
                <p className="hero-clip-wrap font-['Google_Sans:Medium',sans-serif] leading-[1.1]" style={{ color: 'var(--color-text-strong)', fontSize: 'var(--text-heading)' }}>
                  <span className="hero-clip-line d2">{categoryTitle}</span>
                </p>
              </div>
              <div className="mt-0.5 h-[12px] line-reveal" style={{ backgroundColor: 'var(--color-primary)' }} />
            </div>
          </div>
        </section>

        <section className="py-14" style={{ backgroundColor: 'var(--color-bg-section)' }}>
          <div className="mx-auto w-full" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
            <button
              type="button"
              onClick={navigation.onNavigateProducts}
              className="mb-10 min-h-[320px] w-full max-w-[450px] scale-in d2 text-left"
              style={{ backgroundColor: 'var(--color-bg-page)', padding: '2.3rem 2.875rem 2rem' }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="h-[70px] w-[70px] overflow-hidden">
                  <img alt="" className="size-full object-contain" src={icon} />
                </div>
                <div className="h-[20px] w-[20px]">
                  <img alt="" className="size-full -scale-x-100" src={backArrow} />
                </div>
              </div>
              <p className="font-['Google_Sans:Medium',sans-serif] leading-[1.05]" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.4rem, 2.6vw, 2.25rem)' }}>
                {categoryTitle}
              </p>
              {subtitle ? (
                <p className="mt-2 font-['Google_Sans:Medium',sans-serif] leading-[1.5]" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(1.05rem, 1.6vw, 1.3125rem)' }}>
                  {subtitle}
                </p>
              ) : null}
              <p className="mt-2 max-w-[23.25rem] font-['Google_Sans:Regular',sans-serif] leading-[1.65]" style={{ color: 'color-mix(in srgb, var(--color-text-default) 70%, transparent)', fontSize: 'clamp(0.95rem, 1.3vw, 1.0625rem)' }}>{description}</p>
            </button>

            {cards.length > 0 ? (
              <div
                className="grid w-full"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'clamp(16px, 3vw, 32px)',
                }}
              >
                {cards.map((card, index) => {
                  return (
                    <article
                      key={`${card.title}-${index}`}
                      data-card-index={index}
                      ref={(node) => {
                        cardRefs.current[index] = node
                      }}
                      className="min-h-[450px] p-4"
                      style={{
                        backgroundColor: 'var(--color-bg-page)',
                      }}
                    >
                      <div className="flex h-[274px] items-center justify-center p-3" style={{ backgroundColor: 'var(--color-bg-section)' }}>
                        <img alt="" className="max-h-[320px] w-full object-contain" src={card.imageSrc} />
                      </div>
                      <p className="mt-6 font-['Google_Sans:Medium',sans-serif] leading-[1.1]" style={{ color: 'var(--color-text-default)', fontSize: 'clamp(1.4rem, 2.6vw, 2.25rem)' }}>
                        {card.title}
                      </p>
                      <p className="mt-2 whitespace-pre-line font-['Google_Sans:Regular',sans-serif] leading-[1.6]" style={{ color: 'color-mix(in srgb, var(--color-text-default) 70%, transparent)', fontSize: 'clamp(1rem, 1.4vw, 1.125rem)' }}>
                        {card.body}
                      </p>
                    </article>
                  )
                })}
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="fade-up d3" style={{ backgroundColor: 'var(--color-bg-muted)' }}>
        <div className="mx-auto w-full max-w-[var(--container-max)] pb-[99px] pt-[98px]" style={{ backgroundColor: 'var(--color-primary-dark)', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4" style={{ color: 'var(--color-text-on-dark)' }}>
              <div className="w-full max-w-[26rem]">
                <div className="mb-4 flex items-start gap-3">
                  <img alt="" className="h-[44px] w-[44px] object-contain" src={assets.footerLogo} />
                  <div className="font-['Myriad_Pro:Semibold',sans-serif] leading-tight" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.375rem)' }}><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.375rem)' }}>We are committed to manufacturing and<br />delivering high-quality pharmaceutical<br />products that meet stringent regulatory<br />standards.</p>
                <div className="mt-6 flex gap-3">
                  <a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="Facebook" className="size-[29px]" src={assets.footerSocialFacebook} /></a>
                  <a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="LinkedIn" className="size-[29px]" src={assets.footerSocialLinkedIn} /></a>
                </div>
              </div>

              <div className="w-full max-w-[18rem]">
                <p className="font-['Inter:Bold',sans-serif]" style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2.5rem)' }}>Quick Links</p>
                <div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3125rem)' }}>
                  <button type="button" onClick={navigation.onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[var(--color-footer-link-hover)]">Home</button>
                  <button type="button" onClick={navigation.onNavigateAbout} className="block w-full text-left transition-colors duration-200 hover:text-[var(--color-footer-link-hover)]">About Us</button>
                  <button type="button" onClick={navigation.onNavigateProducts} className="block w-full text-left transition-colors duration-200 hover:text-[var(--color-footer-link-hover)]">Our Products</button>
                  <button type="button" onClick={navigation.onNavigateCareers} className="block w-full text-left transition-colors duration-200 hover:text-[var(--color-footer-link-hover)]">Career</button>
                  <button type="button" onClick={navigation.onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[var(--color-footer-link-hover)]">Contact us</button>
                </div>
              </div>

              <div className="w-full max-w-[20rem]">
                <p className="font-['Inter:Bold',sans-serif]" style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2.5rem)' }}>Quick Links</p>
                <div className="mt-[50px] space-y-[15px] font-['Inter:Regular',sans-serif]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3125rem)' }}><p>Policy Statement</p><p>Apply for other departments</p><p>Apply for sales</p></div>
              </div>

              <div className="w-full max-w-[25rem]">
                <p className="font-['Inter:Bold',sans-serif]" style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2.5rem)' }}>Our Location</p>
                <div className="mt-[50px] flex flex-col gap-[22px]">
                  <div className="flex items-center gap-[19px]"><img alt="" className="h-[20px] w-[16px]" src={assets.footerIconMap} /><p className="font-['Inter:Regular',sans-serif] leading-[1.45]" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.375rem)' }}>Plot No.08-A, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p></div>
                  <div className="flex items-center gap-[19px]"><img alt="" className="h-[15px] w-[16px]" src={assets.footerIconPhone} /><a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] transition-colors duration-200 hover:text-[var(--color-footer-link-hover)] hover:underline" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.375rem)' }}>+92-51-449-302</a></div>
                  <div className="flex items-center gap-[18px]"><img alt="" className="h-[12px] w-[18px]" src={assets.footerIconMail} /><a href="mailto:info@globalpharmaceuticalspk.com" className="font-['Inter:Regular',sans-serif] transition-colors duration-200 hover:text-[var(--color-footer-link-hover)] hover:underline" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.375rem)' }}>info@globalpharmaceuticalspk.com</a></div>
                </div>
              </div>
            </div>
        </div>
        <div className="border border-solid" style={{ backgroundColor: 'var(--color-primary-dark)', borderColor: 'var(--color-border-subtle)' }}>
          <p className="mx-auto w-full max-w-[var(--container-max)] px-8 py-10 capitalize font-['Inter:Regular',sans-serif]" style={{ color: 'var(--color-text-on-dark)', fontSize: 'clamp(1rem, 1.2vw, 1.375rem)' }}>
            © 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
