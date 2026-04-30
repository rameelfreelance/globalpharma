import { useEffect, useState } from 'react'

const heroMask = '/assets/figma/e989233f-2b43-4bd9-90c3-e9999de97c80.svg'
const heroImage = '/assets/figma/ab11be5e-f9d1-4cbc-8ccf-d52be89eefe7.jpg'
const productImg1 = '/assets/figma/09ab9a78-1fb0-4d97-9c2c-c192e32e0098.png'
const productImg2 = '/assets/figma/221b58a0-b565-4ec3-84b2-a0437c05729b.png'
const logoShape = '/assets/figma/2acebd7e-1d21-4ce6-a27d-c08180133a54.svg'
const logoMark = '/assets/figma/d6125a4a-d85e-42de-b185-46f5d5f20392.svg'
const navArrowDark = '/assets/figma/bade19dd-9167-409c-84f9-871b2a593952.svg'
const navArrowLight = '/assets/figma/3504b79c-92d0-4c5a-9c10-94af163a0798.svg'
const capsuleIcon = '/assets/figma/31bd549d-57b1-457e-827e-ee630b7b6fd4.svg'
const backArrow = '/assets/figma/efe1f3de-a4a8-4398-9ee5-fe0d8f5ba592.svg'
const footerLogo = '/assets/figma/57525083-4600-45e2-a67f-4baeb96eced5.svg'
const footerIconMap = '/assets/figma/69344ca2-dd5f-484d-a24f-c6f230d76c71.svg'
const footerIconPhone = '/assets/figma/7f58b9f3-4e32-4627-a0b4-2ac09d2db7f1.svg'
const footerIconMail = '/assets/figma/dd900737-d9c2-4a6c-99dd-e02c7be29fa2.svg'
const footerSoc1 = '/assets/figma/cb12e247-dc9b-4880-97c8-077609857aaf.svg'
const footerSoc2 = '/assets/figma/0f5a1b9c-846e-459b-9f0d-d3f754d4fd39.svg'

type AntiBioticsProps = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntiInflammatory: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function AntiBiotics({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateAntiInflammatory,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: AntiBioticsProps) {
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
        <div className="absolute left-[-477px] top-[-252px] h-[1787px] w-[2680px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[478px_728px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImage} />
        </div>

        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">
          Expanding therapeutic segments with automated manufacturing
        </p>
        <div className="absolute left-[-1px] top-[917px] h-[1286px] w-[1921px] border border-[#efefef] bg-[#f5f8f9]" />
        <div className="absolute left-[1196px] top-[476px] h-[111px] w-[556px] bg-white" />
        <p className="absolute left-[1315px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f] hero-clip-wrap"><span className="hero-clip-line d2">Anti-biotics</span></p>
        <div className="absolute left-[1196px] top-[595px] h-[12px] w-[556px] bg-[#9d0b0f] line-reveal" />

        <button
          type="button"
          onClick={onNavigateProducts}
          aria-label="Go back to products page"
          className="absolute left-[195px] top-[1060px] h-[320px] w-[450px] bg-white text-left"
        >
          <div className="absolute left-[46px] top-[37px] h-[70px] w-[70px] overflow-hidden">
            <img alt="" className="size-full object-contain" src={capsuleIcon} />
          </div>
          <div className="absolute left-[395px] top-[38px] h-[20px] w-[20px]">
            <img alt="" className="size-full -scale-x-100" src={backArrow} />
          </div>
          <div className="absolute left-[46px] top-[139px] w-[359px]">
            <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#9d0b0f]">Anti-biotics</p>
            <p className="font-['Google_Sans:Medium',sans-serif] text-[21px] leading-[33px] text-[#0b0f13]">(Fluoroquinolones &amp; Cephalosporins)</p>
            <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#0b0f13]/70">
              Broad-spectrum antibiotics including Ciprofloxacin, Levofloxacin, and Cefixime.
            </p>
          </div>
        </button>

        <div className="absolute left-[737px] top-[1060px] h-[475px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[754px] top-[1076px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[789px] top-[1075px] h-[275px] w-[312px] object-contain" src={productImg1} />
        <div className="absolute left-[758px] top-[1369px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Tavizem 100mg Dry Suspension</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Cefixime (as trihydrate)...100mg</p>
        </div>

        <div className="absolute left-[1228px] top-[1060px] h-[475px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[1245px] top-[1076px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[1143px] top-[1019px] h-[396px] w-[594px] object-contain" src={productImg2} />
        <div className="absolute left-[1249px] top-[1369px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Tavizem 400mg Capsule</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Cefixime (as trihydrate)...400mg</p>
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
            <div className="absolute left-0 top-0 h-[188px] w-[1919px] bg-[#f5f8f9]" />
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
                  <button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button>
                  <button type="button" onClick={onNavigateAntiInflammatory} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button>
                  <button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Gastrointestinal Agents</button>
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
            <button type="button" onClick={onNavigateFacility} className="absolute left-[1123px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Facility</button>
            <div className="absolute left-[1194px] top-[72px] size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
