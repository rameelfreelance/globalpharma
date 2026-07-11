const defaultFooterLogo = '/assets/figma/90b558ce-4eb8-4910-b850-9d29697f70cd.svg'
const defaultIconMap = '/assets/figma/e33509ba-de6e-4417-8d63-7ba9dfca5c55.svg'
const defaultIconPhone = '/assets/figma/9222189b-d69a-42b9-bc29-3b2e8850daa8.svg'
const defaultIconMail = '/assets/figma/f0fdb91b-f567-4bc7-84b4-fcc248d482b7.svg'
const defaultSoc1 = '/assets/figma/77cb6439-9414-44c3-b334-d6b60b4c25c2.svg'
const defaultSoc2 = '/assets/figma/77580f71-3629-41b7-8e10-e385eba65e54.svg'

type DesktopSiteFooterProps = {
  onNavigateHome?: () => void
  onNavigateAbout?: () => void
  onNavigateProducts?: () => void
  onNavigateCareers?: () => void
  onNavigateContact?: () => void
  footerLogo?: string
  footerIconMap?: string
  footerIconPhone?: string
  footerIconMail?: string
  footerSoc1?: string
  footerSoc2?: string
  productsLabel?: string
}

export default function DesktopSiteFooter({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateCareers,
  onNavigateContact,
  footerLogo = defaultFooterLogo,
  footerIconMap = defaultIconMap,
  footerIconPhone = defaultIconPhone,
  footerIconMail = defaultIconMail,
  footerSoc1 = defaultSoc1,
  footerSoc2 = defaultSoc2,
  productsLabel = 'Our Products',
}: DesktopSiteFooterProps) {
  return (
    <footer className="mt-auto w-full bg-[#4e0a0c] text-white">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-14 sm:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div>
          <div className="mb-4 flex items-start gap-3">
            <img alt="" className="h-11 w-11 object-contain" src={footerLogo} />
            <div className="font-['Myriad_Pro:Semibold',sans-serif] text-[clamp(16px,1.2vw,22px)] leading-[1.15]">
              <p>Global</p>
              <p>Pharmaceuticals</p>
              <p>Pakistan</p>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,22px)] leading-[1.6] text-[#f6fafb]">
            We are committed to manufacturing and delivering high-quality pharmaceutical products that meet stringent regulatory standards.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="inline-flex transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
              <img alt="Facebook" className="size-[29px]" src={footerSoc1} />
            </a>
            <a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="inline-flex transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
              <img alt="LinkedIn" className="size-[29px]" src={footerSoc2} />
            </a>
          </div>
        </div>
        <div>
          <p className="font-['Inter:Bold',sans-serif] text-[clamp(22px,1.8vw,40px)]">Quick Links</p>
          <div className="mt-[50px] flex flex-col gap-[14px] font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,21px)] text-[#f6fafb]">
            <button type="button" onClick={onNavigateHome} className="text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button>
            <button type="button" onClick={onNavigateAbout} className="text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button>
            <button type="button" onClick={onNavigateProducts} className="text-left transition-colors duration-200 hover:text-[#f8c9c9]">{productsLabel}</button>
            <button type="button" onClick={onNavigateCareers} className="text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button>
            <button type="button" onClick={onNavigateContact} className="text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact us</button>
          </div>
        </div>
        <div>
          <p className="font-['Inter:Bold',sans-serif] text-[clamp(22px,1.8vw,40px)]">Quick Links</p>
          <div className="mt-[50px] flex flex-col gap-[15px] font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,21px)] text-[#f6fafb]">
            <p>Policy Statement</p>
            <p>Apply for other departments</p>
            <p>Apply for sales</p>
          </div>
        </div>
        <div>
          <p className="font-['Inter:Bold',sans-serif] text-[clamp(22px,1.8vw,40px)]">Our Location</p>
          <div className="mt-[50px] flex flex-col gap-[22px]">
            <div className="flex items-start gap-[19px]">
              <img alt="" className="mt-1 h-5 w-4 shrink-0" src={footerIconMap} />
              <p className="font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,22px)] leading-[28px]">Plot No.08, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p>
            </div>
            <div className="flex items-center gap-[19px]">
              <img alt="" className="h-[15px] w-4 shrink-0" src={footerIconPhone} />
              <a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,22px)] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">+92-51-449-302</a>
            </div>
            <div className="flex items-center gap-[18px]">
              <img alt="" className="h-3 w-[18px] shrink-0" src={footerIconMail} />
              <a href="mailto:info@globalpharmaceuticalspk.com" className="font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,22px)] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">info@globalpharmaceuticalspk.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#ececec] px-6 py-[60px] text-center xl:px-10">
        <p className="font-['Inter:Regular',sans-serif] text-[clamp(15px,1.1vw,22px)] capitalize text-[#f6fafb]">
          © 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
