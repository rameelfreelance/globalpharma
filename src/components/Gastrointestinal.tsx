import ProductTemplate from './ProductTemplate'

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
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="Gastrointestinal Agents"
      description="Acid control and gut protection with Esomeprazole, Omeprazole, and Vonoprazan."
      icon={cardIcon}
      backArrow={backArrow}
      heroMaskSrc={heroMask}
      heroImagePrimarySrc={heroImageA}
      heroImageSecondarySrc={heroImageB}
      cards={[
        {
          imageSrc: imgSozo20,
          title: 'Sozo 20mg Capsules',
          body: 'Each Capsule Contains: Enteric Coated Pellets of Esomeprazole Magnesium Trihydrate eq. to Esomeprazole.... 20mg',
        },
        {
          imageSrc: imgSozo40,
          title: 'Sozo 40mg Capsules',
          body: 'Each Capsule Contains: Enteric Coated Pellets of Esomeprazole Magnesium Trihydrate eq. to Esomeprazole.... 40mg',
        },
        {
          imageSrc: imgMisotal,
          title: 'Misotal 200mcg Tablet',
          body: 'Each tablet contains: Misoprostol dispersion USP eq. to Misoprostol..... 200mcg',
        },
      ]}
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
        { label: 'Gastrointestinal Agents', onClick: () => {}, isActive: true },
        { label: 'CNS / Psychiatric', onClick: onNavigateProducts },
        { label: 'Cardiovascular / Lipid Control', onClick: onNavigateProducts },
        { label: 'Dermatology', onClick: onNavigateProducts },
        { label: 'Respiratory & Antiallergic', onClick: onNavigateProducts },
      ]}
    />
  )
}
