import ProductTemplate from './ProductTemplate'

const heroMask = '/assets/figma/74c09d58-c898-41a4-9673-e0c4c7dd2207.svg'
const heroImageA = '/assets/figma/bf3061a3-bcf6-4e09-b585-b243b0f948f3.jpg'
const heroImageB = '/assets/figma/ca01afe2-a8c5-4dec-8e25-5c95f92d0381.jpg'
const logoShape = '/assets/figma/5aa54120-d389-493a-bc6e-1e7898e5e484.svg'
const logoMark = '/assets/figma/1c5145ae-086c-43ca-8468-ea6352c49df8.svg'
const navArrowLight = '/assets/figma/269079a1-6fcc-4777-8be7-6d185fbb4e13.svg'
const navArrowDark = '/assets/figma/185b4dde-27f7-48cb-a471-2b59cd325fff.svg'
const backArrow = '/assets/figma/fc6e28f5-40de-4cd6-9cc6-a65e00c0b47f.svg'
const iconDerm = '/assets/figma/b630c473-8728-44a8-844e-2141faba3bc7.svg'
const footerLogo = '/assets/figma/a27b28b0-0684-4182-a312-3579b26893b7.svg'
const footerMap = '/assets/figma/02252b3a-4271-4706-b129-15ccec242c6d.svg'
const footerPhone = '/assets/figma/03cf962b-6b51-4eba-aa83-3234edc2f557.svg'
const footerMail = '/assets/figma/a3d66ece-2b8d-4063-9964-704558e03028.svg'
const footerSoc1 = '/assets/figma/bc41ceac-f8aa-4996-b22b-bdd9c847b8b6.svg'
const footerSoc2 = '/assets/figma/e0bd8d0c-6b30-471f-8851-b46c490bc28f.svg'

type Props = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateProducts: () => void
  onNavigateAntibiotics: () => void
  onNavigateAntiInflammatory: () => void
  onNavigateGastrointestinal: () => void
  onNavigateCns: () => void
  onNavigateCardiovascular: () => void
  onNavigateRespiratory: () => void
  onNavigatePharmacovigilance: () => void
  onNavigateCareers: () => void
  onNavigateContact: () => void
  onNavigateFacility: () => void
}

export default function Dermatology({
  onNavigateHome, onNavigateAbout, onNavigateProducts, onNavigateAntibiotics, onNavigateAntiInflammatory,
  onNavigateGastrointestinal, onNavigateCns, onNavigateCardiovascular, onNavigateRespiratory,
  onNavigatePharmacovigilance, onNavigateCareers, onNavigateContact, onNavigateFacility,
}: Props) {
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="Dermatology"
      description="Topical treatments for skin infections and inflammation including Terbinafine and Tretinoin."
      icon={iconDerm}
      backArrow={backArrow}
      heroMaskSrc={heroMask}
      heroImagePrimarySrc={heroImageA}
      heroImageSecondarySrc={heroImageB}
      cards={[]}
      assets={{
        logoShape,
        logoMark,
        navArrowDark,
        navArrowLight,
        footerLogo,
        footerIconMap: footerMap,
        footerIconPhone: footerPhone,
        footerIconMail: footerMail,
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
        { label: 'CNS / Psychiatric', onClick: onNavigateCns },
        { label: 'Cardiovascular / Lipid Control', onClick: onNavigateCardiovascular },
        { label: 'Dermatology', onClick: () => {}, isActive: true },
        { label: 'Respiratory & Antiallergic', onClick: onNavigateRespiratory },
      ]}
    />
  )
}
