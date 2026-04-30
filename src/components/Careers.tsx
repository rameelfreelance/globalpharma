import Navbar from './Navbar'

const logoShape = '/assets/figma/b4a5d6d7-b42c-40e9-9d79-0b211ffa688b.svg'
const logoMark = '/assets/figma/0679b012-2e3f-4008-8d7a-227ed0ca862d.svg'
const heroImage = '/assets/figma/77889ecf-8dda-4b36-9c4a-a945d9aa46cb.png'
const heroImageMask = '/assets/figma/76ef87b2-09c9-473c-b1f4-3428c141bf07.png'

type CareersProps = {
  onNavigateHome: () => void
  onNavigateAbout: (section?: 'about' | 'vision' | 'ims') => void
  onNavigateContact: () => void
  onNavigatePharmacovigilance?: () => void
  onNavigateFacility?: (section?: 'production' | 'quality') => void
  onNavigateProducts?: () => void
}

export default function Careers({ onNavigateHome, onNavigateAbout, onNavigateContact, onNavigatePharmacovigilance, onNavigateFacility, onNavigateProducts }: CareersProps) {
  return (
    
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div className="contact-figma relative h-[3454px] w-[1920px] shrink-0 overflow-hidden bg-white">
        <div className="absolute left-0 top-0 h-[188px] w-[1919px] bg-[#f5f8f9]" />
        <div className="absolute left-[-1px] top-[33px] h-[108px] w-[1922px] bg-white shadow-[0_1px_4px_rgba(25,33,61,0.06)]" />

        <div className="absolute left-[-3.5px] top-[22px] h-[131px] w-[510.5px]">
          <img alt="" className="h-full w-full object-fill" src={logoShape} />
        </div>
        <div className="absolute left-[137px] top-[47px] h-[80.61px] w-[79.34px]">
          <img alt="" className="h-full w-full object-contain" src={logoMark} />
        </div>
        <div className="absolute left-[228px] top-[49.61px] font-['Myriad_Pro:Semibold',sans-serif] text-[28px] leading-[28px] text-white">
          <p>Global</p><p>Pharmaceuticals</p><p>Pakistan</p>
        </div>

        <Navbar
          activePage="careers"
          onNavigateHome={onNavigateHome}
          onNavigateAbout={onNavigateAbout}
          onNavigateProducts={onNavigateProducts}
          onNavigateFacility={onNavigateFacility}
          onNavigatePharmacovigilance={onNavigatePharmacovigilance}
          onNavigateCareers={() => {}}
          onNavigateContact={onNavigateContact}
        />

        <p className="absolute left-[195px] top-[238px] w-[1600px] font-['Google_Sans:Medium',sans-serif] text-[80px] leading-[92.8px] text-[#051c2f] hero-clip-wrap">
          <span className="hero-clip-line d0">Grow Your Career With Global</span>
          <span className="hero-clip-line d1">Pharmaceutical Pakistan</span>
        </p>
        <div className="absolute left-[3px] top-[381px] flex h-[708px] w-[1942px] items-center justify-center">
          <div>
            <div
              className="relative h-[708px] w-[1942px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_95px] mask-size-[1920px_455px]"
              style={{ maskImage: `url('${heroImageMask}')` }}
            >
              <img alt="" className="absolute inset-0 size-full object-cover object-left" style={{ transform: 'scaleX(-1)' }} src={heroImage} />
            </div>
          </div>
        </div>
        <div className="absolute left-[1238px] top-[476px] h-[111px] w-[472px] bg-white" />
        <p className="absolute left-[1366px] top-[494px] font-['Google_Sans:Medium',sans-serif] text-[60px] leading-[66px] text-[#051c2f] hero-clip-wrap"><span className="hero-clip-line d2">Careers</span></p>
        <div className="absolute left-[1238px] top-[595px] h-[12px] w-[472px] bg-[#9d0b0f] line-reveal" />

        <p className="absolute left-[195px] top-[1043px] h-[431px] w-[1515px] text-justify font-['Google_Sans:Regular',sans-serif] text-[34px] leading-[47.6px] text-[#2f4252] fade-up d0">
          Global Pharmaceuticals Pakistan offers a dynamic and growth-oriented work environment that fosters both individual and professional development. We firmly believe that attracting and nurturing top talent is the cornerstone of our continued success.
          {'\n'}At Global Pharmaceuticals, every employee is valued as an integral part of our organization, contributing meaningfully to our shared goals. We are committed to maintaining a culture of respect, collaboration, and excellence.
          {'\n'}As an equal opportunity employer, Global Pharmaceuticals Pakistan welcomes and values high-caliber, talented, and results-driven professionals who demonstrate strong teamwork, effective communication skills, and a solid work ethic.
        </p>

        <p className="absolute left-[195px] top-[1592px] font-['Lato:Regular',sans-serif] text-[18px] fade-up d0">Experience Level</p>
        <p className="absolute left-[457px] top-[1592px] font-['Lato:Regular',sans-serif] text-[18px] fade-up d1">Location</p>
        <p className="absolute left-[719px] top-[1592px] font-['Lato:Regular',sans-serif] text-[18px] fade-up d2">Categories</p>
        <div className="absolute left-[195px] top-[1631px] flex h-[64px] w-[202px] items-center justify-center gap-[14px] border border-[#d0d7dd] fade-up d0"><p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#040f24]">All Experience Level</p><p>▾</p></div>
        <div className="absolute left-[457px] top-[1631px] flex h-[64px] w-[202px] items-center justify-center gap-[14px] border border-[#d0d7dd] fade-up d1"><p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#040f24]">All Location</p><p>▾</p></div>
        <div className="absolute left-[719px] top-[1631px] flex h-[64px] w-[202px] items-center justify-center gap-[14px] border border-[#d0d7dd] fade-up d2"><p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#040f24]">All Categories</p><p>▾</p></div>
        <button type="button" className="group absolute left-[981px] top-[1631px] flex items-center gap-[10px] bg-[#0b0f13] px-[40px] py-[20px] transition-colors duration-200 hover:bg-[#9d0b0f] fade-up d3"><span className="font-['Inter:Medium',sans-serif] text-[18px] leading-[18px] text-white">View Jobs</span><span className="text-white transition-transform duration-200 group-hover:translate-x-[3px]">→</span></button>
        <div className="absolute left-[1247px] top-[1631px] h-[64px] w-[463px] border border-[#d0d7dd] line-reveal d4" />

        <div className="absolute left-[213px] top-[1949px] h-[218px] w-[540px] border border-transparent hover:border-[#9d0b0f] transition-colors duration-200 cursor-pointer bg-white p-[28px] scale-in card-hover d0">
          <p className="font-['Lato:Bold',sans-serif] text-[22px] text-[#9d0b0f]">Production Pharmacist</p>
          <div className="mt-3 flex gap-2"><span className="bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Mid-Level</span><span className="bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Islamabad</span></div>
          <p className="mt-4 text-[14px] leading-[22px] text-[#4f5665]">Primary Responsibility:Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases....</p>
        </div>
        <div className="absolute left-[213px] top-[2197px] h-[218px] w-[540px] border border-transparent hover:border-[#9d0b0f] transition-colors duration-200 cursor-pointer bg-white p-[28px] scale-in card-hover d1">
          <p className="font-['Lato:Bold',sans-serif] text-[22px] text-[#9d0b0f]">Production Pharmacist</p>
          <div className="mt-3 flex gap-2"><span className="bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Mid-Level</span><span className="bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Islamabad</span></div>
          <p className="mt-4 text-[14px] leading-[22px] text-[#4f5665]">Primary Responsibility:Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases....</p>
        </div>
        <div className="absolute left-[213px] top-[2445px] h-[218px] w-[540px] border border-transparent hover:border-[#9d0b0f] transition-colors duration-200 cursor-pointer bg-white p-[28px] scale-in card-hover d2">
          <p className="font-['Lato:Bold',sans-serif] text-[22px] text-[#9d0b0f]">Production Pharmacist</p>
          <div className="mt-3 flex gap-2"><span className="bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Mid-Level</span><span className="bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Islamabad</span></div>
          <p className="mt-4 text-[14px] leading-[22px] text-[#4f5665]">Primary Responsibility:Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases....</p>
        </div>

        <div className="absolute left-[794px] top-[1949px] h-[714px] w-[914px] bg-white p-[62px] fade-up d1">
          <p className="font-['Lato:Bold',sans-serif] text-[22px] text-[#040f24] fade-up d2">Production Pharmacist</p>
          <div className="mt-4 flex gap-2 fade-up d3"><span className="rounded-[4px] bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Mid-Level</span><span className="rounded-[4px] bg-[#e7ebf1] px-2 py-1 text-[13px] font-semibold text-[#4f5665]">Islamabad</span></div>
          <p className="mt-6 text-[16px] font-semibold leading-[22px] text-[#4f5665] fade-up d3">Primary Responsibility:</p>
          <p className="mt-1 text-[14px] leading-[22px] text-[#4f5665] fade-up d4">Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases and APIs using technologies such as Node.js, Python, Ruby, or Java.Designing, implementing, and managing databases (SQL or NoSQL) to ensure data integrity and efficient retrieval.Using version control systems like Git to manage code changes and collaborate with other developers.Implementing security best practices to protect applications from vulnerabilities and threats.Automating deployment processes and managing CI/CD pipelines to streamline development and release cycles.Working with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software.</p>
          <div className="mt-6 grid grid-cols-3 gap-6 text-[14px] leading-[22px] fade-up d5">
            <div><p className="text-black">Employment Type:</p><p className="text-[#4f5665]">Full-time</p></div>
            <div><p className="text-black">Work place Type:</p><p className="text-[#4f5665]">Hybrid</p></div>
            <div><p className="text-black">Experience Required:</p><p className="text-[#4f5665]">Minimum 3 Years</p></div>
            <div><p className="text-black">Salary:</p><p className="text-[#4f5665]">Commensurate with experience and skills</p></div>
            <div className="col-span-2"><p className="text-black">Job Location:</p><p className="text-[#4f5665]">Plot No.08-A, Street No. S8, RCCI Rawat, Islamabad, Pakistan</p></div>
          </div>
          <button type="button" className="group mt-8 flex items-center gap-[10px] bg-[#9d0b0f] px-[40px] py-[20px] fade-up d5 transition-colors duration-200 hover:bg-[#051c2f]"><span className="font-['Inter:Medium',sans-serif] text-[18px] leading-[18px] text-white transition-colors duration-200 group-hover:text-white">Apply Now</span><span className="text-white transition-transform duration-200 group-hover:translate-x-[3px]">→</span></button>
        </div>

        <div className="absolute left-0 top-[2799px] w-[1920px] bg-[#f5f5f5]">
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
                  <a href="https://www.facebook.com/globalpharmaceuticalspk" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on Facebook" className="flex size-[24px] items-center justify-center rounded-full border border-white text-[13px] font-semibold leading-none text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">f</a>
                  <a href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/" target="_blank" rel="noreferrer noopener" aria-label="Global Pharmaceuticals on LinkedIn" className="flex size-[24px] items-center justify-center rounded-full border border-white text-[11px] font-semibold leading-none text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">in</a>
                </div>
              </div>
              <div className="w-[228px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p>
                <div className="mt-[50px] space-y-[14px] font-['Inter:Regular',sans-serif] text-[21px]"><button type="button" onClick={onNavigateHome} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Home</button><button type="button" onClick={() => onNavigateAbout('about')} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">About Us</button><button type="button" onClick={() => onNavigateProducts?.()} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Our Products</button><button type="button" className="block w-full cursor-default text-left">Career</button><button type="button" onClick={onNavigateContact} className="block w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]">Contact Us</button></div>
              </div>
              <div className="w-[292px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Quick Links</p>
                <div className="mt-[50px] space-y-[15px] font-['Inter:Regular',sans-serif] text-[21px]"><p>Policy Statement</p><p>Apply For Other Departments</p><p>Apply For Sales</p></div>
              </div>
              <div className="w-[405px]">
                <p className="font-['Inter:Bold',sans-serif] text-[40px]">Our Location</p>
                <div className="mt-[50px] flex flex-col gap-[22px]">
                  <div className="flex items-center gap-[12px]">
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" aria-hidden="true"><path fill="#fff" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" /></svg>
                    <p className="font-['Inter:Regular',sans-serif] text-[22px] leading-[28px] text-[#f6fafb]">Plot No.08-A, Street No. S8, RCCI<br />Rawat, Islamabad, Pakistan</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <svg viewBox="0 0 24 24" className="h-[17px] w-[18px] shrink-0" aria-hidden="true"><path fill="#fff" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.3 22 2 13.7 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z" /></svg>
                    <a href="tel:+9251449302" className="font-['Inter:Regular',sans-serif] text-[21.98px] text-[#f6fafb] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline">+92-51-449-302</a>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <svg viewBox="0 0 24 24" className="h-[14px] w-[20px] shrink-0" aria-hidden="true"><path fill="#fff" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7 8-5H4l8 5zm0 2L4 9v8h16V9l-8 5z" /></svg>
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
