import { useState } from 'react'

const heroMask = '/assets/figma/3c12c6c3-c8f4-415f-8250-f37b0f43571e.svg'
const heroImageA = '/assets/figma/3ca4c4ff-01f6-4766-89b6-961a10373618.jpg'
const heroImageB = '/assets/figma/d3688610-81a7-4f77-8b94-3da2e9a12d8f.jpg'
const logoShape = '/assets/figma/616b07e3-6b9b-4127-9576-a6819154d45f.svg'
const logoMark = '/assets/figma/68fd6f02-5099-4a82-94a2-dc9b8e217f7e.svg'
const navArrowLight = '/assets/figma/50f5c660-945c-4bfa-84cb-ca67ab0b0df1.svg'
const navArrowDark = '/assets/figma/651561fb-4166-48f1-bd20-53ecfb17373b.svg'
const backArrow = '/assets/figma/5c9e033c-e340-4972-87ef-441cb567a41f.svg'
const iconResp = '/assets/figma/c9857a94-b871-49ab-b0b2-35983390ba44.svg'
const footerLogo = '/assets/figma/7d3df3ce-7f01-4013-bdb0-46ab33a9d3dd.svg'
const footerMap = '/assets/figma/42e9f40d-0270-46f9-8f6d-636aed07bb86.svg'
const footerPhone = '/assets/figma/ec697d0d-99c5-445d-bbec-aa80c61bacb8.svg'
const footerMail = '/assets/figma/ad1e1987-35c9-41fd-8f4d-b52771c834a4.svg'
const footerSoc1 = '/assets/figma/d4d31d00-8177-48cc-b1e3-c84b756df2dc.svg'
const footerSoc2 = '/assets/figma/a41b077c-e991-4c73-bd63-4c7b9da2ad9e.svg'

type Props = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntibiotics: () => void
  onNavigateAntiInflammatory: () => void
  onNavigateGastrointestinal: () => void
  onNavigateCns: () => void
  onNavigateCardiovascular: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function RespiratoryAntiallergic({
  onNavigateHome, onNavigateAbout, onNavigateProducts, onNavigateAntibiotics, onNavigateAntiInflammatory,
  onNavigateGastrointestinal, onNavigateCns, onNavigateCardiovascular, onNavigatePharmacovigilance,
  onNavigateCareers, onNavigateContact, onNavigateFacility,
}: Props) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)

  return (
    
    <div className="flex w-screen justify-center overflow-x-auto bg-white">
      <div className="relative h-[2858px] w-[1920px] shrink-0 overflow-hidden bg-white pt-[188px]">
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-55px] top-[179px] h-[1354px] w-[2031px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_297px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}><img alt="" className="size-full object-cover" src={heroImageA} /></div>
        <div className="absolute left-[-41px] top-[315px] h-[1333px] w-[2004px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42px_161px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}><img alt="" className="size-full object-cover" src={heroImageB} /></div>
        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">Expanding therapeutic segments with automated manufacturing</p>
        <div className="absolute left-[-1px] top-[917px] h-[1286px] w-[1921px] border border-[#efefef] bg-[#f5f8f9]" />
        <div className="absolute left-[1008px] top-[476px] h-[111px] w-[744px] bg-white" />
        <p className="absolute left-[1037px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f]">Respiratory &amp; Antiallergic</p>
        <div className="absolute left-[1008px] top-[595px] h-[12px] w-[744px] bg-[#9d0b0f]" />

        <button type="button" onClick={onNavigateProducts} className="absolute left-[195px] top-[1060px] h-[320px] w-[450px] bg-white text-left">
          <div className="absolute left-[47px] top-[39px] h-[70px] w-[70px] overflow-hidden"><img alt="" className="size-full object-contain" src={iconResp} /></div>
          <div className="absolute left-[395px] top-[39px] h-[20px] w-[20px]"><img alt="" className="size-full -scale-x-100" src={backArrow} /></div>
          <div className="absolute left-[47px] top-[141px] w-[336px]">
            <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[37px] text-[#9d0b0f]">Respiratory &amp; Antiallergic</p>
            <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#0b0f13]/70">Allergy and respiratory relief with Cetirizine, Ebastine, and Montelukast.</p>
          </div>
        </button>

        <div className="absolute left-0 top-[2203px] w-[1920px] bg-[#f5f5f5]">
          <div className="h-[509px] bg-[#4e0a0c] px-[195px] pb-[99px] pt-[98px]">
            <div className="flex w-[1532px] gap-[63px] text-white">
              <div className="w-[418px]"><div className="mb-4 flex items-start gap-3"><img alt="" className="h-[44px] w-[44px] object-contain" src={footerLogo} /><div className="font-['Myriad_Pro:Semibold',sans-serif] text-[22px] leading-[23px]"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div></div><p className="font-['Inter:Regular',sans-serif] text-[21.98px] leading-[39px]">We are committed to manufacturing and<br />delivering high-quality pharmaceutical<br />products that meet stringent regulatory<br />standards.</p><div className="mt-6 flex gap-3"><a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="Facebook" className="size-[29px]" src={footerSoc1} /></a><a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="LinkedIn" className="size-[29px]" src={footerSoc2} /></a></div></div>
              <div className="w-[228px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={onNavigateAbout} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" onClick={onNavigateProducts} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button><button type="button" onClick={onNavigateCareers} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button><button type="button" onClick={onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button></div></div>
              <div className="w-[292px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[15px] font-['Inter:Regular',sans-serif] text-[21px]"><p>Policy Statement</p><p>Apply for other departments</p><p>Apply for sales</p></div></div>
              <div className="w-[405px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Our Location</p><div className="mt-[50px] flex flex-col gap-[22px]"><div className="flex items-center gap-[19px]"><img alt="" className="h-[20px] w-[16px]" src={footerMap} /><p className="font-['Inter:Regular',sans-serif] text-[22px] leading-[28px]">Plot No.08-A, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p></div><div className="flex items-center gap-[19px]"><img alt="" className="h-[15px] w-[16px]" src={footerPhone} /><a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] text-[21.98px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">+92-51-449-302</a></div><div className="flex items-center gap-[18px]"><img alt="" className="h-[12px] w-[18px]" src={footerMail} /><a href="mailto:info@globalpharmaceuticalspk.com" className="font-['Inter:Regular',sans-serif] text-[21.98px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">info@globalpharmaceuticalspk.com</a></div></div></div>
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
            <div className="absolute left-0 top-0 h-[188px] w-[1924px] bg-[#f5f8f9]" />
            <div className="absolute left-[-1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
            <div className="absolute left-[926px] top-[33px] h-[108px] w-[175px] bg-[#9d0b0f]" />
            <div className="absolute left-[-3.5px] top-[22px] h-[131px] w-[510.5px]"><img alt="" className="size-full" src={logoShape} /></div>
            <div className="absolute left-[137px] top-[47px] h-[80.61px] w-[79.34px]"><img alt="" className="size-full" src={logoMark} /></div>
            <div className="absolute left-[228px] top-[50px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>
            <button type="button" onClick={onNavigateHome} className="absolute left-[612px] top-[77px] text-[24px] text-[#9d0b0f]">Home</button>
            <div className="absolute left-[728px] top-[71px] z-20 h-[229px] w-[180px]" onMouseEnter={() => setShowCompanyMenu(true)} onMouseLeave={() => setShowCompanyMenu(false)}>
              <button type="button" onClick={onNavigateAbout} className="absolute left-0 top-[6px] text-[24px] text-[#010c0d]">Our Company</button>
              <div className="absolute left-[151px] top-0 size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
              {showCompanyMenu ? <div className="absolute left-0 top-[75px] w-[270px]"><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">About Us</button><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Vision &amp; Mission</button><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">IMS Policy</button></div> : null}
            </div>
            <div className="absolute left-[926px] top-[72px] z-20 h-[440px] w-[175px]" onMouseEnter={() => setShowProductsMenu(true)} onMouseLeave={() => setShowProductsMenu(false)}>
              <button type="button" onClick={onNavigateProducts} className="absolute left-[27px] top-[5px] border-0 bg-transparent p-0 text-[24px] text-white">Products</button>
              <div className="absolute left-[124px] top-0 size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowLight} /></div></div>
              {showProductsMenu ? <div className="absolute left-0 top-[74px] w-[365px]"><button type="button" onClick={onNavigateAntiInflammatory} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button><button type="button" onClick={onNavigateAntibiotics} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button><button type="button" onClick={onNavigateGastrointestinal} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Gastrointestinal Agents</button><button type="button" onClick={onNavigateCns} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">CNS / Psychiatric</button><button type="button" onClick={onNavigateCardiovascular} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Cardiovascular / Lipid Control</button><button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Dermatology</button><button type="button" className="block h-[49px] w-full bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Respiratory &amp; Antiallergic</button></div> : null}
            </div>
            <button type="button" onClick={onNavigatePharmacovigilance} className="absolute left-[1261px] top-[77px] text-[24px] text-[#010c0d]">Pharmacovigilance</button>
            <button type="button" onClick={onNavigateCareers} className="absolute left-[1509px] top-[77px] text-[24px] text-[#010c0d]">Careers</button>
            <button type="button" onClick={onNavigateContact} className="absolute left-[1641px] top-[77px] text-[24px] text-[#010c0d]">Contact us</button>
            <button type="button" onClick={onNavigateFacility} className="absolute left-[1124px] top-[77px] text-[24px] text-[#010c0d]">Facility</button>
            <div className="absolute left-[1195px] top-[72px] size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
