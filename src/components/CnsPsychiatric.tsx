import { useState } from 'react'

const heroMask = '/assets/figma/d6a55b43-a9dd-44a0-a97f-4fb0b3a1bf47.svg'
const heroImageA = '/assets/figma/4740524d-c4c5-4ef9-82f1-aeb878f55bc1.jpg'
const heroImageB = '/assets/figma/416f56e0-3400-4dc9-93b5-39bf1cea940d.jpg'
const logoShape = '/assets/figma/faea95f4-565e-4c0e-b3e2-d26dd31ae5ab.svg'
const logoMark = '/assets/figma/0df09c64-fe67-4c81-b747-767d339f217f.svg'
const navArrowDark = '/assets/figma/9a9dbf58-a207-416d-8553-f2d937b0dc47.svg'
const navArrowLight = '/assets/figma/3168dc39-d971-4082-bea4-994fcc8e7dc2.svg'
const backArrow = '/assets/figma/2ea04984-4075-4d12-8786-f47d0750a383.svg'
const cnsIcon = '/assets/figma/fbe50fc7-13df-410d-9d8b-83e089a279b1.svg'

const footerLogo = '/assets/figma/9ebc38c2-bb75-45f7-8ca4-314f59e3330d.svg'
const footerIconMap = '/assets/figma/07ccd21e-4520-453b-a1a4-1b83d62af668.svg'
const footerIconPhone = '/assets/figma/4d525e29-2a09-40b6-b8a0-28d566fa33a4.svg'
const footerIconMail = '/assets/figma/8dad70e0-5dd2-42e7-b797-82b11c21df16.svg'
const footerSoc1 = '/assets/figma/d6a2cfc6-d164-4506-9d3e-78d83841f6f0.svg'
const footerSoc2 = '/assets/figma/aa5dee6f-fddb-45a7-8136-3c40ac97607d.svg'

type ProductCard = {
  x: number
  y: number
  title: string
  body: string
  img: string
  imgPos: [number, number, number, number]
  titleSize?: number
}

const products: ProductCard[] = [
  { x: 737, y: 1060, title: 'G-Mox 400mg Tablet', body: 'Each Film Coated Tablet Contains: Moxifloxacin as HCl.... 400mg', img: '/assets/figma/d93e1c98-11e2-4fae-a622-071659b9b7a8.png', imgPos: [652, 1019, 594, 396] },
  { x: 1228, y: 1060, title: 'Lexa 250mg Tablets', body: 'Each Film Coated Tablet Contains: Levofloxacin Hemihydrate eq. to Levofloxacin.... 250mg', img: '/assets/figma/9091a53a-cb25-43d9-b2ad-dab242351283.png', imgPos: [1148, 1019, 594, 396] },
  { x: 736, y: 1581, title: 'Lexa 500mg Tablets', body: 'Each Film Coated Tablet Contains: Levofloxacin Hemihydrate eq. to Levofloxacin.... 500mg', img: '/assets/figma/0a90e621-14fe-40e1-9ae2-054be03a5c4b.png', imgPos: [663, 1539, 594, 396] },
  { x: 1228, y: 1581, title: 'Relcip 250mg Tablets', body: 'Each Film Coated Tablet Contains: Levofloxacin Hemihydrate eq. to Levofloxacin.... 250mg', img: '/assets/figma/03f0ac3d-a3f0-465b-bf20-2a75a30c6b9f.png', imgPos: [1148, 1539, 594, 396] },
  { x: 736, y: 2097, title: 'Relcip 500mg Tablets', body: 'Each Film Coated Tablet Contains: Levofloxacin Hemihydrate eq. to Levofloxacin.... 500mg', img: '/assets/figma/e97931ae-d0be-442a-9800-dd0ba91f6eaf.png', imgPos: [656, 2055, 594, 396] },
  { x: 1228, y: 2097, title: 'Tazocillin Injection 2.25g', body: 'Piperacillin as Sodium…..2.0g\nTazobactam as Sodium……0.25g', img: '/assets/figma/147a6a80-0170-4565-bdee-cb4e834c59d2.png', imgPos: [1296, 2100, 338, 297], titleSize: 33 },
  { x: 737, y: 2610, title: 'Tazocillin Injection 4.5g', body: 'Piperacillin as Sodium…..4.0g\nTazobactam as Sodium……0.5g', img: '/assets/figma/dcf43050-f19d-4923-9f1a-1e07b39c9678.png', imgPos: [813, 2617, 330, 291], titleSize: 35 },
  { x: 1228, y: 2610, title: 'Relem 1g Injection', body: 'Meropenem trihydrate.........1g', img: '/assets/figma/8e1d98f9-cf47-40a6-b345-62b87c21d1e1.png', imgPos: [1296, 2610, 344, 303] },
  { x: 736, y: 3131, title: 'Relem 500mg Injection', body: 'Meropenem trihydrate......500mg', img: '/assets/figma/1b46c2c9-3af8-4de3-af07-6a695b149e78.png', imgPos: [813, 3140, 330, 290], titleSize: 35 },
  { x: 1228, y: 3131, title: 'E-Rel 2g Injection', body: 'Ceftriaxone sodium..............2g', img: '/assets/figma/4f95f031-cbee-484f-bd28-0c681b880461.png', imgPos: [1296, 3140, 330, 290] },
  { x: 736, y: 3647, title: 'E-Rel 250mg Injection', body: 'Ceftriaxone sodium..............250mg', img: '/assets/figma/427cc84d-e51e-428b-bb8e-bf1186285f03.png', imgPos: [783, 3655, 330, 290] },
  { x: 1228, y: 3647, title: 'E-Rel 500mg Injection', body: 'Ceftriaxone sodium..............500mg', img: '/assets/figma/754f7617-411a-4e60-b50c-18c62f604164.png', imgPos: [1275, 3655, 330, 290], titleSize: 33 },
  { x: 736, y: 4163, title: 'E-Rel 1g Injection', body: 'Ceftriaxone sodium..............1g', img: '/assets/figma/ba16a245-d2ac-442a-9dc1-fdc3d3bb72a6.png', imgPos: [773, 4172, 330, 290], titleSize: 35 },
  { x: 1228, y: 4163, title: '2CEF Injection 1g', body: 'Cefoperazone (as Sodium).......500mg\nSulbactam (as Sodium).........500mg', img: '/assets/figma/5ec63356-3b08-421e-9060-2b3be8179796.png', imgPos: [1264, 4172, 330, 290], titleSize: 33 },
  { x: 736, y: 4679, title: '2CEF Injection 2g', body: 'Cefoperazone (as Sodium)......1g\nSulbactam (as Sodium)............1g', img: '/assets/figma/fe96ad89-618b-48e0-a0b5-5f4fdf86d6ea.png', imgPos: [782, 4687, 330, 290] },
]

type Props = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntibiotics: () => void
  onNavigateAntiInflammatory: () => void
  onNavigateGastrointestinal: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function CnsPsychiatric({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigateAntiInflammatory,
  onNavigateGastrointestinal,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: Props) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)

  return (
    
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div className="relative h-[5953px] w-[1920px] shrink-0 overflow-hidden bg-white pt-[188px]">
        <div className="absolute left-[-45px] top-[918px] h-[4400px] w-[2011px] border border-[#efefef] bg-[#f5f8f9]" />
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[-55px] top-[179px] h-[1354px] w-[2031px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_297px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="size-full object-cover" src={heroImageA} />
        </div>
        <div className="absolute left-[-40px] top-[125px] h-[1336px] w-[2002px] -scale-y-100 rotate-180 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[41px_351px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroMask}')` }}>
          <img alt="" className="size-full object-cover" src={heroImageB} />
        </div>
        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">Expanding therapeutic segments with automated manufacturing</p>
        <div className="absolute left-[1196px] top-[476px] h-[111px] w-[556px] bg-white" />
        <p className="absolute left-[1243px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f]">CNS / Psychiatric</p>
        <div className="absolute left-[1196px] top-[595px] h-[12px] w-[556px] bg-[#9d0b0f]" />

        <button type="button" onClick={onNavigateProducts} className="absolute left-[195px] top-[1060px] h-[320px] w-[450px] bg-white text-left">
          <div className="absolute left-[241px] top-[1099px] h-[64px] w-[70px] overflow-hidden" />
          <div className="absolute left-[46px] top-[39px] h-[64px] w-[70px] overflow-hidden"><img alt="" className="size-full object-contain" src={cnsIcon} /></div>
          <div className="absolute left-[395px] top-[39px] h-[20px] w-[20px]"><img alt="" className="size-full -scale-x-100" src={backArrow} /></div>
          <p className="absolute left-[46px] top-[132px] w-[359px] font-['Google_Sans:Medium',sans-serif] text-[36px] leading-[37px] text-[#9d0b0f]">CNS /<br />Psychiatric</p>
          <p className="absolute left-[46px] top-[213px] w-[347px] font-['Google_Sans:Regular',sans-serif] text-[17px] leading-[28px] text-[#0b0f13]/70">Neurological and mental health support with Escitalopram, Piracetam, and Tizanidine.</p>
        </button>

        {products.map((p) => (
          <div key={`${p.title}-${p.x}-${p.y}`}>
            <div className="absolute h-[450px] w-[422px] bg-white" style={{ left: p.x, top: p.y }} />
            <div className="absolute h-[274px] w-[389px] bg-[#f5f8f9]" style={{ left: p.x + 17, top: p.y + 16 }} />
            <img alt="" className="absolute object-contain" src={p.img} style={{ left: p.imgPos[0], top: p.imgPos[1], width: p.imgPos[2], height: p.imgPos[3] }} />
            <div className="absolute w-[379px]" style={{ left: p.x + 21, top: p.y + (p.y === 4679 ? 309 : p.y === 1060 || p.y === 2610 ? 309 : 309) }}>
              <p className="font-['Google_Sans:Medium',sans-serif] text-[#0b0f13]" style={{ fontSize: p.titleSize ?? 36 }}>{p.title}</p>
              <p className="mt-2 whitespace-pre-line font-['Google_Sans:Regular',sans-serif] text-[18px] leading-[28px] text-[#0b0f13]/70">{p.body}</p>
            </div>
          </div>
        ))}

        <div className="absolute left-0 top-[5298px] w-[1920px] bg-[#f5f5f5]">
          <div className="h-[509px] bg-[#4e0a0c] px-[195px] pb-[99px] pt-[98px]">
            <div className="flex w-[1532px] gap-[63px] text-white">
              <div className="w-[418px]">
                <div className="mb-4 flex items-start gap-3"><img alt="" className="h-[44px] w-[44px] object-contain" src={footerLogo} /><div className="font-['Myriad_Pro:Semibold',sans-serif] text-[22px] leading-[23px]"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div></div>
                <p className="font-['Inter:Regular',sans-serif] text-[21.98px] leading-[39px]">We are committed to manufacturing and<br />delivering high-quality pharmaceutical<br />products that meet stringent regulatory<br />standards.</p>
                <div className="mt-6 flex gap-3"><a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="Facebook" className="size-[29px]" src={footerSoc1} /></a><a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"><img alt="LinkedIn" className="size-[29px]" src={footerSoc2} /></a></div>
              </div>
              <div className="w-[228px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={onNavigateAbout} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" onClick={onNavigateProducts} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button><button type="button" onClick={onNavigateCareers} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button><button type="button" onClick={onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button></div></div>
              <div className="w-[292px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p><div className="mt-[50px] space-y-[15px] font-['Inter:Regular',sans-serif] text-[21px]"><p>Policy Statement</p><p>Apply for other departments</p><p>Apply for sales</p></div></div>
              <div className="w-[405px]"><p className="font-['Inter:Bold',sans-serif] text-[40px]">Our Location</p><div className="mt-[50px] flex flex-col gap-[22px]"><div className="flex items-center gap-[19px]"><img alt="" className="h-[20px] w-[16px]" src={footerIconMap} /><p className="font-['Inter:Regular',sans-serif] text-[22px] leading-[28px]">Plot No.08-A, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p></div><div className="flex items-center gap-[19px]"><img alt="" className="h-[15px] w-[16px]" src={footerIconPhone} /><a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] text-[21.98px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">+92-51-449-302</a></div><div className="flex items-center gap-[18px]"><img alt="" className="h-[12px] w-[18px]" src={footerIconMail} /><a href="mailto:info@globalpharmaceuticalspk.com" className="font-['Inter:Regular',sans-serif] text-[21.98px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">info@globalpharmaceuticalspk.com</a></div></div></div>
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
            <div className="absolute left-[-1px] top-[22px] h-[131px] w-[510.5px]"><img alt="" className="size-full" src={logoShape} /></div>
            <div className="absolute left-[139.5px] top-[47px] h-[80.61px] w-[79.34px]"><img alt="" className="size-full" src={logoMark} /></div>
            <div className="absolute left-[230.5px] top-[50px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white"><p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p></div>
            <button type="button" onClick={onNavigateHome} className="absolute left-[612px] top-[77px] font-['Google_Sans:Bold',sans-serif] text-[24px] leading-[20px] text-[#9d0b0f]">Home</button>
            <div className="absolute left-[728px] top-[71px] z-20 h-[229px] w-[194px]">
              <button type="button" onClick={onNavigateAbout} className="absolute left-0 top-[6px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]">Our Company</button>
              <button type="button" aria-label="Toggle company menu" onClick={(event) => { event.stopPropagation(); setShowCompanyMenu((prev) => !prev) }} className="absolute left-[151px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></button>
              {showCompanyMenu ? <div className="absolute left-0 top-[75px] w-[270px]"><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">About Us</button><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Vision &amp; Mission</button><button type="button" onClick={onNavigateAbout} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">IMS Policy</button></div> : null}
            </div>
            <div className="absolute left-[926px] top-[72px] z-20 h-[440px] w-[205px]">
              <button type="button" onClick={onNavigateProducts} className="absolute left-[27px] top-[5px] border-0 bg-transparent p-0 text-[24px] text-white">Products</button>
              <button type="button" aria-label="Toggle products menu" onClick={(event) => { event.stopPropagation(); setShowProductsMenu((prev) => !prev) }} className="absolute left-[124px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowLight} /></div></button>
              {showProductsMenu ? <div className="absolute left-0 top-[74px] w-[365px]"><button type="button" onClick={onNavigateAntiInflammatory} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button><button type="button" onClick={onNavigateAntibiotics} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button><button type="button" onClick={onNavigateGastrointestinal} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Gastrointestinal Agents</button><button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">CNS / Psychiatric</button><button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Cardiovascular / Lipid Control</button><button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Dermatology</button><button type="button" onClick={onNavigateProducts} className="block h-[49px] w-full bg-[#827f7f] pl-[23px] text-left text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Respiratory &amp; Antiallergic</button></div> : null}
            </div>
            <button type="button" onClick={onNavigatePharmacovigilance} className="absolute left-[1261px] top-[77px] text-[24px] text-[#010c0d]">Pharmacovigilance</button>
            <button type="button" onClick={onNavigateCareers} className="absolute left-[1509px] top-[77px] text-[24px] text-[#010c0d]">Careers</button>
            <button type="button" onClick={onNavigateContact} className="absolute left-[1641px] top-[77px] text-[24px] text-[#010c0d]">Contact us</button>
            <button type="button" onClick={onNavigateFacility} className="absolute left-[1121px] top-[77px] text-[24px] text-[#010c0d]">Facility</button>
            <div className="absolute left-[1192px] top-[72px] size-[32px] overflow-clip"><div className="absolute inset-[35.83%_26.13%_35%_26.14%]"><img alt="" className="size-full" src={navArrowDark} /></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
