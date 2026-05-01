import ProductTemplate from './ProductTemplate'

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
  onNavigateCardiovascular: () => void
  onNavigateRespiratory: () => void
  onNavigateDermatology: () => void
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
  onNavigateCardiovascular,
  onNavigateRespiratory,
  onNavigateDermatology,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: Props) {
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="CNS / Psychiatric"
      description="Neurological and mental health support with Escitalopram, Piracetam, and Tizanidine."
      icon={cnsIcon}
      backArrow={backArrow}
      heroMaskSrc={heroMask}
      heroImagePrimarySrc={heroImageA}
      heroImageSecondarySrc={heroImageB}
      cards={products.map((p) => ({
        imageSrc: p.img,
        title: p.title,
        body: p.body,
      }))}
      assets={{
        logoShape,
        logoMark,
        navArrowDark,
        navArrowLight,
        footerLogo,
        footerIconMap,
        footerIconPhone,
        footerIconMail,
        footerSocialFacebook: footerSoc1,
        footerSocialLinkedIn: footerSoc2,
      }}
      navigation={{
        onNavigateHome,
        onNavigateAbout,
        onNavigateProducts,
        onNavigateFacility,
        onNavigatePharmacovigilance,
        onNavigateCareers,
        onNavigateContact,
      }}
      productMenuLinks={[
        { label: 'Anti-inflammatory / Analgesics', onClick: onNavigateAntiInflammatory },
        { label: 'Anti-biotics', onClick: onNavigateAntibiotics },
        { label: 'Gastrointestinal Agents', onClick: onNavigateGastrointestinal },
        { label: 'CNS / Psychiatric', onClick: () => {}, isActive: true },
        { label: 'Cardiovascular / Lipid Control', onClick: onNavigateCardiovascular },
        { label: 'Dermatology', onClick: onNavigateDermatology },
        { label: 'Respiratory & Antiallergic', onClick: onNavigateRespiratory },
      ]}
    />
  )
}
