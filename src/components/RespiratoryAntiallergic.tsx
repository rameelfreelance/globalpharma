import ProductTemplate from './ProductTemplate'

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
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="Respiratory & Antiallergic"
      description="Allergy and respiratory relief with Cetirizine, Ebastine, and Montelukast."
      icon={iconResp}
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
        { label: 'Dermatology', onClick: onNavigateProducts },
        { label: 'Respiratory & Antiallergic', onClick: () => {}, isActive: true },
      ]}
    />
  )
}
