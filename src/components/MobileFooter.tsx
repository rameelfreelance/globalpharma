type MobileFooterProps = {
  onNavigateHome?: () => void
  onNavigateAbout?: () => void
  onNavigateProducts?: () => void
  onNavigateCareers?: () => void
  onNavigateContact?: () => void
}

const footerLogo = '/assets/figma/850c3b3c-b269-44ed-a10e-2d05f9bf09e3.svg'
const footerIconMap = '/assets/figma/eacedd0e-1758-4857-a5a4-6fe6dae7c87b.svg'
const footerIconPhone = '/assets/figma/4dc7ec05-0843-4ca8-852d-ce55153f6279.svg'
const footerIconMail = '/assets/figma/03d9ae24-bc42-4501-b846-fff5fe575475.svg'
const footerSoc1 = '/assets/figma/c8be4af3-05e4-4703-9ea9-e9fff5ace6eb.svg'
const footerSoc2 = '/assets/figma/d691dfc2-d433-497f-ad5f-e3fb20c82026.svg'

export default function MobileFooter({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateCareers,
  onNavigateContact,
}: MobileFooterProps) {
  return (
    <footer className="bg-[#4e0a0c] px-5 py-10 text-center text-white">
      <div className="flex items-center justify-center gap-2">
        <img alt="" className="h-[34px] w-[34px] object-contain" src={footerLogo} />
        <p className="whitespace-nowrap font-['Myriad_Pro:Semibold',sans-serif] text-[clamp(1.15rem,4vw,1.55rem)] leading-none">
          Global Pharmaceuticals Pakistan
        </p>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/90">
        We are committed to manufacturing and delivering high-quality pharmaceutical products.
      </p>

      <div className="mt-5">
        <p className="text-[18px] font-semibold">Quick Links</p>
        <div className="mt-3 space-y-2 text-sm">
          {onNavigateHome ? <button type="button" onClick={onNavigateHome} className="block w-full hover:underline">Home</button> : null}
          {onNavigateAbout ? <button type="button" onClick={onNavigateAbout} className="block w-full hover:underline">About Us</button> : null}
          {onNavigateProducts ? <button type="button" onClick={onNavigateProducts} className="block w-full hover:underline">Our Products</button> : null}
          {onNavigateCareers ? <button type="button" onClick={onNavigateCareers} className="block w-full hover:underline">Career</button> : null}
          {onNavigateContact ? <button type="button" onClick={onNavigateContact} className="block w-full hover:underline">Contact us</button> : null}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[18px] font-semibold">Quick Links</p>
        <div className="mt-3 space-y-2 text-sm">
          <p>Policy Statement</p>
          <p>Apply For Other Departments</p>
          <p>Apply For Sales</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[18px] font-semibold">Our Location</p>
        <div className="mx-auto mt-3 max-w-[320px] space-y-2.5 text-sm">
          <div className="flex items-start justify-center gap-1.5">
            <img alt="" className="mt-[3px] h-3.5 w-3 shrink-0 opacity-95" src={footerIconMap} />
            <p className="max-w-[280px] text-left">Plot No.08, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <img alt="" className="h-3 w-3" src={footerIconPhone} />
            <a href="tel:+9251449302" className="hover:underline">+92-51-449-302</a>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <img alt="" className="h-2.5 w-3.5" src={footerIconMail} />
            <a href="mailto:info@globalpharmaceuticalspk.com" className="break-all hover:underline">info@globalpharmaceuticalspk.com</a>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook">
          <img alt="Facebook" className="size-[28px]" src={footerSoc1} />
        </a>
        <a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn">
          <img alt="LinkedIn" className="size-[28px]" src={footerSoc2} />
        </a>
      </div>

      <p className="mt-5 text-xs text-white/80">© 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.</p>
    </footer>
  )
}
