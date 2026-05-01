import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

const heroImg = '/assets/figma/307cc2aa-e172-486a-93bf-59749a3b6a4f.jpg'
const heroMask = '/assets/figma/70803a9b-0b50-4f42-a0a4-82fe46464ac3.svg'
const logoShape = '/assets/figma/b4a5d6d7-b42c-40e9-9d79-0b211ffa688b.svg'
const logoMark = '/assets/figma/0679b012-2e3f-4008-8d7a-227ed0ca862d.svg'
const imgArrowOutward = '/assets/figma/07e11a05-9865-43e2-8bcb-062aa4c06886.svg'
const iconProduction = '/assets/figma/f0945ce6-8d2a-4dcd-b384-c77de90ad28d.svg'
const iconCephalosporin = '/assets/figma/d5c6de74-b496-467d-bd38-82f68591b6b8.svg'
const iconAdministrative = '/assets/figma/46edf784-a565-4ade-a3da-f44b7266a951.svg'
const imgWarehouse = '/assets/figma/94b1d001-f6a5-473c-828a-3dacb5b5fcb4.jpg'
const imgCardMask = '/assets/figma/ab47be9d-a39c-4176-b85c-da4ecff87514.png'
const imgCapTab = '/assets/figma/e37fe101-5049-49db-af23-73619fb01202.jpg'
const imgTopical = '/assets/figma/cbd07ea6-1853-4744-8df4-e70e0d47ac9a.jpg'
const imgSyrup = '/assets/figma/13d92b36-f800-4a32-82be-e679fd18a7bb.jpg'
const imgCepha = '/assets/figma/5163b7f6-0b74-4b33-bce5-9665f27ea83c.jpg'
const footerLogo = '/assets/figma/3fd538f8-83a5-459b-bfae-87c9c5db4036.svg'
const footerIconMap = '/assets/figma/3d6f6f76-3a54-42dc-ac0b-251979af61e2.svg'
const footerIconPhone = '/assets/figma/34b848f8-94f8-4073-be44-8edd54df92b4.svg'
const footerIconMail = '/assets/figma/ed0595b3-8a9e-4815-abcb-63ec79765c4e.svg'
const footerSoc1 = '/assets/figma/68010953-b6af-4f58-bb96-1930ee60c76f.svg'
const footerSoc2 = '/assets/figma/b550e449-68b5-4b1c-ab25-3af65147640a.svg'

type FacilitiesProps = {
  onNavigateHome: () => void
  onNavigateAbout: (section?: 'about' | 'vision' | 'ims') => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateProducts: () => void
  initialSection?: 'production' | 'quality'
}

export default function Facilities({ onNavigateHome, onNavigateAbout, onNavigatePharmacovigilance, onNavigateCareers, onNavigateContact, onNavigateProducts, initialSection = 'production' }: FacilitiesProps) {
  const productionRef = useRef<HTMLDivElement | null>(null)
  const qualityRef = useRef<HTMLDivElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const [startStatsCounter, setStartStatsCounter] = useState(false)
  const [statsValues, setStatsValues] = useState({ production: 0, hvac: 0, iso: 0, compliance: 0 })

  const scrollToProduction = () => {
    productionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToQuality = () => {
    qualityRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (initialSection === 'production') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = qualityRef.current
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 205
    window.scrollTo({ top, behavior: 'smooth' })
  }, [initialSection])

  useEffect(() => {
    const checkInView = () => {
      if (startStatsCounter || !statsRef.current) return
      const rect = statsRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
      const visibilityRatio = Math.max(0, visibleHeight) / Math.max(rect.height, 1)
      if (visibilityRatio >= 0.6) {
        setStartStatsCounter(true)
      }
    }

    checkInView()
    window.addEventListener('scroll', checkInView, { passive: true })
    return () => window.removeEventListener('scroll', checkInView)
  }, [startStatsCounter])

  useEffect(() => {
    if (!startStatsCounter) return
    const duration = 2400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setStatsValues({
        production: Math.round(12 * eased),
        hvac: Math.round(24 * eased),
        iso: Math.round(8 * eased),
        compliance: Math.round(100 * eased),
      })
      if (progress < 1) requestAnimationFrame(tick)
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [startStatsCounter])

  return (
    
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div className="contact-figma relative h-[5450px] w-[1920px] shrink-0 overflow-hidden bg-white pt-[188px]">
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-25px] top-[-209px] h-[1320px] w-[1979px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[26px_685px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImg} />
        </div>

        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f] hero-clip-wrap">
          <span className="hero-clip-line d0">Precision Engineering</span>
          <span className="hero-clip-line d1">World-Class Excellence</span>
        </p>
        <div className="absolute left-[1238px] top-[476px] h-[111px] w-[472px] bg-white" />
        <p className="absolute left-[1379px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f] hero-clip-wrap"><span className="hero-clip-line d2">Facility</span></p>
        <div className="absolute left-[1238px] top-[587px] h-[12px] w-[472px] bg-[#9d0b0f] line-reveal" />

        <div className="absolute left-[1px] top-[931px] h-[910px] w-[1919px] bg-[#f5f8f9]" />
        <div ref={statsRef} className="absolute left-[1px] top-[2543px] h-[728px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[1px] top-[4257px] h-[539px] w-[1919px] bg-[#f5f8f9]" />

        <p className="absolute left-[256px] top-[1054px] w-[622px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line">Unidirectional Workflow Philosophy</span></p>
        <p className="absolute left-[983px] top-[1069px] w-[551px] text-justify font-['Google_Sans:Regular',sans-serif] text-[25px] leading-[37.5px] text-[#2f4252] fade-up d1">
          Our architecture minimizes cross- contamination through physical separation and strict personnel flow protocols.
        </p>

        {[
          { x: 256, title: 'Production\nBuilding', body: 'Specialized sections for capsule and tablet manufacturing, ointments, creams, gels, lotions, syrup formulations and a dedicated cephalosporin section.', bodySize: 17, icon: iconProduction },
          { x: 736, title: 'Separate\nCephalosporin Block', body: 'Dedicated unit ensuring strict segregation and compliance with regulatory standards for dry suspensions and capsules.', bodySize: 18, icon: iconCephalosporin },
          { x: 1216, title: 'Detached\nAdministrative Building', body: 'Independent structural unit for corporate strategy and regulatory compliance teams.', bodySize: 18, icon: iconAdministrative },
        ].map((c, index) => (
          <div
            key={c.x}
            className={`absolute top-[1300px] h-[418px] w-[450px] scale-in d${index}`}
            style={{ left: c.x }}
          >
            <div className="group relative h-full w-full cursor-default bg-white transition-[background-color] duration-200 ease-out hover:bg-[#9d0b0f]">
              <div className="absolute left-[31px] top-[41px] h-[70px] w-[70px]">
                <img
                  alt=""
                  className="size-full object-contain transition-[filter] duration-200 ease-out group-hover:brightness-0 group-hover:invert"
                  src={c.icon}
                />
              </div>
              <img
                alt=""
                className="absolute left-[376px] top-[46px] size-[38px] transition-[filter] duration-200 ease-out group-hover:brightness-0 group-hover:invert"
                src={imgArrowOutward}
              />
              <p className="absolute left-[35px] top-[161px] w-[379px] whitespace-pre-line font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[43px] text-[#0b0f13] transition-colors duration-200 ease-out group-hover:text-white">
                {c.title}
              </p>
              <p
                className="absolute left-[35px] top-[265px] w-[379px] font-['Google_Sans:Regular',sans-serif] leading-[28px] text-[#0b0f13]/70 transition-colors duration-200 ease-out group-hover:text-white/90"
                style={{ fontSize: `${c.bodySize}px` }}
              >
                {c.body}
              </p>
            </div>
          </div>
        ))}

        <p className="absolute left-[255px] top-[1987px] font-['Google_Sans:Medium',sans-serif] text-[18px] uppercase tracking-[1.71px] text-black fade-up d0">Logistics Excellence</p>
        <p className="absolute left-[255px] top-[2039px] w-[589px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line d1">Smart Warehousing Ecosystem</span></p>
        <img alt="" className="absolute left-[251px] top-[2177px] h-[300px] w-[533px] -scale-x-100 object-cover mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4px_35px] mask-size-[565px_186px]" style={{ maskImage: `url('${imgWarehouse}')` }} src={imgWarehouse} />

        {[
          { n: '1', t: 'Quarantine', d: 'Secured isolation zone for incoming raw materials awaiting quality control clearance.', x: 960, y: 1987 },
          { n: '2', t: 'Approved Materials', d: 'Temperature-controlled storage for validated excipients and active ingredients.', x: 1335, y: 1987 },
          { n: '3', t: 'Finished Goods', d: 'Distribution-ready inventory managed via advanced batch-tracking systems.', x: 960, y: 2225 },
          { n: '4', t: 'Rejected Materials', d: 'Strictly controlled, gated access area for materials failing rigorous QA protocols.', x: 1335, y: 2225 },
        ].map((i) => (
          <div key={i.n}>
            <div className="absolute size-[56px] bg-[#9d0b0f] scale-in box-hover-invert" style={{ left: i.x, top: i.y }} />
            <p className="absolute font-['Google_Sans:SemiBold',sans-serif] text-[40px] leading-[44px] text-white" style={{ left: i.x + 18, top: i.y + 6 }}>{i.n}</p>
            <p className="absolute font-['Google_Sans:Medium',sans-serif] text-[35px] leading-[38.5px] text-[#051c2f]" style={{ left: i.x, top: i.y + 69 }}>{i.t}</p>
            <p className="absolute w-[330px] font-['Google_Sans:Regular',sans-serif] text-[16px] leading-[25.6px] text-[#808586]" style={{ left: i.x, top: i.y + 121 }}>{i.d}</p>
          </div>
        ))}

        <div className="absolute left-0 top-[2727px] h-[360px] w-[1920px] scale-in">
          <p className="absolute left-[638px] top-0 text-center font-['Google_Sans:Bold',sans-serif] text-[55px] leading-[60px] text-[#f9f9f9]">
            Designed for Scalability
          </p>
          <p className="absolute left-[490px] top-[71px] w-[940px] text-center font-['Poppins:Regular',sans-serif] text-[23px] leading-[39px] text-[#f9f9f9]">
            Our facility is not just a building; it's a modular ecosystem ready to adapt to the next generation of medicinal science.
          </p>
          {[
            { x: 560, v: `${statsValues.production}+`, l: 'Production Lines' },
            { x: 777, v: `${statsValues.hvac}/7`, l: 'HVAC Monitoring' },
            { x: 994, v: `ISO ${statsValues.iso}`, l: 'Cleanroom Grading' },
            { x: 1211, v: `${statsValues.compliance}%`, l: 'Compliance Rate' },
          ].map((s) => (
            <div key={s.x}>
              <div className="absolute top-[195px] size-[165px] bg-white" style={{ left: s.x }} />
              <p
                className="absolute top-[246px] w-[199px] text-center font-['Google_Sans:Bold',sans-serif] text-[50px] leading-[40px] text-[#9d0b0f]"
                style={{ left: s.x - 17 }}
              >
                {s.v}
              </p>
              <p
                className="absolute top-[295px] w-[199px] text-center font-['Google_Sans:Bold',sans-serif] text-[14px] leading-[14px] text-black"
                style={{ left: s.x - 17 }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <div ref={productionRef} className="absolute left-[203px] top-[3381px] h-[1px] w-[1px]" />
        <p className="absolute left-[203px] top-[3381px] font-['Google_Sans:Medium',sans-serif] text-[18px] uppercase tracking-[1.71px] text-black fade-up d0">Our Capabilities</p>
        <p className="absolute left-[203px] top-[3444px] w-[542px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line d1">Production &amp; Quality Facilities</span></p>
        <p className="absolute left-[203px] top-[3629px] w-[542px] font-['Google_Sans:Regular',sans-serif] text-[27px] leading-[40.5px] text-[#2f4252] fade-up d2">
          Global Pharmaceuticals Pakistan operates cGMP-compliant, automated manufacturing facilities across multiple therapeutic categories built to meet national and international regulatory standards.
        </p>

        <div className="absolute left-[805px] top-[3381px] h-[766px] w-[916px] grid grid-cols-2 gap-[37px]">
          {[
            { img: imgCapTab, t: 'Capsule & Tablet', d: 'Dedicated lines for solid dosage forms with automated compression and encapsulation processes.' },
            { img: imgTopical, t: 'Topical Formulations', d: 'Specialized units for ointments, creams, gels, and lotions with strict contamination controls.' },
            { img: imgSyrup, t: 'Syrup & Liquid', d: 'Liquid dosage manufacturing with precision filling, sealing, and quality checkpoints at each stage.' },
            { img: imgCepha, t: 'Cephalosporin Section', d: 'Strictly segregated area for dry suspensions and capsules, ensuring cross-contamination prevention and regulatory compliance.' },
          ].map((c) => (
            <div key={c.t} className="relative h-[359px] w-[437px] scale-in box-hover">
              <img alt="" className="absolute left-0 top-0 h-[203px] w-[437px] object-cover mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[437px_203px]" style={{ maskImage: `url('${imgCardMask}')` }} src={c.img} />
              <div className="absolute left-0 top-[203px] h-[155px] w-[437px] bg-[#f5f8f9] p-[22px]">
                <p className="font-['Google_Sans:Medium',sans-serif] text-[30px] text-[#0b0f13]">{c.t}</p>
                <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[19px] leading-[26px] text-[#0b0f13]/70">{c.d}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="absolute left-[203px] top-[3907px] font-['Google_Sans:Medium',sans-serif] text-[18px] leading-[18px] tracking-[1.71px] text-[#9d0b0f] uppercase whitespace-nowrap">
          Therapeutic categories
        </p>
        {[
          { left: 203, top: 3966, w: 229, label: 'Anti-inflammatory', stagger: 'd0' },
          { left: 444, top: 3966, w: 143, label: 'Antibiotics', stagger: 'd1' },
          { left: 599, top: 3966, w: 73, label: 'CNS', stagger: 'd2' },
          { left: 203, top: 4031, w: 229, label: 'Cardiovascular', stagger: 'd3' },
          { left: 444, top: 4031, w: 229, label: 'Dermatological', stagger: 'd3' },
          { left: 203, top: 4096, w: 229, label: 'Respiratory', stagger: 'd4' },
          { left: 444, top: 4096, w: 229, label: 'Gastrointestinal', stagger: 'd5' },
        ].map((cat) => (
          <div
            key={cat.label}
            className={`absolute h-[51px] fade-up ${cat.stagger}`}
            style={{ left: cat.left, top: cat.top, width: cat.w }}
          >
            <button
              type="button"
              className="flex h-full w-full cursor-pointer items-center justify-center border border-[#dadada] bg-[#f7f4f4] px-2 font-['Google_Sans:Medium',sans-serif] text-[18px] leading-[18px] uppercase whitespace-nowrap text-[#0b0f13] transition-[background-color,color] duration-200 ease-out hover:bg-[#9d0b0f] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50"
            >
              {cat.label}
            </button>
          </div>
        ))}

        <div ref={qualityRef} className="absolute left-[203px] top-[4373px] h-[1px] w-[1px]" />
        <p className="absolute left-[203px] top-[4373px] w-[542px] font-['Google_Sans:Medium',sans-serif] text-[64px] leading-[70.4px] text-[#9d0b0f] clip-wrap"><span className="clip-line">Quality Operations</span></p>
        <p className="absolute left-[203px] top-[4470px] w-[724px] font-['Google_Sans:Regular',sans-serif] text-[27px] leading-[40.5px] text-[#2f4252]">
          Our Quality Management System (QMS) is backed by state-of-the-art analytical instruments, stability chambers, and highly trained professionals. All processes follow Good Laboratory Practices (GLP) with emphasis on validation, quality assurance, and product stability.
        </p>
        <p className="absolute left-[1242px] top-[4443px] font-['Google_Sans:Medium',sans-serif] text-[18px] uppercase tracking-[1.71px] text-[#9d0b0f]">Certifications &amp; compliance</p>
        <img
          alt="ISO 9001, ISO 14001, ISO 45001, and GMP certifications"
          src="/assets/certifications.png"
          className="absolute left-[1114px] top-[4507px] h-[122px] w-[557px] object-contain"
        />
        <div className="fixed inset-x-0 top-0 z-[70] flex justify-center">
          <div className="relative h-[188px] w-[1920px]">
            <div className="absolute left-0 top-0 h-[188px] w-[1919px] bg-[#f5f8f9]" />
            <div className="absolute left-[-1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
            <div className="absolute left-[-3.5px] top-[22px] h-[131px] w-[510.5px]">
              <img alt="" className="h-full w-full object-fill" src={logoShape} />
            </div>
            <button
              type="button"
              onClick={onNavigateHome}
              aria-label="Global Pharmaceuticals Pakistan home"
              className="absolute left-[137px] top-[47px] h-[80.61px] w-[79.34px] cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-none"
            >
              <img alt="" className="h-full w-full object-contain" src={logoMark} />
            </button>
            <button
              type="button"
              onClick={onNavigateHome}
              className="absolute left-[228px] top-[49.61px] cursor-pointer border-0 bg-transparent p-0 text-left font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white focus-visible:outline-none"
            >
              <p>Global</p>
              <p>Pharmaceuticals</p>
              <p>Pakistan</p>
            </button>
            <Navbar
              activePage="facility"
              onNavigateHome={onNavigateHome}
              onNavigateAbout={onNavigateAbout}
              onNavigateProducts={onNavigateProducts}
              onNavigateFacility={(section = 'production') => {
                if (section === 'quality') {
                  scrollToQuality()
                  return
                }
                scrollToProduction()
              }}
              onNavigatePharmacovigilance={onNavigatePharmacovigilance}
              onNavigateCareers={onNavigateCareers}
              onNavigateContact={onNavigateContact}
            />
          </div>
        </div>

        <div className="absolute left-0 top-[4795px] w-[1920px] bg-[#f5f5f5]">
          <div className="h-[509px] bg-[#4e0a0c] px-[195px] pb-[99px] pt-[98px]">
            <div className="flex w-[1532px] gap-[63px] text-white">
              <div className="w-[418px]">
                <div className="mb-4 flex items-start gap-3">
                  <img alt="" className="h-[44px] w-[44px] object-contain" src={footerLogo} />
                  <div className="font-['Myriad_Pro:Semibold',sans-serif] text-[22px] leading-[23px]"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[21.98px] leading-[39px]">We are committed to manufacturing and<br />delivering high-quality pharmaceutical<br />products that meet stringent regulatory<br />standards.</p>
                <div className="mt-6 flex gap-3"><a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="Facebook" className="size-[29px]" src={footerSoc1} /></a><a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="LinkedIn" className="size-[29px]" src={footerSoc2} /></a></div>
              </div>
              <div className="w-[228px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={() => onNavigateAbout('about')} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" onClick={() => onNavigateProducts?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button><button type="button" onClick={onNavigateCareers} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button><button type="button" onClick={onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button></div></div>
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
      </div>
    </div>
  )
}
