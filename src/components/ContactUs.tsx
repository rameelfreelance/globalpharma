import { type FormEvent, useState } from 'react'

const heroImage = '/assets/figma/0044fa93-564e-4e4c-aed2-9f21699640a2.jpg'
const heroImageMask = '/assets/figma/3d704145-dd7d-49a0-9304-02b284cadec9.svg'
const partnerLogo = '/assets/figma/835c801f-6ef4-45f3-b440-36c628b59db3.svg'
const imgVector9 = '/assets/figma/46f42ba1-4ac0-4b1a-a075-4b53d9bc720c.svg'
const logoShape = '/assets/figma/b4a5d6d7-b42c-40e9-9d79-0b211ffa688b.svg'
const logoMark = '/assets/figma/0679b012-2e3f-4008-8d7a-227ed0ca862d.svg'
const partnerMark = '/assets/figma/b30082b4-7646-4f34-995a-1ad18a7d4099.svg'

type ContactUsProps = {
  onNavigateHome: () => void
  onNavigateAbout: () => void
  onNavigateCareers?: () => void
  onNavigatePharmacovigilance?: () => void
  onNavigateFacility?: () => void
  onNavigateProducts?: () => void
}

export default function ContactUs({ onNavigateHome, onNavigateAbout, onNavigateCareers, onNavigatePharmacovigilance, onNavigateFacility, onNavigateProducts }: ContactUsProps) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const errors = {
    name: form.name.trim() ? '' : 'Name is required',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Enter a valid email',
    phone: form.phone.trim() ? '' : 'Phone is required',
    message: form.message.trim() ? '' : 'Please add your message',
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })
    if (errors.name || errors.email || errors.phone || errors.message) return
    setIsSubmitting(true)
    setSubmitMessage('')
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSubmitting(false)
    setSubmitMessage('Thanks! Your message has been submitted.')
    setForm({ name: '', email: '', phone: '', message: '' })
    setTouched({})
  }

  return (
    
    <div className="flex w-screen justify-center overflow-x-auto bg-white">
      <div className="contact-figma relative h-[2698px] w-[1920px] shrink-0 overflow-hidden bg-white">
        <div className="absolute left-0 top-0 h-[188px] w-[1920px] bg-[#f5f8f9]" />
        <div className="absolute left-[1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />
        <div className="absolute left-[1623px] top-[33px] h-[108px] w-[153px] bg-[#9d0b0f]" />

        <div className="absolute left-[-3.5px] top-[22px] h-[131px] w-[510.5px]">
          <img alt="" className="h-full w-full object-fill" src={logoShape} />
        </div>
        <div className="absolute left-[137px] top-[47px] h-[80.61px] w-[79.34px]">
          <img alt="" className="h-full w-full object-contain" src={logoMark} />
        </div>
        <div className="absolute left-[228px] top-[49.61px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white">
          <p>Global</p>
          <p>Pharmaceuticals</p>
          <p>Pakistan</p>
        </div>

        <button
          type="button"
          onClick={onNavigateHome}
          className="absolute left-[612px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] tracking-[-0.144px] text-[#9d0b0f]"
          style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
        >
          Home
        </button>
        <div className="absolute left-[728px] top-[71px] z-20 h-[184px] w-[186px]">
          <button
            type="button"
            onClick={onNavigateAbout}
            className="absolute left-0 top-[6px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] tracking-[-0.144px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]"
            style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
          >
            Our Company
          </button>
          <button type="button" aria-label="Toggle company menu" onClick={(event) => { event.stopPropagation(); setShowCompanyMenu((prev) => !prev) }} className="absolute left-[151px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer">
            <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
              <img alt="" className="block size-full max-w-none" src={imgVector9} />
            </div>
          </button>
          {showCompanyMenu ? (
            <div className="absolute left-[-27px] top-[75px] w-[270px]">
              <button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]" onClick={onNavigateAbout}>About Us</button>
              <button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]" onClick={onNavigateAbout}>Vision &amp; Mission</button>
              <button type="button" className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]" onClick={onNavigateAbout}>IMS Policy</button>
            </div>
          ) : null}
        </div>
        <button type="button" onClick={() => onNavigateProducts?.()} className="absolute left-[958px] top-[77px] border-0 bg-transparent p-0 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] tracking-[-0.144px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}>Products</button>
        <div className="absolute left-[1053px] top-[71px] size-[32px] overflow-clip">
          <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
            <img alt="" className="block size-full max-w-none" src={imgVector9} />
          </div>
        </div>
        <button type="button" onClick={onNavigateFacility} className="absolute left-[1124px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] tracking-[-0.144px] text-[#010c0d] transition-colors hover:text-[#9d0b0f]" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}>Facility</button>
        <div className="absolute left-[1195px] top-[72px] size-[32px] overflow-clip">
          <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
            <img alt="" className="block size-full max-w-none" src={imgVector9} />
          </div>
        </div>
        <button type="button" onClick={onNavigatePharmacovigilance} className="absolute left-[1261px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] tracking-[-0.144px] text-[#010c0d] transition-colors hover:text-[#9d0b0f]" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}>Pharmacovigilance</button>
        <button type="button" onClick={onNavigateCareers} className="absolute left-[1509px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] tracking-[-0.144px] text-[#010c0d] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f]" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}>Careers</button>
        <p className="absolute left-[1638px] top-[77px] font-['Google_Sans:Regular',sans-serif] text-[24px] font-[400] leading-[20px] tracking-[-0.144px] text-white" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}>Contact us</p>

        <p className="absolute left-[195px] top-[241px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f]">
          Contact us for more
          <br />
          information or support
        </p>
        <div className="absolute left-[1px] top-[476px] h-[455px] w-[1920px] bg-[#9d0b0f]" />
        <div className="absolute left-[1px] top-[370px] h-[1293px] w-[1940px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10px_106px] mask-size-[1920px_455px]" style={{ maskImage: `url('${heroImageMask}')` }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={heroImage} />
        </div>
        <div className="absolute left-[1238px] top-[476px] h-[111px] w-[472px] bg-white" />
        <p className="absolute left-[1325px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f]">Contact us</p>
        <div className="absolute left-[1238px] top-[595px] h-[12px] w-[472px] bg-[#9d0b0f]" />

        <div className="absolute left-0 top-[930px] h-[774px] w-[1922px] bg-[#f5f8f9]" />
        <div className="absolute left-[232px] top-[1077px] flex size-[56px] items-center justify-center bg-[#9d0b0f]">
          <svg viewBox="0 0 24 24" className="h-[27px] w-[27px]" aria-hidden="true">
            <path fill="#fff" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
        </div>
        <div className="absolute left-[232px] top-[1182px] flex size-[56px] items-center justify-center bg-[#9d0b0f]">
          <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true">
            <path fill="#fff" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7 8-5H4l8 5zm0 2L4 9v8h16V9l-8 5z" />
          </svg>
        </div>
        <div className="absolute left-[232px] top-[1286px] flex size-[56px] items-center justify-center bg-[#9d0b0f]">
          <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true">
            <path fill="#fff" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.3 22 2 13.7 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z" />
          </svg>
        </div>
        <p className="absolute left-[316px] top-[1070px] font-['Inter:Regular',sans-serif] text-[25px] leading-[35px] text-black">
          Plot No.08-A, Street No. S8,
          <br />
          RCCI Rawat, Pakistan
        </p>
        <a href="mailto:info@globalpharmapk.com" className="absolute left-[316px] top-[1194px] font-['Inter:Regular',sans-serif] text-[25px] leading-[25px] text-black transition-colors duration-200 hover:text-[#9d0b0f] hover:underline">info@globalpharmapk.com</a>
        <div className="absolute left-[316px] top-[1281px] font-['Inter:Regular',sans-serif] text-[25px] leading-[25px] text-black">
          <a href="tel:+92514499040" className="transition-colors duration-200 hover:text-[#9d0b0f] hover:underline">+92 51 4499040</a>
          <br />
          <a href="tel:+92514499041" className="transition-colors duration-200 hover:text-[#9d0b0f] hover:underline">+92 51 4499041</a>
        </div>

        <form className="absolute left-[966px] top-[1070px] flex w-[724px] flex-col gap-[20px]" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              placeholder="Name"
              className="w-full border-0 border-b border-[#d0d5dd] px-[19px] py-[14px] text-[20px] text-[#6d6d6d] outline-none transition-colors duration-200 focus:border-[#9d0b0f]"
            />
            {touched.name && errors.name ? <p className="mt-1 px-[19px] text-[14px] text-[#9d0b0f]">{errors.name}</p> : null}
          </div>
          <div>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              placeholder="Email Address"
              className="w-full border-0 border-b border-[#d0d5dd] px-[19px] py-[14px] text-[20px] text-[#6d6d6d] outline-none transition-colors duration-200 focus:border-[#9d0b0f]"
            />
            {touched.email && errors.email ? <p className="mt-1 px-[19px] text-[14px] text-[#9d0b0f]">{errors.email}</p> : null}
          </div>
          <div>
            <input
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              placeholder="Phone"
              className="w-full border-0 border-b border-[#d0d5dd] px-[19px] py-[14px] text-[20px] text-[#6d6d6d] outline-none transition-colors duration-200 focus:border-[#9d0b0f]"
            />
            {touched.phone && errors.phone ? <p className="mt-1 px-[19px] text-[14px] text-[#9d0b0f]">{errors.phone}</p> : null}
          </div>
          <div>
            <textarea
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
              placeholder="How can we help you ? Feel free to get in touch!"
              className="h-[152px] w-full resize-none border-0 border-b border-[#d0d5dd] px-[19px] py-[14px] text-[20px] text-[#6d6d6d] outline-none transition-colors duration-200 focus:border-[#9d0b0f]"
            />
            {touched.message && errors.message ? <p className="mt-1 px-[19px] text-[14px] text-[#9d0b0f]">{errors.message}</p> : null}
          </div>
          <button type="submit" disabled={isSubmitting} className="h-[62px] w-[191px] bg-[#9d0b0f] font-['Inter:Semi_Bold',sans-serif] text-[14px] text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? 'Submitting...' : 'Get In Touch'}
          </button>
          {submitMessage ? <p className="text-[15px] text-[#2f4252]">{submitMessage}</p> : null}
        </form>

        <div className="absolute left-[1px] top-[1704px] h-[339px] w-[1921px] bg-white" />
        <p className="absolute left-[283px] top-[1807px] w-[1354px] text-center font-['Google_Sans:Regular',sans-serif] text-[40px] leading-[40.8px] text-[#051c2f]">
          Our Trusted Group Companies and Strategic Partners
        </p>
        <div className="absolute left-[287px] top-[1883px] h-[57px] w-[56px]">
          <img alt="" className="h-full w-full object-contain" src={partnerMark} />
        </div>
        <p className="absolute left-[351px] top-[1900px] w-[586px] whitespace-nowrap font-['Google_Sans:Bold',sans-serif] text-[40px] font-bold leading-[23px] text-[#9d0b0f]">
          Global Pharmaceuticals Pvt. Ltd.
        </p>
        <img alt="" className="absolute left-[994px] top-[1881px] h-[52px] w-[639px] object-contain" src={partnerLogo} />

        <div className="absolute left-0 top-[2043px] w-[1920px] bg-[#f5f5f5]">
          <div className="h-[509px] bg-[#4e0a0c] px-[195px] pb-[99px] pt-[98px]">
            <div className="flex w-[1532px] gap-[63px] text-white">
              <div className="w-[418px]">
                <div className="mb-4 flex items-start gap-3">
                  <img alt="" className="h-[44px] w-[44px] object-contain" src={logoMark} />
                  <div className="font-['Myriad_Pro:Semibold',sans-serif] text-[22px] leading-[23px] text-white">
                    <p>Global</p>
                    <p>Pharmaceuticals</p>
                    <p>Pakistan</p>
                  </div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[21.98px] leading-[39px]">
                  We are committed to manufacturing and
                  <br />
                  delivering high-quality pharmaceutical
                  <br />
                  products that meet stringent regulatory
                  <br />
                  standards.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="flex size-[24px] items-center justify-center rounded-full border border-white text-[13px] font-semibold leading-none text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                    f
                  </a>
                  <a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="flex size-[24px] items-center justify-center rounded-full border border-white text-[11px] font-semibold leading-none text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                    in
                  </a>
                </div>
              </div>
              <div className="w-[228px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p>
                <div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]">
                  <button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button>
                  <button type="button" onClick={onNavigateAbout} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button>
                  <button type="button" onClick={() => onNavigateProducts?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button>
                  <button type="button" onClick={() => onNavigateCareers?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Career</button>
                  <button type="button" className="block w-full cursor-default text-left">Contact Us</button>
                </div>
              </div>
              <div className="w-[292px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p>
                <div className="mt-[50px] space-y-[15px] font-['Inter:Regular',sans-serif] text-[21px]">
                  <p>Policy Statement</p>
                  <p>Apply For Other Departments</p>
                  <p>Apply For Sales</p>
                </div>
              </div>
              <div className="w-[405px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Our Location</p>
                <div className="mt-[50px] flex flex-col gap-[22px]">
                  <div className="flex items-center gap-[12px]">
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" aria-hidden="true">
                      <path fill="#fff" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                    </svg>
                    <p className="font-['Inter:Regular',sans-serif] text-[22px] leading-[28px] text-[#f6fafb]">
                      Plot No.08-A, Street No. S8, RCCI
                      <br />
                      Rawat, Islamabad, Pakistan
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <svg viewBox="0 0 24 24" className="h-[17px] w-[18px] shrink-0" aria-hidden="true">
                      <path fill="#fff" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.3 22 2 13.7 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z" />
                    </svg>
                    <a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] text-[21.98px] text-[#f6fafb] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">+92-51-449-302</a>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <svg viewBox="0 0 24 24" className="h-[14px] w-[20px] shrink-0" aria-hidden="true">
                      <path fill="#fff" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7 8-5H4l8 5zm0 2L4 9v8h16V9l-8 5z" />
                    </svg>
                    <a href="mailto:info@globalpharmaceuticalspk.com" className="font-['Inter:Regular',sans-serif] text-[21.98px] text-[#f6fafb] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">info@globalpharmaceuticalspk.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4e0a0c] border border-[#ececec] border-solid content-stretch flex h-[146px] items-center justify-center pb-[59px] pl-[286px] pr-[1175px] pt-[60px] relative shrink-0 w-full">
            <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] whitespace-nowrap">
              © 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
