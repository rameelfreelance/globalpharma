import { useEffect, useState } from 'react'

const heroMaskA = '/assets/figma/7f650b89-dbe7-4f86-89aa-2848a16509ad.svg'
const heroImageA = '/assets/figma/9728e774-8eaf-434f-89fc-e5c689dcb478.jpg'
const heroImageB = '/assets/figma/9728e774-8eaf-434f-89fc-e5c689dcb478.jpg'
const logoShape = '/assets/figma/47f6e2de-4ff8-43f0-b6b9-336d02f3f6e1.svg'
const logoMark = '/assets/figma/65885048-e718-4740-89df-5fde2ca550bc.svg'
const navArrowDark = '/assets/figma/5cf1522b-8010-4be4-9767-b24921933e99.svg'
const navArrowLight = '/assets/figma/a65e43ed-c15f-47e2-ad3e-0d55653530a6.svg'
const backArrow = '/assets/figma/88226041-c1b0-4389-a6a2-590abdc7887c.svg'
const cardIcon = '/assets/figma/77de83ef-2bec-4826-965a-ca6b2fae359d.svg'

const imgIrosur = '/assets/figma/791f6393-995f-4719-99f9-9dff380d9217.png'
const imgDroxona = '/assets/figma/ee2cf161-101a-4829-91d1-8f1b4abef723.png'
const imgBetaLib = '/assets/figma/8aeaac09-ba77-4da8-aa36-7750b6f7375a.png'
const imgRelisulide = '/assets/figma/8cfdc889-144d-4dbb-a04e-7d0bf3a6fa14.png'
const imgReliChole = '/assets/figma/1c211cce-24fe-412b-9fb9-9c93a826a36c.png'
const imgGenbetMask = '/assets/figma/55db27a8-0889-431a-b5b0-6abfe6433636.svg'
const imgGenbet = '/assets/figma/25bfd6a5-20df-4042-adae-9f80cb09888d.png'
const imgSofit = '/assets/figma/a95b37bd-1167-4cb4-92f7-5064ff4a78ce.png'

const footerLogo = '/assets/figma/850c3b3c-b269-44ed-a10e-2d05f9bf09e3.svg'
const footerIconMap = '/assets/figma/eacedd0e-1758-4857-a5a4-6fe6dae7c87b.svg'
const footerIconPhone = '/assets/figma/4dc7ec05-0843-4ca8-852d-ce55153f6279.svg'
const footerIconMail = '/assets/figma/03d9ae24-bc42-4501-b846-fff5fe575475.svg'
const footerSoc1 = '/assets/figma/c8be4af3-05e4-4703-9ea9-e9fff5ace6eb.svg'
const footerSoc2 = '/assets/figma/d691dfc2-d433-497f-ad5f-e3fb20c82026.svg'

type AntiInflammatoryAnalgesicsProps = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntibiotics: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function AntiInflammatoryAnalgesics({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: AntiInflammatoryAnalgesicsProps) {
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
      <div className="relative h-[3969px] w-[1920px] shrink-0 overflow-hidden bg-white pt-[188px]">
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-55px] top-[179px] h-[1354px] w-[2031px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_297px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMaskA}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImageA} />
        </div>
        <div className="absolute left-[-70px] top-[-202px] h-[1327px] w-[1991px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[71px_678px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMaskA}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImageB} />
        </div>

        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">
          Expanding therapeutic segments with automated manufacturing
        </p>
        <div className="absolute left-[-1px] top-[917px] h-[2641px] w-[1921px] border border-[#efefef] bg-[#f5f8f9]" />
        <div className="absolute left-[863px] top-[476px] h-[111px] w-[889px] bg-white" />
        <p className="absolute left-[887px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f] hero-clip-wrap"><span className="hero-clip-line d2">Anti-inflammatory / Analgesics</span></p>
        <div className="absolute left-[863px] top-[595px] h-[12px] w-[889px] bg-[#9d0b0f] line-reveal" />

        <button type="button" onClick={onNavigateProducts} className="absolute left-[195px] top-[1060px] h-[320px] w-[450px] bg-white text-left">
          <div className="absolute left-[39px] top-[37px] h-[70px] w-[70px] overflow-hidden"><img alt="" className="size-full object-contain" src={cardIcon} /></div>
          <div className="absolute left-[389px] top-[38px] h-[20px] w-[20px]"><img alt="" className="size-full -scale-x-100" src={backArrow} /></div>
          <p className="absolute left-[39px] top-[139px] w-[359px] font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[37px] text-[#9d0b0f]">Anti-inflammatory / Analgesics</p>
          <p className="absolute left-[39px] top-[223px] w-[372px] font-['Google_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#0b0f13]/70">
            Pain relief and anti-inflammatory therapies including Piroxicam, Diclofenac, and Meloxicam.
          </p>
        </button>

        <div className="absolute left-[736px] top-[1060px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[753px] top-[1076px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[651px] top-[1017px] h-[396px] w-[594px] object-contain" src={imgDroxona} />
        <div className="absolute left-[757px] top-[1369px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[34px] text-[#0b0f13]">Droxona 30mg Injection</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Each ml contains:<br />Keterolac Tromethamine......30mg</p>
        </div>

        <div className="absolute left-[1228px] top-[1060px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[1245px] top-[1076px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[1240px] top-[1062px] h-[340px] w-[388px] object-contain" src={imgIrosur} />
        <div className="absolute left-[1249px] top-[1369px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Iro-Sur Injection</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Iron Sucrose<br />Complex.........100mg</p>
        </div>

        <div className="absolute left-[736px] top-[1603px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[753px] top-[1619px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[655px] top-[1559px] h-[396px] w-[594px] object-contain" src={imgRelisulide} />
        <div className="absolute left-[757px] top-[1912px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[34px] text-[#0b0f13]">Relisulide 100mg tablet</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Each film coated tablet contains: Nimesulide......100mg</p>
        </div>

        <div className="absolute left-[1228px] top-[1603px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[1245px] top-[1619px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[1222px] top-[1603px] h-[350px] w-[400px] object-contain" src={imgBetaLib} />
        <div className="absolute left-[1249px] top-[1912px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Beta-Lib Tablet</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Each talet contains: Piroxicam beta cyclodextrin eq. to Piroxicam.....20mg</p>
        </div>

        <div className="absolute left-[736px] top-[2146px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[753px] top-[2162px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <div className="absolute left-[757px] top-[2224px] h-[201px] w-[371px] bg-[#f5f8f9]" />
        <div className="absolute left-[646px] top-[2163px] h-[324px] w-[594px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[111px_61px] mask-size-[371px_201px]" style={{ maskImage: `url('${imgGenbetMask}')` }}>
          <img alt="" className="size-full object-contain" src={imgGenbet} />
        </div>
        <div className="absolute left-[757px] top-[2455px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[34px] text-[#0b0f13]">Genbet Cream</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Gentamycin............0.1%<br />Betamethasone...........0.05%</p>
        </div>

        <div className="absolute left-[1228px] top-[2146px] h-[450px] w-[422px] bg-white scale-in box-hover" />
        <div className="absolute left-[1245px] top-[2162px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[1142px] top-[2101px] h-[396px] w-[594px] object-contain" src={imgReliChole} />
        <div className="absolute left-[1249px] top-[2455px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Reli-Chole Injection</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Cholecalciferol............5mg</p>
        </div>

        <div className="absolute left-[736px] top-[2689px] h-[474px] w-[422px] bg-white" />
        <div className="absolute left-[753px] top-[2705px] h-[274px] w-[389px] bg-[#f5f8f9]" />
        <img alt="" className="absolute left-[660px] top-[2689px] h-[314px] w-[574px] object-contain" src={imgSofit} />
        <div className="absolute left-[757px] top-[2998px] w-[379px]">
          <p className="font-['Google_Sans:Medium',sans-serif] text-[36px] text-[#0b0f13]">Sofit Cream</p>
          <p className="mt-2 font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">Fluocinilone acetonide…..0.01%<br />Hydroquinone……4%<br />Tretinoin….0.05%</p>
        </div>

        <div className="absolute left-0 top-[3314px] w-[1920px] bg-[#f5f5f5]">
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
            <div className="absolute left-0 top-0 h-[188px] w-[1925px] bg-[#f5f8f9]" />
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
                  <button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button>
                  <button type="button" onClick={onNavigateAntibiotics} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button>
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
            <button type="button" onClick={onNavigateFacility} className="absolute left-[1124px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Facility</button>
            <div className="absolute left-[1195px] top-[72px] size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
