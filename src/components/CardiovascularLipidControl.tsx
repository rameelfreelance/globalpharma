import ProductTemplate from './ProductTemplate'

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
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="Cardiovascular / Lipid Control"
      description="Cholesterol management with Rosuvastatin Calcium formulations."
      icon={tubeIcon}
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
        { label: 'Cardiovascular / Lipid Control', onClick: () => {}, isActive: true },
        { label: 'Dermatology', onClick: onNavigateProducts },
        { label: 'Respiratory & Antiallergic', onClick: onNavigateProducts },
      ]}
    />
  )
}
