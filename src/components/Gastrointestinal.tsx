import { useEffect, useState } from 'react'

const heroMask = '/assets/figma/67846cf7-8b1b-407a-81d3-1280335f7c2f.svg'
const heroImageA = '/assets/figma/8c32ef8d-f71c-49dd-a342-17ce4b9907a5.jpg'
const heroImageB = '/assets/figma/18ca2db4-06bf-4abe-bde7-76016246376d.jpg'
const logoShape = '/assets/figma/fb6b182c-bc11-4e08-8119-74ad66a3fab0.svg'
const logoMark = '/assets/figma/b5c703dc-9e5e-4527-adf6-d0681786bcae.svg'
const navArrowDark = '/assets/figma/6e24ea2d-bb8a-4a4b-a333-31652bc261ce.svg'
const navArrowLight = '/assets/figma/c7e7a0c1-5a9d-431c-846f-7119550c71fd.svg'
const backArrow = '/assets/figma/af1a4baa-3647-4481-ac3c-6d000f4dec10.svg'
const cardIcon = '/assets/figma/244d73b9-86ed-45e4-8530-6b70d98665af.svg'

const imgSozo20 = '/assets/figma/d717ed41-d409-4b64-b467-f9d01475e38b.png'
const imgSozo40 = '/assets/figma/d95a74d5-1113-40bc-9da7-67dc7cca9b97.png'
const imgMisotal = '/assets/figma/5c46b5e6-71cd-487d-8ed3-059aa99a9d7c.png'

const footerLogo = '/assets/figma/958f1a82-c94b-4e79-b254-45b338902458.svg'
const footerIconMap = '/assets/figma/8593fd97-ad17-4e3e-b598-7c0fc1913792.svg'
const footerIconPhone = '/assets/figma/5688b75a-c3fd-4924-94fd-319331532ed4.svg'
const footerIconMail = '/assets/figma/258f144a-f703-485b-a70d-f03c048a2223.svg'
const footerSoc1 = '/assets/figma/8639401c-5758-46fb-a99d-5be369ef6909.svg'
const footerSoc2 = '/assets/figma/449f8020-8b1e-4d93-b8fa-c8001870f714.svg'

type GastrointestinalProps = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntibiotics: () => void
  onNavigateAntiInflammatory: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function Gastrointestinal({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigateAntiInflammatory,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: GastrointestinalProps) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)
  
  useEffect(() => {
    const closeMenus = () => {
      setShowCompanyMenu(false)
      setShowProductsMenu(false)
    }
    window.addEventListener('click', closeMenus)
    return () => window.removeEventListener('click', closeMenus)
  }, [])

  return (
    
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div className="relative h-[2858px] w-[1920px] shrink-0 overflow-hidden bg-white pt-[188px]">
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-55px] top-[179px] h-[1354px] w-[2031px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_297px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImageA} />
        </div>
        <div className="absolute left-[-41px] top-[315px] h-[1333px] w-[2004px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[42px_161px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImageB} />
        </div>

        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">
          Expanding therapeutic segments with automated manufacturing
        </p>
        <div className="absolute left-[-1px] top-[917px] h-[1286px] w-[1921px] border border-[#efefef] bg-[#f5f8f9]" />
        <div className="absolute left-[1055px] top-[476px] h-[111px] w-[697px] bg-white" />
        <p className="absolute left-[1082px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f] hero-clip-wrap"><span className="hero-clip-line d2">Gastrointestinal Agents</span></p>
        <div className="absolute left-[1055px] top-[595px] h-[12px] w-[697px] bg-[#9d0b0f] line-reveal" />

        <button type="button" onClick={onNavigateProducts} className="absolute left-[195px] top-[1060px] h-[320px] w-[450px] bg-white text-left">
          <div className="absolute left-[46px] top-[37px] h-[70px] w-[70px] overflow-hidden"><img alt="" className="size-full object-contain" src={cardIcon} /></div>
          <div className="absolute left-[395px] top-[38px] h-[20px] w-[20px]"><img alt="" className="size-full -scale-x-100" src={backArrow} /></div>
          <div className="absolute left-[46px] top-[139px] w-[359px]">
            <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[37px] text-[#9d0b0f]">Gastrointestinal Agents</p>
            <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#0b0f13]/70">Acid control and gut protection with Esomeprazole, Omeprazole, and Vonoprazan.</p>
          </div>
        </button>

        <div className="absolute left-[737px] top-[1060px] h-[475px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[754px] top-[1076px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[652px] top-[1019px] h-[396px] w-[594px] object-contain" src={imgSozo20} />
        <div className="absolute left-[758px] top-[1369px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Sozo 20mg Capsules</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Each Capsule Contains: Enteric Coated Pellets of Esomeprazole Magnesium Trihydrate eq. to Esomeprazole.... 20mg</p>
        </div>

        <div className="absolute left-[1228px] top-[1060px] h-[475px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[1245px] top-[1076px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[1151px] top-[1019px] h-[396px] w-[594px] object-contain" src={imgSozo40} />
        <div className="absolute left-[1249px] top-[1369px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Sozo 40mg Capsules</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Each Capsule Contains: Enteric Coated Pellets of Esomeprazole Magnesium Trihydrate eq. to Esomeprazole.... 40mg</p>
        </div>

        <div className="absolute left-[736px] top-[1601px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[753px] top-[1617px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[651px] top-[1560px] h-[396px] w-[594px] object-contain" src={imgMisotal} />
        <div className="absolute left-[757px] top-[1910px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Misotal 200mcg Tablet</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Each tablet contains: Misoprostol dispersion USP eq. to Misoprostol..... 200mcg</p>
        </div>

        <div className="absolute left-0 top-[2203px] w-[1920px] bg-[#f5f5f5]">
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
              <div className="w-[228px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={onNavigateAbout} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" onClick={onNavigateProducts} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button><button type="button" onClick={onNavigateCareers} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button><button type="button" onClick={onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button></div></div>
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
            <div className="absolute left-0 top-0 h-[188px] w-[1929px] bg-[#f5f8f9]" />
            <div className="absolute left-[-1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
            <div className="absolute left-[926px] top-[33px] h-[108px] w-[175px] bg-[#9d0b0f]" />
            <div className="absolute left-[-2.5px] top-[22px] h-[131px] w-[510.5px]"><img alt="" className="size-full" src={logoShape} /></div>
            <div className="absolute left-[138px] top-[47px] h-[80.61px] w-[79.34px]"><img alt="" className="size-full" src={logoMark} /></div>
            <div className="absolute left-[229px] top-[50px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>

            <button type="button" onClick={onNavigateHome} className="absolute left-[612px] top-[77px] font-['Google_Sans:Bold',sans-serif] text-[24px] leading-[20px] text-[#9d0b0f]">Home</button>
            <div className="absolute left-[728px] top-[71px] z-20 h-[229px] w-[194px]">
              <button type="button" onClick={onNavigateAbout} className="absolute left-0 top-[6px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Our Company</button>
              <button type="button" aria-label="Toggle company menu" onClick={(event) => { event.stopPropagation(); setShowCompanyMenu((prev) => !prev); setShowProductsMenu(false) }} className="absolute left-[151px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></button>
              {showCompanyMenu ? (
                <div className="absolute left-0 top-[75px] w-[270px]">
                  <button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">About Us</button>
                  <button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Vision &amp; Mission</button>
                  <button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">IMS Policy</button>
                </div>
              ) : null}
            </div>

            <div className="absolute left-[926px] top-[72px] z-20 h-[440px] w-[205px]">
              <button type="button" onClick={onNavigateProducts} className="absolute left-[27px] top-[5px] border-0 bg-transparent p-0 font-['Google_Sans:Bold',sans-serif] text-[24px] leading-[20px] text-white">Products</button>
              <button type="button" aria-label="Toggle products menu" onClick={(event) => { event.stopPropagation(); setShowProductsMenu((prev) => !prev); setShowCompanyMenu(false) }} className="absolute left-[124px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowLight} /></div></button>
              {showProductsMenu ? (
                <div className="absolute left-0 top-[74px] w-[365px]">
                  <button type="button" onClick={onNavigateAntiInflammatory} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button>
                  <button type="button" onClick={onNavigateAntibiotics} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button>
                  <button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Gastrointestinal Agents</button>
                  <button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">CNS / Psychiatric</button>
                  <button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Cardiovascular / Lipid Control</button>
                  <button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Dermatology</button>
                  <button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Respiratory &amp; Antiallergic</button>
                </div>
              ) : null}
            </div>

            <button type="button" onClick={onNavigatePharmacovigilance} className="absolute left-[1261px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Pharmacovigilance</button>
            <button type="button" onClick={onNavigateCareers} className="absolute left-[1509px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Careers</button>
            <button type="button" onClick={onNavigateContact} className="absolute left-[1641px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Contact us</button>
            <button type="button" onClick={onNavigateFacility} className="absolute left-[1120px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Facility</button>
            <div className="absolute left-[1191px] top-[72px] size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
