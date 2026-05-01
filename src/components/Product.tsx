import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const heroMask = '/assets/figma/96f475a0-f388-4434-9401-0ebce11221c2.svg'
const heroImage = '/assets/figma/42837b36-8b40-4e93-8593-019e4921098f.jpg'
const logoShape = '/assets/figma/5aae07ba-fca4-4b6c-88a5-b9313dc7594d.svg'
const logoMark = '/assets/figma/54801a94-07eb-437f-932b-63e38695d851.svg'
const footerLogo = '/assets/figma/90b558ce-4eb8-4910-b850-9d29697f70cd.svg'
const footerIconMap = '/assets/figma/e33509ba-de6e-4417-8d63-7ba9dfca5c55.svg'
const footerIconPhone = '/assets/figma/9222189b-d69a-42b9-bc29-3b2e8850daa8.svg'
const footerIconMail = '/assets/figma/f0fdb91b-f567-4bc7-84b4-fcc248d482b7.svg'
const footerSoc1 = '/assets/figma/77cb6439-9414-44c3-b334-d6b60b4c25c2.svg'
const footerSoc2 = '/assets/figma/77580f71-3629-41b7-8e10-e385eba65e54.svg'
const iconArrowOutward = '/assets/figma/db14ce88-e104-489b-b3b2-8061ea6d290c.svg'
const iconCapsule = '/assets/figma/c6d798c2-c416-4503-958f-f7cf26799979.svg'
const iconMicroscope = '/assets/figma/27942b43-7216-4ace-a79e-2509a74f4907.svg'
const iconSanitizer = '/assets/figma/0ed5bc63-63ff-42ba-9f62-937f869734fb.svg'
const iconStethoscope = '/assets/figma/4f64c9aa-7a69-414b-af44-51b82c099db5.svg'
const iconBottle = '/assets/figma/9a881ee6-c85a-4014-ae18-0fdbbfd402fa.svg'
const iconTube = '/assets/test-tube-line.svg'
const iconMask = '/assets/figma/f64cded9-f220-4039-825a-ac73fcfec2fa.svg'

type ProductProps = {
  onNavigateHome: () => void
  onNavigateAbout: (section?: 'about' | 'vision' | 'ims') => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: (section?: 'production' | 'quality') => void
  onNavigateAntibiotics: () => void
  onNavigateAntiInflammatory: () => void
  onNavigateGastrointestinal: () => void
  onNavigateCns: () => void
  onNavigateCardiovascular: () => void
  onNavigateRespiratory: () => void
  onNavigateDermatology: () => void
}

export default function Product({ onNavigateHome, onNavigateAbout, onNavigatePharmacovigilance, onNavigateCareers, onNavigateContact, onNavigateFacility, onNavigateAntibiotics, onNavigateAntiInflammatory, onNavigateGastrointestinal, onNavigateCns, onNavigateCardiovascular, onNavigateRespiratory, onNavigateDermatology }: ProductProps) {
  const [isMobileLayout, setIsMobileLayout] = useState(false)

  useEffect(() => {
    const applyViewportLayout = () => setIsMobileLayout(window.innerWidth < 1024)
    applyViewportLayout()
    window.addEventListener('resize', applyViewportLayout)
    return () => window.removeEventListener('resize', applyViewportLayout)
  }, [])

  const cards = [
    {
      left: 255,
      top: 1133,
      title: 'Anti-biotics',
      subtitle: '(Fluoroquinolones & Cephalosporins)',
      body: 'Broad-spectrum antibiotics including Ciprofloxacin, Levofloxacin, and Cefixime.',
      icon: iconCapsule,
      onClick: onNavigateAntibiotics,
    },
    {
      left: 735,
      top: 1133,
      title: 'Anti-inflammatory / Analgesics',
      body: 'Pain relief and anti-inflammatory therapies including Piroxicam, Diclofenac, and Meloxicam.',
      icon: iconBottle,
      onClick: onNavigateAntiInflammatory,
    },
    {
      left: 1215,
      top: 1133,
      title: 'Gastrointestinal Agents',
      body: 'Acid control and gut protection with Esomeprazole, Omeprazole, and Vonoprazan.',
      icon: iconStethoscope,
      onClick: onNavigateGastrointestinal,
    },
    {
      left: 255,
      top: 1514,
      title: 'CNS / Psychiatric',
      body: 'Neurological and mental health support with Escitalopram, Piracetam, and Tizanidine.',
      icon: iconMicroscope,
      onClick: onNavigateCns,
    },
    {
      left: 735,
      top: 1514,
      title: 'Cardiovascular / Lipid Control',
      body: 'Cholesterol management with Rosuvastatin Calcium formulations.',
      icon: iconTube,
      iconClass: 'scale-[1.42]',
      iconWrapperClass: 'overflow-visible',
      onClick: onNavigateCardiovascular,
    },
    {
      left: 1215,
      top: 1514,
      title: 'Respiratory & Antiallergic',
      body: 'Allergy and respiratory relief with Cetirizine, Ebastine, and Montelukast.',
      icon: iconSanitizer,
      onClick: onNavigateRespiratory,
    },
    {
      left: 255,
      top: 1895,
      title: 'Dermatology',
      body: 'Topical treatments for skin infections and inflammation including Terbinafine and Tretinoin.',
      icon: iconMask,
      onClick: onNavigateDermatology,
    },
  ]

  if (isMobileLayout) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Navbar
          activePage="product"
          onNavigateHome={onNavigateHome}
          onNavigateAbout={onNavigateAbout}
          onNavigateProducts={() => {}}
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

        <section className="relative h-[360px] overflow-hidden bg-[#9d0b0f]">
          <div
            className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[center] mask-size-[100%_100%]"
            style={{ maskImage: `url('${heroMask}')` }}
          >
            <img alt="" className="h-full w-full object-cover img-zoom" src={heroImage} />
          </div>
          <div className="relative z-10 px-5 pt-22 text-white">
            <h1 className="hero-clip-wrap text-[35px] font-semibold leading-[1.12] text-[#051c2f]">
              <span className="hero-clip-line d0">Expanding therapeutic segments</span>
              <span className="hero-clip-line d1">with automated manufacturing</span>
            </h1>
            <p className="mt-4 inline-block bg-white px-4 py-2 text-[24px] font-medium text-[#051c2f] clip-wrap">
              <span className="clip-line d2">Our Products</span>
            </p>
            <div className="mt-1 h-[8px] w-[152px] bg-[#9d0b0f] line-reveal" />
          </div>
        </section>

        <section className="bg-[#f5f8f9] px-5 py-10">
          <div className="space-y-4">
            {cards.map((card, idx) => (
              <button
                key={card.title}
                type="button"
                onClick={card.onClick}
                className={`product-card group w-full bg-white p-5 text-left shadow-sm transition-all duration-300 hover:bg-[#9d0b0f] active:scale-[0.99] fade-up d${Math.min(idx, 6)}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-[52px] w-[52px] items-center justify-center ${card.iconWrapperClass ?? 'overflow-hidden'}`}>
                    <img alt="" className={`block h-full w-full object-contain ${card.iconClass ?? ''}`} src={card.icon} />
                  </div>
                  <img alt="" className="h-[18px] w-[18px] opacity-80 transition-transform duration-200 group-hover:translate-x-[2px]" src={iconArrowOutward} />
                </div>
                <p className="mt-4 text-[28px] font-medium leading-[1.08] text-[#0b0f13] transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </p>
                {card.subtitle ? (
                  <p className="mt-1 text-[17px] leading-[1.45] text-[#0b0f13] transition-colors duration-300 group-hover:text-white/95">
                    {card.subtitle}
                  </p>
                ) : null}
                <p className="mt-3 text-[15px] leading-7 text-[#0b0f13]/70 transition-colors duration-300 group-hover:text-white/90">
                  {card.body}
                </p>
              </button>
            ))}
          </div>
        </section>

        <footer className="bg-[#4e0a0c] px-5 py-10 text-white">
          <p className="text-[30px] font-semibold leading-[1.15]">Global Pharmaceuticals Pakistan</p>
          <p className="mt-3 text-[16px] leading-8 text-white/90">We are committed to manufacturing and delivering high-quality pharmaceutical products.</p>
          <div className="mt-5 space-y-3 text-[16px]">
            <a href="tel:+9251449302" className="block hover:underline">+92-51-449-302</a>
            <a href="mailto:info@globalpharmaceuticalspk.com" className="block break-all hover:underline">info@globalpharmaceuticalspk.com</a>
          </div>
          <p className="mt-6 text-[13px] text-white/80">© 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.</p>
        </footer>
      </div>
    )
  }

  return (
    
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div
        className="figma-page product-figma relative shrink-0 overflow-hidden bg-white pt-[188px]"
        style={{ "--figma-page-width": 1920, "--figma-page-height": 3071 } as any}
      >
        <div className="absolute left-0 top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-64px] top-[-394px] h-[1358px] w-[2037px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[64px_870px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImage} />
        </div>

        <p className="absolute left-[194px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f] hero-clip-wrap">
          <span className="hero-clip-line d0">Expanding therapeutic segments</span>
          <span className="hero-clip-line d1">with automated manufacturing</span>
        </p>
        <div className="absolute left-[-1px] top-[931px] h-[1485px] w-[1921px] bg-[#f5f8f9]" />
        <div className="absolute left-[1237px] top-[476px] h-[111px] w-[472px] bg-white" />
        <p className="absolute left-[1290px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f] hero-clip-wrap"><span className="hero-clip-line d2">Our Products</span></p>
        <div className="absolute left-[1237px] top-[587px] h-[12px] w-[472px] bg-[#9d0b0f] line-reveal" />

        {cards.map((card) => (
          <button
            key={card.title}
            type="button"
            onClick={card.onClick}
            className="product-card group absolute block min-h-[340px] w-[450px] bg-white text-left scale-in"
            style={{ left: card.left, top: card.top, cursor: 'pointer' }}
          >
            <div className="absolute left-[382px] top-[47px] flex h-[20px] w-[20px] items-center justify-center">
              <img alt="" className="block h-auto w-auto max-h-[20px] max-w-[20px] object-contain" src={iconArrowOutward} />
            </div>
            <div className={`absolute left-[46px] top-[37px] flex h-[70px] w-[70px] items-center justify-center ${card.iconWrapperClass ?? 'overflow-hidden'}`}>
              <img alt="" className={`block size-full object-contain ${card.iconClass ?? ''}`} src={card.icon} />
            </div>
            <p className="absolute left-[46px] top-[139px] w-[359px] font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[37px] text-[#0b0f13]">
              {card.title}
            </p>
            {card.subtitle ? (
              <p className="absolute left-[46px] top-[183px] w-[359px] font-['Google_Sans:Medium',sans-serif] text-[21px] leading-[33px] text-[#0b0f13]">
                {card.subtitle}
              </p>
            ) : null}
            <p
              className="absolute left-[46px] w-[372px] font-['Google_Sans:Regular',sans-serif] text-[17px] font-[400] leading-[28px] text-[#0b0f13]/70"
              style={{ top: card.subtitle ? 226 : 223 }}
            >
              {card.body}
            </p>
          </button>
        ))}

        <div className="absolute left-[-1px] top-[2416px] w-[1920px] bg-[#f5f5f5]">
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
              <div className="w-[228px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={() => onNavigateAbout('about')} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" className="block w-full cursor-default text-left">Our Products</button><button type="button" onClick={onNavigateCareers} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button><button type="button" onClick={onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button></div></div>
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
            <div className="absolute left-[-1px] top-0 h-[188px] w-[1919px] bg-[#f5f8f9]" />
            <div className="absolute left-[-2px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
            <div className="absolute left-[925px] top-[33px] h-[108px] w-[175px] bg-[#9d0b0f]" />
            <div className="absolute left-[-2px] top-[22px] h-[131px] w-[510.5px]"><img alt="" className="size-full" src={logoShape} /></div>
            <div className="absolute left-[137px] top-[47px] h-[80.61px] w-[79.34px]"><img alt="" className="size-full" src={logoMark} /></div>
            <div className="absolute left-[228px] top-[49.61px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>

            <Navbar
              activePage="product"
              onNavigateHome={onNavigateHome}
              onNavigateAbout={onNavigateAbout}
              onNavigateProducts={() => {}}
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
