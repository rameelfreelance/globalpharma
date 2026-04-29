import { useState } from 'react'

const heroMask = '/assets/figma/a9ddf6d7-55bb-463d-8037-f0152ddfae57.svg'
const heroImageA = '/assets/figma/9a146c8c-a236-4e40-9787-abf31e9b42ab.jpg'
const heroImageB = '/assets/figma/e3b3a88c-d0cb-4ca2-90f8-373f94e67a93.jpg'
const logoShape = '/assets/figma/639bfc09-1ed0-4306-8ea5-809bf489088c.svg'
const logoMark = '/assets/figma/197c66dd-34ff-4b40-9866-44e02b2001b4.svg'
const navArrowLight = '/assets/figma/89e9ffeb-d7f1-4ffa-95b3-7bc347681eca.svg'
const navArrowDark = '/assets/figma/cec3aff7-691b-4867-a064-037e4ab4003e.svg'
const backArrow = '/assets/figma/ca04fc9e-3e5a-47ee-a84f-3caa49bfcdc5.svg'
const tubeIcon = '/assets/figma/28dd0594-e93e-474f-b542-728d98589119.svg'
const footerLogo = '/assets/figma/2552e85e-a97b-4dc7-9540-9e306f32546c.svg'
const footerMap = '/assets/figma/588cfd9b-75a4-4788-87e1-604e4e4cae56.svg'
const footerPhone = '/assets/figma/a5ac27e4-faf7-4ee2-ab53-4fdc0a1618b9.svg'
const footerMail = '/assets/figma/9d5d8610-f815-4c3f-a4e2-4f97d80ca7a0.svg'
const footerSoc1 = '/assets/figma/f839ff7c-c7ca-4647-86e8-9ce508bd3d66.svg'
const footerSoc2 = '/assets/figma/91aa8431-ada1-4b12-be6a-91c6e25f3f1d.svg'

type Props = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntibiotics: () => void
  onNavigateAntiInflammatory: () => void
  onNavigateGastrointestinal: () => void
  onNavigateCns: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function CardiovascularLipidControl({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigateAntiInflammatory,
  onNavigateGastrointestinal,
  onNavigateCns,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: Props) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)

  return (
    
    <div className="flex w-screen justify-center overflow-x-auto bg-white">
      <div className="relative h-[2858px] w-[1920px] shrink-0 overflow-hidden bg-white pt-[188px]">
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-55px] top-[179px] h-[1354px] w-[2031px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_297px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="size-full object-cover" src={heroImageA} />
        </div>
        <div className="absolute left-[-41px] top-[315px] h-[1333px] w-[2004px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42px_161px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="size-full object-cover" src={heroImageB} />
        </div>
        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">Expanding therapeutic segments with automated manufacturing</p>
        <div className="absolute left-[-1px] top-[917px] h-[1286px] w-[1921px] border border-[#efefef] bg-[#f5f8f9]" />
        <div className="absolute left-[888px] top-[476px] h-[111px] w-[864px] bg-white" />
        <p className="absolute left-[918px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f]">Cardiovascular / Lipid Control</p>
        <div className="absolute left-[888px] top-[595px] h-[12px] w-[864px] bg-[#9d0b0f]" />

        <button type="button" onClick={onNavigateProducts} className="absolute left-[195px] top-[1060px] h-[320px] w-[450px] bg-white text-left">
          <div className="absolute left-[46px] top-[39px] h-[70px] w-[70px] overflow-hidden"><img alt="" className="size-full object-contain" src={tubeIcon} /></div>
          <div className="absolute left-[395px] top-[39px] h-[20px] w-[20px]"><img alt="" className="size-full -scale-x-100" src={backArrow} /></div>
          <p className="absolute left-[46px] top-[141px] w-[359px] font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[37px] text-[#9d0b0f]">Cardiovascular /<br />Lipid Control</p>
          <p className="absolute left-[46px] top-[225px] w-[336px] font-['Google_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#0b0f13]/70">Cholesterol management with Rosuvastatin Calcium formulations.</p>
        </button>

        <div className="absolute left-0 top-[2203px] w-[1920px] bg-[#f5f5f5]">
          <div className="h-[509px] bg-[#4e0a0c] px-[195px] pb-[99px] pt-[98px]">
            <div className="flex w-[1532px] gap-[63px] text-white">
              <div className="w-[418px]">
                <div className="mb-4 flex items-start gap-3"><img alt="" className="h-[44px] w-[44px] object-contain" src={footerLogo} /><div className="font-['Myriad_Pro:Semibold',sans-serif] text-[22px] leading-[23px]"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div></div>
                <p className="font-['Inter:Regular',sans-serif] text-[21.98px] leading-[39px]">We are committed to manufacturing and<br />delivering high-quality pharmaceutical<br />products that meet stringent regulatory<br />standards.</p>
                <div className="mt-6 flex gap-3"><a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="Facebook" className="size-[29px]" src={footerSoc1} /></a><a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="LinkedIn" className="size-[29px]" src={footerSoc2} /></a></div>
              </div>
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
            <div className="absolute left-0 top-0 h-[188px] w-[1926px] bg-[#f5f8f9]" />
            <div className="absolute left-[-1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
            <div className="absolute left-[926px] top-[33px] h-[108px] w-[175px] bg-[#9d0b0f]" />
            <div className="absolute left-[-2.5px] top-[22px] h-[131px] w-[510.5px]"><img alt="" className="size-full" src={logoShape} /></div>
            <div className="absolute left-[138px] top-[47px] h-[80.61px] w-[79.34px]"><img alt="" className="size-full" src={logoMark} /></div>
            <div className="absolute left-[229px] top-[50px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>
            <button type="button" onClick={onNavigateHome} className="absolute left-[612px] top-[77px] text-[24px] text-[#9d0b0f]">Home</button>
            <div className="absolute left-[728px] top-[71px] z-20 h-[229px] w-[194px]">
              <button type="button" onClick={onNavigateAbout} className="absolute left-0 top-[6px] text-[24px] text-[#010c0d]">Our Company</button>
              <button type="button" aria-label="Toggle company menu" onClick={(event) => { event.stopPropagation(); setShowCompanyMenu((prev) => !prev) }} className="absolute left-[151px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></button>
              {showCompanyMenu ? <div className="absolute left-0 top-[75px] w-[270px]"><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">About Us</button><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Vision &amp; Mission</button><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">IMS Policy</button></div> : null}
            </div>
            <div className="absolute left-[926px] top-[72px] z-20 h-[440px] w-[205px]">
              <button type="button" onClick={onNavigateProducts} className="absolute left-[27px] top-[5px] border-0 bg-transparent p-0 text-[24px] text-white">Products</button>
              <button type="button" aria-label="Toggle products menu" onClick={(event) => { event.stopPropagation(); setShowProductsMenu((prev) => !prev) }} className="absolute left-[124px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowLight} /></div></button>
              {showProductsMenu ? <div className="absolute left-0 top-[74px] w-[365px]"><button type="button" onClick={onNavigateAntiInflammatory} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button><button type="button" onClick={onNavigateAntibiotics} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button><button type="button" onClick={onNavigateGastrointestinal} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Gastrointestinal Agents</button><button type="button" onClick={onNavigateCns} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">CNS / Psychiatric</button><button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Cardiovascular / Lipid Control</button><button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Dermatology</button><button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Respiratory &amp; Antiallergic</button></div> : null}
            </div>
            <button type="button" onClick={onNavigatePharmacovigilance} className="absolute left-[1261px] top-[77px] text-[24px] text-[#010c0d]">Pharmacovigilance</button>
            <button type="button" onClick={onNavigateCareers} className="absolute left-[1509px] top-[77px] text-[24px] text-[#010c0d]">Careers</button>
            <button type="button" onClick={onNavigateContact} className="absolute left-[1641px] top-[77px] text-[24px] text-[#010c0d]">Contact us</button>
            <button type="button" onClick={onNavigateFacility} className="absolute left-[1122px] top-[77px] text-[24px] text-[#010c0d]">Facility</button>
            <div className="absolute left-[1193px] top-[72px] size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
