import { useEffect, useRef, useState } from 'react'
import MobileFooter from './MobileFooter'
import Navbar from './Navbar'

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
  const [isMobileLayout, setIsMobileLayout] = useState(() => window.innerWidth < 1024)
  const cardRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const applyViewportLayout = () => {
      setIsMobileLayout(window.innerWidth < 1024)
    }
    applyViewportLayout()
    window.addEventListener('resize', applyViewportLayout)
    return () => window.removeEventListener('resize', applyViewportLayout)
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

  const navForLabel = (needle: string) => {
    const item = productMenuLinks.find((link) => link.label.toLowerCase().includes(needle.toLowerCase()))
    return item?.onClick
  }

  const activeProductPage: 'product' | 'antibiotics' | 'antiinflammatory' | 'gastrointestinal' | 'cns' | 'cardiovascular' | 'respiratory' | 'dermatology' =
    productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('anti-inflammatory')
      ? 'antiinflammatory'
      : productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('anti-biotics')
      ? 'antibiotics'
      : productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('gastrointestinal')
      ? 'gastrointestinal'
      : productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('cns')
      ? 'cns'
      : productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('cardiovascular')
      ? 'cardiovascular'
      : productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('respiratory')
      ? 'respiratory'
      : productMenuLinks.find((l) => l.isActive)?.label.toLowerCase().includes('dermatology')
      ? 'dermatology'
      : 'product'
  const desktopCategoryBannerWidth =
    activeProductPage === 'dermatology' || activeProductPage === 'antibiotics' ? 520 : 842
  const desktopCategoryBannerLeft = 1710 - desktopCategoryBannerWidth

  if (isMobileLayout) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar
          activePage="product"
          onNavigateHome={navigation.onNavigateHome}
          onNavigateAbout={navigation.onNavigateAbout}
          onNavigateProducts={navigation.onNavigateProducts}
          onNavigateAntibiotics={navForLabel('anti-biotics')}
          onNavigateAntiInflammatory={navForLabel('anti-inflammatory')}
          onNavigateGastrointestinal={navForLabel('gastrointestinal')}
          onNavigateCns={navForLabel('cns')}
          onNavigateCardiovascular={navForLabel('cardiovascular')}
          onNavigateRespiratory={navForLabel('respiratory')}
          onNavigateDermatology={navForLabel('dermatology')}
          onNavigateFacility={navigation.onNavigateFacility}
          onNavigatePharmacovigilance={navigation.onNavigatePharmacovigilance}
          onNavigateCareers={navigation.onNavigateCareers}
          onNavigateContact={navigation.onNavigateContact}
        />

        <section className="relative h-[360px] overflow-hidden bg-[#9d0b0f]">
          <div
            className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[center] mask-size-[100%_100%]"
            style={{ maskImage: `url('${heroMaskSrc}')` }}
          >
            <img alt="" className="h-full w-full object-cover img-zoom" src={heroImagePrimarySrc} />
          </div>
          {heroImageSecondarySrc ? (
            <div
              className="absolute inset-0 opacity-90 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[center] mask-size-[100%_100%]"
              style={{ maskImage: `url('${heroMaskSrc}')` }}
            >
              <img alt="" className="h-full w-full object-cover img-zoom" src={heroImageSecondarySrc} />
            </div>
          ) : null}
          <div className="relative z-10 px-5 pt-22 text-white">
            <h1 className="hero-clip-wrap text-[35px] font-semibold leading-[1.12] text-white">
              <span className="hero-clip-line d0">{headline}</span>
            </h1>
            <div className="mt-4 inline-block">
              <p className="inline-block bg-white px-4 py-2 text-[24px] font-medium text-[#051c2f] clip-wrap">
                <span className="clip-line d2">{categoryTitle}</span>
              </p>
              <div className="mt-1 h-[8px] w-full bg-[#9d0b0f] line-reveal" />
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8f9] px-5 py-10">
          <button
            type="button"
            onClick={navigation.onNavigateProducts}
            className="product-card group w-full bg-white p-5 text-left shadow-sm transition-all duration-300 hover:bg-[#9d0b0f] active:scale-[0.99] fade-up d0"
          >
            <div className="flex items-start justify-between">
              <div className="h-[52px] w-[52px] overflow-hidden">
                <img alt="" className="size-full object-contain" src={icon} />
              </div>
              <img alt="" className="h-[18px] w-[18px] opacity-80 transition-transform duration-200 group-hover:translate-x-[2px]" src={backArrow} />
            </div>
            <p className="mt-4 text-[28px] font-medium leading-[1.08] text-[#0b0f13] transition-colors duration-300 group-hover:text-white">
              {categoryTitle}
            </p>
            {subtitle ? (
              <p className="mt-1 text-[17px] leading-[1.45] text-[#0b0f13] transition-colors duration-300 group-hover:text-white/95">
                {subtitle}
              </p>
            ) : null}
            <p className="mt-3 text-[15px] leading-7 text-[#0b0f13]/70 transition-colors duration-300 group-hover:text-white/90">
              {description}
            </p>
          </button>

          <div className="mt-5 space-y-4">
            {cards.map((card, idx) => (
              <article
                key={`${card.title}-${idx}`}
                className={`product-card group w-full bg-white p-5 text-left shadow-sm transition-all duration-300 hover:bg-[#9d0b0f] fade-up d${Math.min(idx + 1, 6)}`}
              >
                <div className="flex h-[220px] items-center justify-center bg-[#f5f8f9] p-3 img-zoom">
                  <img alt="" className="max-h-[200px] w-full object-contain" src={card.imageSrc} />
                </div>
                <p className="mt-4 text-[28px] font-medium leading-[1.08] text-[#0b0f13] transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </p>
                <p className="mt-2 whitespace-pre-line text-[15px] leading-7 text-[#0b0f13]/70 transition-colors duration-300 group-hover:text-white/90">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <MobileFooter
          onNavigateHome={navigation.onNavigateHome}
          onNavigateAbout={navigation.onNavigateAbout}
          onNavigateProducts={navigation.onNavigateProducts}
          onNavigateCareers={navigation.onNavigateCareers}
          onNavigateContact={navigation.onNavigateContact}
        />
      </div>
    )
  }

  return (
    <div className="w-full" style={{ backgroundColor: 'var(--color-bg-page)' }}>
      <div className="fixed inset-x-0 top-0 z-[70] flex justify-center">
        <div className="relative h-[188px] w-[1920px]">
          <div className="absolute left-0 top-0 h-[188px] w-[1919px] bg-[#f5f8f9]" />
          <div className="absolute left-[-1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
          <div className="absolute left-0 top-[22px] h-[131px] w-[510.5px]">
            <img alt="" className="h-full w-full object-fill" src={assets.logoShape} />
          </div>
          <div className="absolute left-[137px] top-[47px] h-[80.61px] w-[79.34px]">
            <img alt="" className="h-full w-full" src={assets.logoMark} />
          </div>
          <div className="absolute left-[228px] top-[49.61px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white">
            <p>Global</p>
            <p>Pharmaceuticals</p>
            <p>Pakistan</p>
          </div>
          <Navbar
            activePage={activeProductPage}
            onNavigateHome={navigation.onNavigateHome}
            onNavigateAbout={() => navigation.onNavigateAbout()}
            onNavigateProducts={navigation.onNavigateProducts}
            onNavigateAntibiotics={navForLabel('anti-biotics')}
            onNavigateAntiInflammatory={navForLabel('anti-inflammatory')}
            onNavigateGastrointestinal={navForLabel('gastrointestinal')}
            onNavigateCns={navForLabel('cns')}
            onNavigateCardiovascular={navForLabel('cardiovascular')}
            onNavigateRespiratory={navForLabel('respiratory')}
            onNavigateDermatology={navForLabel('dermatology')}
            onNavigateFacility={() => navigation.onNavigateFacility()}
            onNavigatePharmacovigilance={navigation.onNavigatePharmacovigilance}
            onNavigateCareers={navigation.onNavigateCareers}
            onNavigateContact={navigation.onNavigateContact}
          />
        </div>
      </div>

      <main className="mx-auto w-full max-w-[var(--container-max)] pt-[188px]">
        <section className="relative h-[743px] overflow-hidden bg-white">
          <p className="absolute left-[195px] top-[53px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f] hero-clip-wrap">
            <span className="hero-clip-line d0">{headline}</span>
          </p>

          <div className="absolute left-0 top-[288px] h-[455px] w-[1920px] overflow-hidden bg-[#9d0b0f]">
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
          </div>

          <div
            className="absolute top-[288px] h-[111px] bg-white"
            style={{ left: `${desktopCategoryBannerLeft}px`, width: `${desktopCategoryBannerWidth}px` }}
          >
            <div className="px-[30px] py-[8px]">
              <p className="hero-clip-wrap whitespace-nowrap text-center font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f]">
                <span className="hero-clip-line d2">{categoryTitle}</span>
              </p>
            </div>
          </div>
          <div
            className="absolute top-[399px] h-[12px] bg-[#9d0b0f] line-reveal"
            style={{ left: `${desktopCategoryBannerLeft}px`, width: `${desktopCategoryBannerWidth}px` }}
          />
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

      {isMobileLayout ? (
        <MobileFooter
          onNavigateHome={navigation.onNavigateHome}
          onNavigateAbout={navigation.onNavigateAbout}
          onNavigateProducts={navigation.onNavigateProducts}
          onNavigateCareers={navigation.onNavigateCareers}
          onNavigateContact={navigation.onNavigateContact}
        />
      ) : (
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
      )}
    </div>
  )
}
