import ProductTemplate from './ProductTemplate'

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
  onNavigateGastrointestinal: () => void
  onNavigateCns: () => void
  onNavigateCardiovascular: () => void
  onNavigateRespiratory: () => void
  onNavigateDermatology: () => void
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
  onNavigateGastrointestinal,
  onNavigateCns,
  onNavigateCardiovascular,
  onNavigateRespiratory,
  onNavigateDermatology,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact,
  onNavigateFacility,
}: AntiBioticsProps) {
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="Anti-biotics"
      subtitle="(Fluoroquinolones & Cephalosporins)"
      description="Broad-spectrum antibiotics including Ciprofloxacin, Levofloxacin, and Cefixime."
      icon={capsuleIcon}
      backArrow={backArrow}
      heroMaskSrc={heroMask}
      heroImagePrimarySrc={heroImage}
      cards={[
        {
          imageSrc: productImg1,
          title: 'Tavizem 100mg Dry Suspension',
          body: 'Cefixime (as trihydrate)...100mg',
        },
        {
          imageSrc: productImg2,
          title: 'Tavizem 400mg Capsule',
          body: 'Cefixime (as trihydrate)...400mg',
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
        { label: 'Anti-biotics', onClick: () => {}, isActive: true },
        { label: 'Anti-inflammatory / Analgesics', onClick: onNavigateAntiInflammatory },
        { label: 'Gastrointestinal Agents', onClick: onNavigateGastrointestinal },
        { label: 'CNS / Psychiatric', onClick: onNavigateCns },
        { label: 'Cardiovascular / Lipid Control', onClick: onNavigateCardiovascular },
        { label: 'Dermatology', onClick: onNavigateDermatology },
        { label: 'Respiratory & Antiallergic', onClick: onNavigateRespiratory },
      ]}
    />
  )
}
