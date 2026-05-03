import { useEffect, useRef, useState } from 'react'
import MobileFooter from './MobileFooter'
import Navbar from './Navbar'

const imgHeroMask = '/assets/figma/59a450e9-e908-436e-80c0-39633be13a5a.svg'
const imgHeroMain = '/assets/figma/d8c342b4-69eb-4b38-b38d-9583786caba9.jpg'
const imgHeroOverlay = '/assets/figma/150f8d03-6128-4885-8cd3-14aad9bf48ce.png'
const imgVisionMissionRightMask = '/assets/figma/5c7ee03a-38c8-48b3-8476-d61e80accc65.svg'
const imgVisionMissionRight = '/assets/figma/17eee595-58b5-4e72-b191-b97b560c81ec.jpg'
const imgQhseImageMask = '/assets/figma/22aa8d62-d893-4dd3-9a8d-43f9f3a22eb0.svg'
const imgQhseImage = '/assets/figma/34a4dbbb-cf0d-4ee6-8b7e-8046b281e334.jpg'
const imgCheck = '/assets/figma/2cb821c2-0de8-45fe-8ece-a9cdde8d3eab.svg'
const imgHeaderShape = '/assets/figma/d04f65e4-5ecc-4d4e-9331-a4e2afe4baae.svg'
const imgHeaderMark = '/assets/figma/6daeebfe-331e-45d2-8aa3-5cfc35d501b9.svg'
const footerLogo = '/assets/figma/41218b28-412b-4cfa-8ff0-5f853d958f23.svg'
const footerIconMap = '/assets/figma/05e9d06f-860a-4f47-bee3-db4a49e0f8ee.svg'
const footerIconPhone = '/assets/figma/58876488-6ee9-4ea9-87e7-033f2cb7a344.svg'
const footerIconMail = '/assets/figma/251926dc-69ec-42c7-8d18-dbc6ddc1de95.svg'
const footerSoc1 = '/assets/figma/9c69b886-1995-4f88-b52f-a3819af457d5.svg'
const footerSoc2 = '/assets/figma/694ea83b-b574-45db-923d-77ea7c9b812c.svg'

type AboutUsProps = {
  onNavigateHome: () => void
  onNavigateCareers?: () => void
  onNavigateContact?: () => void
  onNavigatePharmacovigilance?: () => void
  onNavigateFacility?: (section?: 'production' | 'quality') => void
  onNavigateProducts?: () => void
  onNavigateAntibiotics?: () => void
  onNavigateAntiInflammatory?: () => void
  onNavigateGastrointestinal?: () => void
  onNavigateCns?: () => void
  onNavigateCardiovascular?: () => void
  onNavigateRespiratory?: () => void
  onNavigateDermatology?: () => void
  initialSection?: 'about' | 'vision' | 'ims'
}

export default function AboutUs({
  onNavigateHome,
  onNavigateCareers,
  onNavigateContact,
  onNavigatePharmacovigilance,
  onNavigateFacility,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigateAntiInflammatory,
  onNavigateGastrointestinal,
  onNavigateCns,
  onNavigateCardiovascular,
  onNavigateRespiratory,
  onNavigateDermatology,
  initialSection = 'about'
}: AboutUsProps) {
  const [isMobileLayout, setIsMobileLayout] = useState(() => window.innerWidth < 1024)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const visionRef = useRef<HTMLDivElement | null>(null)
  const imsRef = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (section: 'about' | 'vision' | 'ims') => {
    if (section === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = section === 'vision' ? visionRef.current : imsRef.current
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - (isMobileLayout ? 70 : 205)
    window.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    const applyViewportLayout = () => {
      setIsMobileLayout(window.innerWidth < 1024)
    }
    applyViewportLayout()
    window.addEventListener('resize', applyViewportLayout)
    return () => window.removeEventListener('resize', applyViewportLayout)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => scrollToSection(initialSection), 0)
    return () => window.clearTimeout(id)
  }, [initialSection, isMobileLayout])

  if (isMobileLayout) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar
          activePage="about"
          onNavigateHome={onNavigateHome}
          onNavigateAbout={(section = 'about') => scrollToSection(section)}
          onNavigateProducts={onNavigateProducts}
          onNavigateAntibiotics={onNavigateAntibiotics}
          onNavigateAntiInflammatory={onNavigateAntiInflammatory}
          onNavigateGastrointestinal={onNavigateGastrointestinal}
          onNavigateCns={onNavigateCns}
          onNavigateCardiovascular={onNavigateCardiovascular}
          onNavigateRespiratory={onNavigateRespiratory}
          onNavigateDermatology={onNavigateDermatology}
          onNavigateFacility={onNavigateFacility}
          onNavigatePharmacovigilance={onNavigatePharmacovigilance}
          onNavigateCareers={onNavigateCareers}
          onNavigateContact={onNavigateContact}
        />

        <section ref={aboutRef} className="relative isolate min-h-[min(92vw,420px)] overflow-hidden bg-[#f5f8f9]">
          <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <img alt="" className="absolute inset-0 h-full w-full object-cover" src={imgHeroMain} />
            <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" src={imgHeroOverlay} />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative z-10 px-5 pb-10 pt-[max(7rem,env(safe-area-inset-top,0px)+4.5rem)] text-white">
            <h1 className="text-[35px] font-semibold leading-[1.12] hero-clip-wrap">
              <span className="hero-clip-line d0">Committed to Quality,</span>
              <span className="hero-clip-line d1">Innovation &amp; Trusted Medicine</span>
            </h1>
            <div className="mt-4 inline-block">
              <p className="inline-block bg-white px-4 py-2 text-[24px] font-medium text-[#051c2f] clip-wrap">
                <span className="clip-line d2">About us</span>
              </p>
              <div className="mt-1 h-[8px] w-full bg-[#9d0b0f] line-reveal" />
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8f9] px-5 py-10">
          <h2 className="text-[32px] leading-[1.15] text-[#9d0b0f] clip-wrap">
            <span className="clip-line d0">Quality is the Heart of Everything</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#2f4252] fade-up d1">
            Global Pharmaceuticals Pakistan is a quality-driven pharmaceutical manufacturer committed to delivering safe, effective, and affordable medicines worldwide. We operate under strict cGMP compliance and international quality standards to ensure consistency, safety, and reliability. Our portfolio includes oral and topical dosage forms designed to meet diverse therapeutic needs.
          </p>
          <div className="mt-8 h-[220px] w-full overflow-hidden rounded-sm scale-in d2 img-zoom">
            <img alt="" className="h-full w-full object-cover" src={imgVisionMissionRight} />
          </div>
        </section>

        <section ref={visionRef} className="bg-white px-5 py-10">
          <div className="rounded bg-[#fff6f6] p-5">
            <h3 className="text-[30px] leading-[1.1] text-[#9d0b0f] clip-wrap"><span className="clip-line d0">Our Vision</span></h3>
            <p className="mt-3 text-[16px] leading-7 text-[#2f4252] fade-up d1">
              To be a globally recognized pharmaceutical company known for uncompromising quality, innovation, and ethical excellence in healthcare.
            </p>
          </div>
          <div className="mt-4 rounded bg-[#fff6f6] p-5">
            <h3 className="text-[30px] leading-[1.1] text-[#9d0b0f] clip-wrap"><span className="clip-line d1">Our Mission</span></h3>
            <p className="mt-3 text-[16px] leading-7 text-[#2f4252] fade-up d2">
              To provide safe, effective, and affordable medicines through world-class manufacturing standards, continuous improvement, and strong global partnerships built on trust.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#4e0a0c] px-5 py-10 text-white">
          <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-35 img-zoom" src={imgHeroMain} />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[2px] fade-up d0">Manufacturing Process</p>
            <div className="mt-4 space-y-2">
              {[
                { n: '1', t: 'Weighing & Dispensing' },
                { n: '2', t: 'Manufacturing Suites' },
                { n: '3', t: 'QC Testing & Analysis' },
                { n: '4', t: 'Packaging & Labeling' },
                { n: '5', t: 'Final Dispatch' },
              ].map((step, idx) => (
                <div
                  key={step.n}
                  className={`w-full bg-white px-2.5 pb-2.5 pt-2 text-[#051c2f] fade-up d${idx}`}
                >
                  <div className="mb-1.5 inline-flex h-6 w-6 items-center justify-center bg-[#9d0b0f] text-[14px] leading-none text-white">
                    {step.n}
                  </div>
                  <p className="text-[20px] leading-[1.06] tracking-[-0.1px] sm:text-[24px]">{step.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-10">
          <div className="grid grid-cols-1 gap-3">
            {[
              'Quality Control (QC) Laboratory',
              'Quality Assurance (QA)',
              'Documentation & Retention',
              'Research & Development (R&D) Laboratory',
              'Warehousing',
              'Regulatory Affairs (RA)',
            ].map((item, idx) => (
              <button
                key={item}
                type="button"
                className={`branded-solid-cta mx-auto flex h-[52px] w-full max-w-[360px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-4 text-center text-[14px] text-[#525866] shadow-[0_1px_2px_rgba(82,88,102,0.06)] transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:text-white fade-up d${idx}`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f8f9] px-5 py-10">
          <p className="text-xs uppercase tracking-[2px] text-black fade-up d0">Regulatory Affairs (RA)</p>
          <h3 className="mt-3 text-[30px] leading-[1.15] text-[#9d0b0f] clip-wrap">
            <span className="clip-line d1">Ensuring Compliance &amp; Global Standards</span>
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-[#2f4252] fade-up d2">
            In a highly regulated industry, Regulatory Affairs plays a pivotal role as the bridge between Global Pharmaceuticals Pakistan and national health authorities. The RA team ensures full compliance with evolving regulations, prepares precise documentation for product submissions, and supports product registration and lifecycle management.
          </p>
        </section>

        <section ref={imsRef} className="bg-white px-5 py-10">
          <h3 className="text-[30px] leading-[1.15] text-[#9d0b0f] clip-wrap"><span className="clip-line d0">QHSE Policy</span></h3>
          <p className="mt-4 text-[15px] leading-7 text-[#2f4252] fade-up d1">
            Global Pharmaceuticals Pakistan is committed to implementing and maintaining an Integrated Management System that integrates Quality, Environmental, Occupational Health, and Safety (QHSE) principles across all operations.
          </p>
          <div className="mt-6 h-[230px] overflow-hidden scale-in d1">
            <img alt="" className="h-full w-full object-cover img-zoom" src={imgQhseImage} />
          </div>
          <div className="mt-6 space-y-3">
            {[
              'Compliance with applicable regulatory, legal, and cGMP requirements.',
              'Delivering safe, effective, and high-quality pharmaceutical products.',
              'Providing a safe and healthy workplace.',
              'Promoting environmental responsibility and sustainable resource use.',
              'Continually improving systems and performance.',
              'Enhancing employee competence through training and development.',
              'Encouraging a culture of quality, responsibility, and ethics.',
              'Ensuring customer satisfaction through reliability and timely delivery.',
            ].map((line, index) => (
              <div key={line} className={`flex items-start gap-3 fade-up d${index}`}>
                <div className="mt-1 h-5 w-5 shrink-0 bg-[#9d0b0f] p-1">
                  <img alt="" className="h-full w-full" src={imgCheck} />
                </div>
                <p className="text-[14px] leading-6 text-[#2f4252]">{line}</p>
              </div>
            ))}
          </div>
        </section>

        <MobileFooter
          onNavigateHome={onNavigateHome}
          onNavigateAbout={() => scrollToSection('about')}
          onNavigateProducts={onNavigateProducts}
          onNavigateCareers={onNavigateCareers}
          onNavigateContact={onNavigateContact}
        />
      </div>
    )
  }

  return (
    
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div
        className="figma-page about-figma relative shrink-0 overflow-hidden bg-white pt-[188px]"
        style={{ "--figma-page-width": 1920, "--figma-page-height": 5679 } as any}
      >
        <div className="absolute left-[-14.9px] top-0 h-[459px] w-[1938.9px] bg-white" />
        <div className="absolute left-[-362.61px] top-[-90.35px] h-[1603px] w-[2612.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[347.71px_566.35px] mask-size-[1938.9px_459px]" style={{ maskImage: `url('${imgHeroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHeroMain} />
        </div>
        <div className="absolute left-[-469.21px] top-[-118.56px] h-[1468.35px] w-[2393.41px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[454.31px_594.56px] mask-size-[1938.9px_459px]" style={{ maskImage: `url('${imgHeroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHeroOverlay} />
        </div>

        <p className="absolute left-[197.5px] top-[241px] w-[1117px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f] hero-clip-wrap">
          <span className="hero-clip-line d0">Committed to Quality,</span>
          <span className="hero-clip-line d1">Innovation &amp; Trusted Medicine</span>
        </p>
        <div ref={aboutRef} className="absolute left-[1240.5px] top-[476px] h-[111px] w-[472px] bg-white" />
        <div className="absolute left-[1240.5px] top-[587px] h-[12px] w-[472px] bg-[#9d0b0f] line-reveal" />
        <p className="absolute left-[1353.5px] top-[494px] text-center font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051C2F] hero-clip-wrap"><span className="hero-clip-line d2">About us</span></p>

        <div className="absolute left-[-2px] top-[931px] h-[663px] w-[1926px] bg-[#f5f8f9]" />
        <div className="absolute left-[960px] top-[931px] h-[663px] w-[960px] bg-[#d9d9d9]" />
        <div className="absolute left-[960px] top-[931px] h-[663px] w-[960px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[960px_663px] scale-in img-zoom" style={{ maskImage: `url('${imgVisionMissionRightMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover object-center" src={imgVisionMissionRight} />
        </div>
        <p className="absolute left-[161.5px] top-[1044px] w-[542px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line">Quality is the Heart of Everything</span></p>
        <p className="absolute left-[161px] top-[1318px] h-[275px] w-[629px] text-justify font-['Google_Sans:Regular',sans-serif] text-[25px] leading-[37.5px] text-[#2f4252] fade-up d1">
          Global Pharmaceuticals Pakistan is a quality-driven pharmaceutical manufacturer committed to delivering safe, effective, and affordable medicines worldwide. We operate under strict cGMP compliance and international quality standards to ensure consistency, safety, and reliability. Our portfolio includes oral and topical dosage forms designed to meet diverse therapeutic needs.
        </p>

        <div ref={visionRef} className="absolute left-[2.5px] top-[1594px] h-[603px] w-[960px] bg-white" />
        <div className="absolute left-[961.5px] top-[1594px] h-[603px] w-[960px] bg-[#fff6f6]" />
        <p className="absolute left-[161.5px] top-[1759px] w-[522px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line d0">Our Vision</span></p>
        <p className="absolute left-[161.5px] top-[1850px] h-[183px] w-[642px] font-['Google_Sans:Regular',sans-serif] text-[30px] leading-[46.2px] tracking-[0.9px] text-[#2f4252] fade-up d1">
          To be a globally recognized pharmaceutical company known for uncompromising quality, innovation, and ethical excellence in healthcare.
        </p>
        <p className="absolute left-[1108.5px] top-[1759px] w-[542px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line d1">Our Mission</span></p>
        <p className="absolute left-[1108.5px] top-[1850px] h-[183px] w-[666px] font-['Google_Sans:Regular',sans-serif] text-[30px] leading-[46.2px] tracking-[0.9px] text-[#2f4252] fade-up d2">
          To provide safe, effective, and affordable medicines through world-class manufacturing standards, continuous improvement, and strong global partnerships built on trust.
        </p>

        <div className="absolute left-[2.5px] top-[2197px] h-[434px] w-[1921px] bg-[#f5f8f9]" />
        <div className="absolute left-[-8.5px] top-[1614px] h-[1104px] w-[1963px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_583px] mask-size-[1921px_434px] scale-in img-zoom" style={{ maskImage: `url('${imgHeroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHeroMain} />
        </div>
        <div className="absolute left-[2.5px] top-[2197px] h-[434px] w-[1920px] bg-black/30" />
        <p className="absolute left-[197.5px] top-[2291px] font-['Google_Sans:Medium',sans-serif] text-[25px] uppercase tracking-[2.38px] text-white">Manufacturing Process</p>

        {[
          { left: 197.5, top: 2391, title: 'Weighing &\nDispensing', n: '1' },
          { left: 503.5, top: 2451, title: 'Manufacturing\nSuites', n: '2' },
          { left: 809.5, top: 2511, title: 'QC Testing\n& Analysis', n: '3' },
          { left: 1115.5, top: 2571, title: 'Packaging\n& Labeling', n: '4' },
          { left: 1421.5, top: 2631, title: 'Final\nDispatch', n: '5', dim: true },
        ].map((item, index) => (
          <div
            key={item.n}
            className="absolute process-scroll group cursor-pointer select-none"
            style={{
              left: item.left,
              top: item.top,
              ['--process-depth' as string]: String(index),
            }}
          >
            <div className={`h-[259px] w-[306px] border-r border-[#e9e9e9] bg-white transition-colors duration-300 ease-out group-hover:bg-[#e6e6e6] ${item.dim ? 'h-[246px] border-r-0' : ''}`} />
            <div className="absolute left-[27px] top-[60px] h-[56px] w-[56px] bg-[#9d0b0f]" />
            <p className="pointer-events-none absolute left-[45px] top-[66px] font-['Google_Sans:Medium',sans-serif] text-[40px] leading-[44px] text-white">{item.n}</p>
            <p className="pointer-events-none absolute left-[27px] top-[129px] whitespace-pre-line font-['Google_Sans:Medium',sans-serif] text-[35px] leading-[38.5px] text-[#051c2f]">{item.title}</p>
          </div>
        ))}

        <button type="button" aria-pressed={false} className="absolute left-[339.5px] top-[2971px] flex h-[70.5px] w-[408.22px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-2 shadow-[0_1px_2px_rgba(82,88,102,0.06)] branded-solid-cta cursor-pointer transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:[&_p]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[20px] leading-[20px] text-[#525866] transition-colors duration-300 ease-out">Quality Control (QC) Laboratory</p>
        </button>
        <button type="button" aria-pressed={false} className="absolute left-[781.84px] top-[2971px] flex h-[70.5px] w-[405.95px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-2 shadow-[0_1px_2px_rgba(82,88,102,0.06)] branded-solid-cta cursor-pointer transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:[&_p]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[20px] leading-[20px] text-[#525866] transition-colors duration-300 ease-out">Quality Assurance (QA)</p>
        </button>
        <button type="button" aria-pressed={false} className="absolute left-[1221.9px] top-[2971px] flex h-[70.5px] w-[361.6px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-2 shadow-[0_1px_2px_rgba(82,88,102,0.06)] branded-solid-cta cursor-pointer transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:[&_p]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[20px] leading-[20px] text-[#525866] transition-colors duration-300 ease-out">Documentation &amp; Retention</p>
        </button>
        <button type="button" aria-pressed={false} className="absolute left-[396.5px] top-[3081.3px] flex h-[70.5px] w-[525.35px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-2 shadow-[0_1px_2px_rgba(82,88,102,0.06)] branded-solid-cta cursor-pointer transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:[&_p]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[20px] leading-[20px] text-[#525866] transition-colors duration-300 ease-out">Research &amp; Development (R&amp;D) Laboratory</p>
        </button>
        <button type="button" aria-pressed={false} className="absolute left-[955.96px] top-[3081.3px] flex h-[70.5px] w-[210.37px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-2 shadow-[0_1px_2px_rgba(82,88,102,0.06)] branded-solid-cta cursor-pointer transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:[&_p]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[20px] leading-[20px] text-[#525866] transition-colors duration-300 ease-out">Warehousing</p>
        </button>
        <button type="button" aria-pressed={false} className="absolute left-[1211.81px] top-[3081.3px] flex h-[70.5px] w-[313.84px] items-center justify-center rounded-[8px] border border-[#e2e4e9] bg-white px-2 shadow-[0_1px_2px_rgba(82,88,102,0.06)] branded-solid-cta cursor-pointer transition-colors duration-100 ease-out hover:border-[#9d0b0f] hover:bg-[#9d0b0f] hover:[&_p]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[20px] leading-[20px] text-[#525866] transition-colors duration-300 ease-out">Regulatory Affairs (RA)</p>
        </button>

        <div className="absolute left-[2.5px] top-[3249px] h-[563px] w-[1921px] bg-[#f5f8f9]" />
        <p className="absolute left-[196.5px] top-[3343px] font-['Google_Sans:Medium',sans-serif] text-[25px] uppercase tracking-[2.38px] text-black fade-up d0">Regulatory Affairs (RA)</p>
        <p className="absolute left-[196.5px] top-[3438px] w-[612px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[81.28px] text-[#9d0b0f] clip-wrap"><span className="clip-line d1">Ensuring Compliance &amp; Global Standards</span></p>
        <p className="absolute left-[898.5px] top-[3438px] w-[830px] text-justify font-['Google_Sans:Regular',sans-serif] text-[25px] leading-[40px] text-[#2f4252] fade-up d2">
          In a highly regulated industry, Regulatory Affairs plays a pivotal role as the bridge between Global Pharmaceuticals Pakistan and national health authorities. The RA team ensures full compliance with evolving regulations, prepares precise documentation for product submissions, and supports product registration and lifecycle management. Through proactive engagement with regulators, our RA department safeguards timely product approvals, market access, and continued compliance.
        </p>

        <div ref={imsRef} className="absolute left-[197.5px] top-[3930px] h-[1px] w-[1px]" />
        <p className="absolute left-[197.5px] top-[3930px] w-[612px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[81.28px] text-[#9d0b0f] clip-wrap"><span className="clip-line d0">QHSE Policy</span></p>
        <p className="absolute left-[197.5px] top-[4046px] w-[1538px] text-justify font-['Google_Sans:Regular',sans-serif] text-[25px] leading-[40px] text-[#2f4252] fade-up d1">
          Global Pharmaceuticals Pakistan is committed to implementing and maintaining an Integrated Management System that integrates Quality, Environmental, Occupational Health, and Safety (QHSE) principles across all operations. We ensure that our systems align with international standards, regulatory requirements, and cGMP guidelines to consistently deliver high-quality pharmaceutical products.
        </p>
        <div className="absolute left-[197.5px] top-[4209px] h-[623px] w-[680px] bg-[#d9d9d9] scale-in d1" />
        <div className="absolute left-[-31.5px] top-[4190px] h-[678px] w-[1017px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[229px_19px] mask-size-[680px_623px] scale-in d2 img-zoom" style={{ maskImage: `url('${imgQhseImageMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgQhseImage} />
        </div>

        <div className="absolute left-[985.5px] top-[4209px] w-[723px] font-['Google_Sans:Regular',sans-serif] text-[25px] leading-[30px] text-[#2f4252]">
          {[
            'Ensuring compliance with all applicable national and international regulatory, legal, and cGMP requirements.',
            'Delivering safe, effective, and high-quality pharmaceutical products that meet customer and patient expectations.',
            'Providing a safe and healthy workplace by identifying, assessing, and controlling occupational health and safety risks.',
            'Promoting environmental responsibility through pollution prevention, sustainable resource use, and proper waste management practices.',
            'Continually improving processes, systems, and performance through measurable objectives and regular monitoring.',
            'Enhancing employee competence through training, awareness, and development programs.',
            'Encouraging a culture of quality, responsibility, and ethical conduct at all levels of the Organization.',
            'Ensuring customer satisfaction through consistent product quality, reliability, and timely delivery.',
          ].map((line, index) => (
            <div
              key={line}
              className={`mb-[17px] flex items-start gap-[14px] fade-up d${index}`}
            >
              <div className="mt-[6px] h-[22px] w-[22px] shrink-0 bg-[#9d0b0f] p-[4px]">
                <img alt="" className="h-full w-full" src={imgCheck} />
              </div>
              <p>{line}</p>
            </div>
          ))}
        </div>

        <div className="absolute left-[2.5px] top-[5024px] w-[1920px] bg-[#f5f5f5]">
          <div className="h-[509px] bg-[#4e0a0c] px-[195px] pb-[99px] pt-[98px]">
            <div className="flex w-[1532px] gap-[63px] text-white">
              <div className="w-[418px]">
                <div className="mb-4 flex items-start gap-3">
                  <img alt="" className="h-[44px] w-[44px] object-contain" src={footerLogo} />
                  <div className="font-['Myriad_Pro:Semibold',sans-serif] text-[22px] leading-[23px]"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[21.98px] leading-[39px]">We are committed to manufacturing and<br />delivering high-quality pharmaceutical<br />products that meet stringent regulatory<br />standards.</p>
                <div className="mt-6 flex gap-3">
                  <a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                    <img alt="Facebook" className="size-[29px]" src={footerSoc1} />
                  </a>
                  <a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                    <img alt="LinkedIn" className="size-[29px]" src={footerSoc2} />
                  </a>
                </div>
              </div>
              <div className="w-[228px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={() => scrollToSection('about')} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" onClick={() => onNavigateProducts?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button><button type="button" onClick={() => onNavigateCareers?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button><button type="button" onClick={() => onNavigateContact?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button></div></div>
              <div className="w-[292px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[15px] font-['Inter:Regular',sans-serif] text-[21px]"><p>Policy Statement</p><p>Apply for other departments</p><p>Apply for sales</p></div></div>
              <div className="w-[405px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Our Location</p>
                <div className="mt-[50px] flex flex-col gap-[22px]">
                  <div className="flex items-center gap-[19px]"><img alt="" className="h-[20px] w-[16px]" src={footerIconMap} /><p className="font-['Inter:Regular',sans-serif] text-[22px] leading-[28px]">Plot No.08-A, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p></div>
                  <div className="flex items-center gap-[19px]"><img alt="" className="h-[15px] w-[16px]" src={footerIconPhone} /><a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] text-[21.98px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">+92-51-449-302</a></div>
                  <div className="flex items-center gap-[18px]"><img alt="" className="h-[12px] w-[18px]" src={footerIconMail} /><a href="mailto:info@globalpharmaceuticalspk.com" className="font-['Inter:Regular',sans-serif] text-[21.98px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">info@globalpharmaceuticalspk.com</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4e0a0c] border border-[#ececec] border-solid content-stretch flex h-[146px] items-center justify-center pb-[59px] pl-[286px] pr-[1175px] pt-[60px] relative shrink-0 w-full">
            <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] whitespace-nowrap">
              © 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="fixed inset-x-0 top-0 z-[70] flex justify-center">
          <div className="relative h-[188px] w-[1920px]">
            <div className="absolute left-[2.5px] top-0 h-[188px] w-[1919px] bg-[#f5f8f9]" />
            <div className="absolute left-[2.5px] top-[33px] h-[108px] w-[1921px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
            <div className="absolute left-[701.5px] top-[33px] h-[108px] w-[231px] bg-[#9d0b0f]" />
            <div className="absolute left-0 top-[22px] h-[131px] w-[510.5px]">
              <img alt="" className="size-full" src={imgHeaderShape} />
            </div>
            <div className="absolute left-[140.5px] top-[47px] h-[80.61px] w-[79.34px]">
              <img alt="" className="size-full" src={imgHeaderMark} />
            </div>
            <div className="absolute left-[231.5px] top-[50px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white">
              <p>Global</p>
              <p>Pharmaceuticals</p>
              <p>Pakistan</p>
            </div>

            <Navbar
              activePage="about"
              onNavigateHome={onNavigateHome}
              onNavigateAbout={(section = 'about') => scrollToSection(section)}
              onNavigateProducts={onNavigateProducts}
              onNavigateAntibiotics={onNavigateAntibiotics}
              onNavigateAntiInflammatory={onNavigateAntiInflammatory}
              onNavigateGastrointestinal={onNavigateGastrointestinal}
              onNavigateCns={onNavigateCns}
              onNavigateCardiovascular={onNavigateCardiovascular}
              onNavigateRespiratory={onNavigateRespiratory}
              onNavigateDermatology={onNavigateDermatology}
              onNavigateFacility={onNavigateFacility}
              onNavigatePharmacovigilance={onNavigatePharmacovigilance}
              onNavigateCareers={onNavigateCareers}
              onNavigateContact={onNavigateContact}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
