import ProductTemplate from './ProductTemplate'

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
  return (
    <ProductTemplate
      headline="Expanding therapeutic segments with automated manufacturing"
      categoryTitle="Anti-inflammatory / Analgesics"
      description="Pain relief and anti-inflammatory therapies including Piroxicam, Diclofenac, and Meloxicam."
      icon={cardIcon}
      backArrow={backArrow}
      heroMaskSrc={heroMaskA}
      heroImagePrimarySrc={heroImageA}
      heroImageSecondarySrc={heroImageB}
      cards={[
        {
          imageSrc: imgDroxona,
          title: 'Droxona 30mg Injection',
          body: 'Each ml contains:\nKeterolac Tromethamine......30mg',
        },
        {
          imageSrc: imgIrosur,
          title: 'Iro-Sur Injection',
          body: 'Iron Sucrose\nComplex.........100mg',
        },
        {
          imageSrc: imgRelisulide,
          title: 'Relisulide 100mg tablet',
          body: 'Each film coated tablet contains: Nimesulide......100mg',
        },
        {
          imageSrc: imgBetaLib,
          title: 'Beta-Lib Tablet',
          body: 'Each talet contains: Piroxicam beta cyclodextrin eq. to Piroxicam.....20mg',
        },
        {
          imageSrc: imgGenbet,
          title: 'Genbet Cream',
          body: 'Gentamycin............0.1%\nBetamethasone...........0.05%',
        },
        {
          imageSrc: imgReliChole,
          title: 'Reli-Chole Injection',
          body: 'Cholecalciferol............5mg',
        },
        {
          imageSrc: imgSofit,
          title: 'Sofit Cream',
          body: 'Fluocinilone acetonide…..0.01%\nHydroquinone……4%\nTretinoin….0.05%',
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
        { label: 'Anti-inflammatory / Analgesics', onClick: () => {}, isActive: true },
        { label: 'Anti-biotics', onClick: onNavigateAntibiotics },
        { label: 'Gastrointestinal Agents', onClick: onNavigateProducts },
        { label: 'CNS / Psychiatric', onClick: onNavigateProducts },
        { label: 'Cardiovascular / Lipid Control', onClick: onNavigateProducts },
        { label: 'Dermatology', onClick: onNavigateProducts },
        { label: 'Respiratory & Antiallergic', onClick: onNavigateProducts },
      ]}
    />
  )
}
