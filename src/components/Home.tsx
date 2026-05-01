import { useEffect, useRef, useState } from "react";

type HomeProps = {
  onNavigateAbout?: (section?: "about" | "vision" | "ims") => void;
  onNavigateContact?: () => void;
  onNavigateCareers?: () => void;
  onNavigatePharmacovigilance?: () => void;
  onNavigateFacility?: (section?: "production" | "quality") => void;
  onNavigateProducts?: () => void;
  onNavigateAntibiotics?: () => void;
  onNavigateAntiInflammatory?: () => void;
  onNavigateGastrointestinal?: () => void;
  onNavigateCns?: () => void;
  onNavigateCardiovascular?: () => void;
  onNavigateRespiratory?: () => void;
  onNavigateDermatology?: () => void;
};

const imgVector = "/assets/figma/fe834eb7-b0e7-4831-97db-d7fc7ec1de7a.svg";
const imgVector1 = "/assets/figma/32fcc45e-4989-4220-89c8-dee0c90a4533.svg";
const imgVector2 = "/assets/figma/fc557ff4-b445-4796-a0ea-dcb444a65f8b.svg";
const imgAsc00405Jpg2 =
  "/assets/figma/10e1e937-3ca3-4360-98e2-264a8c704998.jpg";
const imgBsc00308Jpg2 =
  "/assets/figma/6561dde1-b13f-41d4-8efd-763ad597ce84.jpg";
const imgAsc00405Jpg1 =
  "/assets/figma/c4c22250-c81f-4eb7-a8a4-d4b30fafa2aa.jpg";
const imgBsc00308Jpg1 =
  "/assets/figma/23e108ed-8b93-4631-9048-2a0ddbd8b39a.jpg";
const imgAsc01420Jpg1 =
  "/assets/figma/2dd2bee2-80bf-4566-9061-6496e63a021e.jpg";
const imgWhatsAppImage20260407At40919Pm1 =
  "/assets/figma/2878d3e6-8baa-4083-9b60-e3b37c72d9bc.jpg";
const imgAsc01300Jpg1 =
  "/assets/figma/77394743-12ab-4a6d-bdf6-ed90b141e5c4.jpg";
const imgDsc01471Copy2 =
  "/assets/figma/a8926ecc-b464-43de-b606-8b87c5638a6b.jpg";
const imgDsc01471Copy1 =
  "/assets/figma/5307df76-c637-4d12-8f92-9ac0373b849a.jpg";
const imgGroup1 = "/assets/figma/bec08ab6-3d2f-4ff8-866d-65ad12fc2969.svg";
const imgIcon = "/assets/figma/fe639f43-87d8-4adb-ab81-52dd2b9d0975.svg";
const imgIcon1 = "/assets/figma/5d5b6f15-7cd4-45bb-af6f-6fa58a1bf5ce.svg";
const imgIcon2 = "/assets/figma/06b48337-d3c1-4306-8253-93cf60306112.svg";
const imgGroup1000001883 =
  "/assets/figma/67970b2d-a518-415c-a947-8785df6d3f9e.svg";
const imgFrame1000001885 =
  "/assets/figma/f7243fe9-daaf-40eb-a46a-8e03cac42b3c.svg";
const imgArrowRight = "/assets/figma/5e8d8e5c-2ac1-4e62-b6fc-3f7ada4293a9.svg";
const imgLine2 = "/assets/figma/26296c6b-c96c-43b7-8811-fcc47868aafb.svg";
const imgVector3 = "/assets/figma/0fa6b73b-b6dc-428a-b751-43f1bb3e68b3.svg";
const imgVector4 = "/assets/figma/f2f91006-387a-482b-a9c5-ad57877e2480.svg";
const imgVector5 = "/assets/figma/9a879653-d03b-4ecc-a227-f6e69595f916.svg";
const imgVector6 = "/assets/figma/454bd6d0-883b-42e2-bbfe-b07f4098bc23.svg";
const imgRectangle4 = "/assets/figma/b84ca093-e4ba-4417-ad88-69f2582d7f5d.svg";
const imgGroup1000000720 =
  "/assets/figma/07d5e3cb-d0e4-40f0-a151-747e59b66200.svg";
const imgGroup1000001909 =
  "/assets/figma/fcaaaee6-1875-499a-b4a6-008fcecdb078.svg";
const imgRectangle3468149 =
  "/assets/figma/2ffc29e1-9247-4c46-a6c1-b07fcbbf8f01.svg";
const imgGroup2 = "/assets/figma/5269e67b-f146-46b0-a2bc-af442005a890.svg";
const imgVector7 = "/assets/figma/7e8a7b0c-6b0c-4b40-9f47-9c71148f7b89.svg";

function StethoscopeLine({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[50px]"}
      data-node-id="1:404"
      data-name="stethoscope-line"
    >
      <div
        className="absolute inset-[16.25%_12.5%_12.5%_20%]"
        data-node-id="1:405"
        data-name="Vector"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgVector}
        />
      </div>
    </div>
  );
}

function MedicineBottleLine({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[50px]"}
      data-node-id="1:402"
      data-name="medicine-bottle-line"
    >
      <div
        className="absolute inset-[12.5%_20%]"
        data-node-id="1:403"
        data-name="Vector"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgVector1}
        />
      </div>
    </div>
  );
}

function CapsuleLine({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[50px]"}
      data-node-id="1:397"
      data-name="capsule-line"
    >
      <div
        className="absolute inset-[14.24%]"
        data-node-id="1:398"
        data-name="Vector"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgVector2}
        />
      </div>
    </div>
  );
}

export default function Home({
  onNavigateAbout,
  onNavigateContact,
  onNavigateCareers,
  onNavigatePharmacovigilance,
  onNavigateFacility,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigateAntiInflammatory,
  onNavigateGastrointestinal,
  onNavigateCns,
  onNavigateCardiovascular,
  onNavigateRespiratory,
  onNavigateDermatology,
}: HomeProps) {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showFacilityMenu, setShowFacilityMenu] = useState(false);
  const [commitmentPercent, setCommitmentPercent] = useState(0);
  const commitmentCounterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = commitmentCounterRef.current;
    if (!el) return;

    let countRaf = 0;
    let scrollRaf: number | null = null;
    let started = false;

    const cleanupScroll = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollRaf !== null) {
        cancelAnimationFrame(scrollRaf);
        scrollRaf = null;
      }
    };

    const runCounter = () => {
      if (started) return;
      started = true;
      cleanupScroll();

      const durationMs = 1600;
      const t0 = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / durationMs);
        const eased = 1 - (1 - t) ** 3;
        setCommitmentPercent(Math.round(eased * 100));
        if (t < 1) {
          countRaf = requestAnimationFrame(tick);
        }
      };
      countRaf = requestAnimationFrame(tick);
    };

    const tryStart = () => {
      if (started) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      if (rect.top < wh * 0.92 && rect.bottom > 0) {
        runCounter();
      }
    };

    const onScroll = () => {
      if (started) return;
      if (scrollRaf !== null) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = null;
        tryStart();
      });
    };

    tryStart();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cleanupScroll();
      cancelAnimationFrame(countRaf);
    };
  }, []);

  useEffect(() => {
    const closeMenus = () => {
      setShowCompanyMenu(false);
      setShowProductsMenu(false);
      setShowFacilityMenu(false);
    };
    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white min-h-screen flex justify-center">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body, #root { background-color: white !important; margin: 0; padding: 0; width: 100%; overflow-x: hidden; }
      ` }} />
      <div
        className="home-figma relative h-[5858px] w-[1920px] shrink-0"
        data-node-id="47:269"
        data-name="Home"
      >
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          focusable="false"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <defs>
            <clipPath id="home-hero-shape" clipPathUnits="userSpaceOnUse">
              <path d="M0 75H1920V1199C1920 1199 1583.55 1075.4 917.617 1154.85C251.688 1234.3 0 1134.28 0 1134.28V75Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-white -z-10 w-[200vw] left-1/2 -translate-x-1/2" />
        <div
          className="absolute bg-[#f5f5f5] bottom-[2px] content-stretch flex flex-col items-start left-1/2 -translate-x-1/2 w-[100vw]"
          data-node-id="47:272"
        >
          <div
            className="bg-[#4e0a0c] content-stretch flex flex-col h-[509px] items-start pb-[99px] pl-[195px] pr-[193px] pt-[98px] relative shrink-0 w-full"
            data-node-id="47:273"
          >
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
              data-node-id="47:274"
            >
              <div
                className="col-1 content-stretch flex flex-col gap-[4px] items-start ml-0 mt-0 relative row-1 w-[1532px]"
                data-node-id="47:275"
              >
                <div
                  className="content-stretch flex gap-[63px] items-start relative shrink-0 w-full"
                  data-node-id="47:276"
                >
                  <div
                    className="h-[248.476px] relative shrink-0 w-[418px]"
                    data-node-id="47:277"
                  >
                    <div
                      className="absolute font-['Inter:Regular',sans-serif] font-normal h-[156px] leading-[0] left-0 not-italic text-[#f6fafb] text-[21.98px] top-[92.48px] w-[418px]"
                      data-node-id="47:278"
                    >
                      <p className="leading-[39px] mb-0">
                        We are committed to manufacturing and
                      </p>
                      <p className="leading-[39px] mb-0">
                        delivering high-quality pharmaceutical
                      </p>
                      <p className="leading-[39px] mb-0">
                        products that meet stringent regulatory
                      </p>
                      <p className="leading-[39px]">{`standards. `}</p>
                    </div>
                    <div
                      className="absolute contents inset-[0_41.63%_72.07%_0]"
                      data-node-id="47:279"
                    >
                      <div
                        className="absolute inset-[0_83.66%_72.07%_0]"
                        data-node-id="47:280"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup1}
                        />
                      </div>
                      <div
                        className="absolute flex flex-col font-['Myriad_Pro:Semibold',sans-serif] inset-[1.02%_41.63%_72.83%_19.65%] justify-center leading-[0] not-italic text-[22px] text-white"
                        data-node-id="47:291"
                      >
                        <p className="leading-[23px] mb-0">Global</p>
                        <p className="leading-[23px] mb-0">Pharmaceuticals</p>
                        <p className="leading-[23px]">Pakistan</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[50px] items-start leading-[normal] not-italic relative shrink-0 w-[228px]"
                    data-node-id="47:292"
                  >
                    <p
                      className="font-['Inter:Bold',sans-serif] font-bold h-[48px] min-w-full relative shrink-0 text-[40px] text-white w-[min-content]"
                      data-node-id="47:293"
                    >
                      Quick Links
                    </p>
                    <div
                      className="capitalize content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[14px] items-start relative shrink-0 text-[#f6fafb] text-[21px] w-[131px]"
                      data-node-id="47:294"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="h-[25px] relative shrink-0 w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]"
                        data-node-id="47:295"
                      >
                        Home
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigateAbout?.("about")}
                        className="h-[25px] relative shrink-0 w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]"
                        data-node-id="47:296"
                      >
                        About Us
                      </button>
                      <button
                        type="button"
                        onClick={onNavigateProducts}
                        className="h-[25px] relative shrink-0 w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]"
                        data-node-id="47:297"
                      >
                        Our Products
                      </button>
                      <button
                        type="button"
                        onClick={onNavigateCareers}
                        className="h-[25px] relative shrink-0 w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]"
                        data-node-id="47:298"
                      >
                        Career
                      </button>
                      <button
                        type="button"
                        onClick={onNavigateContact}
                        className="h-[25px] relative shrink-0 w-full text-left transition-colors duration-200 hover:text-[#f8c9c9]"
                        data-node-id="47:299"
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[50px] items-start leading-[normal] not-italic relative shrink-0 w-[292px]"
                    data-node-id="47:300"
                  >
                    <p
                      className="font-['Inter:Bold',sans-serif] font-bold h-[48px] relative shrink-0 text-[40px] text-white w-full"
                      data-node-id="47:301"
                    >
                      Quick Links
                    </p>
                    <div
                      className="capitalize content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start relative shrink-0 text-[#f6fafb] text-[21px] w-full"
                      data-node-id="47:302"
                    >
                      <p
                        className="h-[25px] relative shrink-0 w-full"
                        data-node-id="47:303"
                      >
                        Policy Statement
                      </p>
                      <p
                        className="h-[25px] relative shrink-0 w-full"
                        data-node-id="47:304"
                      >
                        Apply for other departments
                      </p>
                      <p
                        className="h-[25px] relative shrink-0 w-full"
                        data-node-id="47:305"
                      >
                        Apply for sales
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[405px]"
                    data-node-id="47:306"
                  >
                    <p
                      className="font-['Inter:Bold',sans-serif] font-bold h-[48px] leading-[normal] not-italic relative shrink-0 text-[40px] text-white w-full"
                      data-node-id="47:307"
                    >
                      Our Location
                    </p>
                    <div
                      className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full"
                      data-node-id="47:308"
                    >
                      <div
                        className="content-stretch flex gap-[19px] items-center relative shrink-0"
                        data-node-id="47:309"
                      >
                        <div
                          className="h-[20px] relative shrink-0 w-[16px]"
                          data-node-id="47:310"
                          data-name="Icon"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgIcon}
                          />
                        </div>
                        <p
                          className="font-['Inter:Regular',sans-serif] font-normal h-[56px] leading-[28px] not-italic relative shrink-0 text-[#f6fafb] text-[22px] w-[364px]"
                          data-node-id="47:311"
                        >
                          Plot No.08-A, Street No. S8, RCCI Rawat, Islamabad,
                          Pakistan
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[19px] items-center relative shrink-0"
                        data-node-id="47:312"
                      >
                        <div
                          className="h-[15px] relative shrink-0 w-[16px]"
                          data-node-id="47:313"
                          data-name="Icon"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgIcon1}
                          />
                        </div>
                        <a
                          href="tel:+9251449302"
                          className="font-['Inter:Regular',sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] w-[179px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline"
                          data-node-id="47:314"
                        >
                          +92-51-449-302
                        </a>
                      </div>
                      <div
                        className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full"
                        data-node-id="47:315"
                      >
                        <div
                          className="h-[12px] relative shrink-0 w-[18px]"
                          data-node-id="47:316"
                          data-name="Icon"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgIcon2}
                          />
                        </div>
                        <a
                          href="mailto:info@globalpharmaceuticalspk.com"
                          className="font-['Inter:Regular',sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] w-[369px] transition-colors duration-200 hover:text-[#f8c9c9] hover:underline"
                          data-node-id="47:317"
                        >
                          info@globalpharmaceuticalspk.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[12px] items-center relative shrink-0"
                  data-node-id="47:318"
                >
                  <a
                    href="https://www.facebook.com/globalpharmaceuticalspk"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Global Pharmaceuticals on Facebook"
                    className="relative shrink-0 size-[29px] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    data-node-id="47:319"
                  >
                    <img
                      alt="Facebook"
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup1000001883}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/global-pharmaceuticals-pvt-limited/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Global Pharmaceuticals on LinkedIn"
                    className="relative shrink-0 size-[29px] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    data-node-id="47:322"
                  >
                    <img
                      alt="LinkedIn"
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgFrame1000001885}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#4e0a0c] border border-[#ececec] border-solid content-stretch flex h-[146px] items-center justify-center pb-[59px] pl-[286px] pr-[1175px] pt-[60px] relative shrink-0 w-full"
            data-node-id="47:326"
          >
            <p
              className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] whitespace-nowrap"
              data-node-id="47:327"
            >
              © 2026 Global Pharmaceuticals Pakistan. All Rights Reserved.
            </p>
          </div>
        </div>
        <div
          className="absolute bg-[#f5f8f9] h-[1093px] left-1/2 -translate-x-1/2 w-[100vw] top-[1464px]"
          data-node-id="47:328"
        />
        <div
          className="absolute contents left-[2px] top-[4051px]"
          data-node-id="47:329"
        >
          <div
            className="absolute contents left-[2px] top-[4051px]"
            data-node-id="47:330"
          >
            <div
              className="absolute bg-[#f5f8f9] h-[1147px] left-1/2 -translate-x-1/2 w-[100vw] top-[4051px]"
              data-node-id="47:331"
            />
          </div>
        </div>
        <div
          className="absolute contents left-[calc(50%-764px)] not-italic top-[2674px]"
          data-node-id="47:332"
        >
          <p
            className="absolute font-['Google_Sans:Medium',sans-serif] leading-[1.1] left-[calc(50%-764px)] text-[#9d0b0f] text-[65px] top-[2674px] tracking-[-1.95px] w-[677.417px] clip-wrap"
            data-node-id="47:333"
          ><span className="clip-line">{`Manufacturing Excellence `}</span></p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] h-[349px] leading-[1.35] left-[calc(50%-764px)] text-[#2f4252] text-[26px] text-justify top-[2839px] w-[715px] fade-up d1"
            data-node-id="47:334"
          >{`Our well-structured facility is equipped with advanced production, quality control, warehousing, packaging, and distribution systems, ensuring consistent quality from raw materials to finished products. We specialize in oral and topical formulations, including tablets, capsules (general and cephalosporin), syrups, dry suspensions (for cephalosporin), creams, ointments, and gels. Supported by dedicated air handling systems and controlled environments, our operations meet international standards of safety and efficiency. `}</p>
        </div>
        <div
          className="absolute contents left-0 top-[3304px]"
          data-node-id="47:335"
          data-name="Mask group"
        >
          <div
            className="absolute h-[846.328px] left-[-179.37px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179.368px_50.723px] mask-size-[976px_747px] top-[3253.28px] w-[1269.337px] scale-in img-zoom"
            data-node-id="47:337"
            style={{ maskImage: `url('${imgAsc00405Jpg1}')` }}
            data-name="ASC00405.jpg 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgAsc00405Jpg2}
            />
          </div>
        </div>
        <div
          className="absolute contents right-0 top-[2557px]"
          data-node-id="47:338"
          data-name="Mask group"
        >
          <div
            className="absolute h-[952px] left-[calc(50%-163px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179px_76px] mask-size-[944px_747px] top-[2481px] w-[1429px] scale-in d1 img-zoom"
            data-node-id="47:340"
            style={{ maskImage: `url('${imgBsc00308Jpg1}')` }}
            data-name="BSC00308.jpg 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgBsc00308Jpg2}
            />
          </div>
        </div>
        <p
          className="absolute font-['Google_Sans:Medium',sans-serif] leading-[1.27] left-[calc(50%+74px)] not-italic text-[#9d0b0f] text-[64px] top-[3433px] tracking-[-1.92px] w-[612px]"
          data-node-id="47:341"
        >
          Market Presence
        </p>
        <p
          className="absolute font-['Google_Sans:Regular',sans-serif] leading-[0] left-[calc(50%+74px)] not-italic text-[#2f4252] text-[25px] top-[3523px] w-[717px]"
          data-node-id="47:342"
        >
          <span className="leading-[1.6]">{`Alongside strong manufacturing capabilities, we are expanding our presence in local and international markets through a skilled marketing and sales team across Pakistan. We actively collaborate with leading pharmaceutical organizations, including `}</span>
          <span className="font-['Google_Sans:Bold',sans-serif] leading-[1.6] text-[#9d0b0f]">
            Martin Dow Limited
          </span>
          <span className="leading-[1.6]">,</span>
          <span className="leading-[1.6] text-[#9d0b0f]">{` `}</span>
          <span className="font-['Google_Sans:Bold',sans-serif] leading-[1.6] text-[#9d0b0f]">{`CCL Pharmaceuticals `}</span>
          <span className="leading-[1.6]">and</span>
          <span className="font-['Google_Sans:Bold',sans-serif] leading-[1.6] text-[#9d0b0f]">{` Hoechst Pakistan Limited`}</span>
          <span className="leading-[1.6]">{`, reflecting our commitment to quality, trust, and industry excellence. Through these strategic relationships and strong engagement with healthcare professionals, we continue to strengthen our position in key therapeutic segments and deliver reliable healthcare solutions worldwide `}</span>
        </p>
        <div
          className="group absolute bg-[#0b0f13] content-stretch flex gap-[10px] items-center justify-center left-[calc(50%+124px)] pl-[40px] pr-[34px] py-[20px] top-[4987px] transition-all duration-200 hover:bg-[#9d0b0f] hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(157,11,15,0.3)]"
          data-node-id="47:343"
          data-name="Button"
        >
          <button
            type="button"
            className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap border-0 bg-transparent p-0 cursor-pointer transition-colors duration-200 group-hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-[2px]"
            data-node-id="I47:343;3:127"
            onClick={onNavigateProducts}
          >
            All Products
          </button>
          <div
            className="relative shrink-0 size-[24px] transition-transform duration-200 group-hover:translate-x-[3px]"
            data-node-id="I47:343;3:128"
            data-name="arrow-right"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full transition duration-200 group-hover:brightness-125"
              src={imgArrowRight}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onNavigateAntibiotics}
          className="absolute left-[calc(50%+124px)] top-[4423px] w-[641px] h-[100px] border-0 bg-transparent p-0 text-left cursor-pointer group fade-up d0 focus-visible:outline-none"
        >
          <div className="absolute bg-[#9d0b0f] left-0 overflow-clip size-[100px] top-0 transition-transform duration-200 group-hover:scale-[1.04]">
            <CapsuleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
            <CapsuleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[124px] top-[2px]">
            <p className="font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px] transition-colors duration-200 group-hover:text-[#9d0b0f]">
              Anti-biotics
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[517px]">
              Broad-spectrum antibiotics including Ciprofloxacin, Levofloxacin,
              and Cefixime.
            </p>
          </div>
        </button>
        <div
          className="absolute h-0 left-[calc(50%+124px)] top-[4567px] w-[624px]"
          data-node-id="47:350"
        >
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <button
          type="button"
          onClick={onNavigateAntiInflammatory}
          className="absolute left-[calc(50%+124px)] top-[4611px] w-[641px] h-[100px] border-0 bg-transparent p-0 text-left cursor-pointer group fade-up d1 focus-visible:outline-none"
        >
          <div className="absolute bg-[#9d0b0f] left-0 overflow-clip size-[100px] top-0 transition-transform duration-200 group-hover:scale-[1.04]">
            <MedicineBottleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[124px] top-[2px]">
            <p className="font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px] transition-colors duration-200 group-hover:text-[#9d0b0f]">
              Anti-inflammatory / Analgesics
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[495px]">
              Pain relief and anti-inflammatory therapies including Piroxicam,
              Diclofenac, and Meloxicam.
            </p>
          </div>
        </button>
        <div
          className="absolute h-0 left-[calc(50%+124px)] top-[4755px] w-[624px]"
          data-node-id="47:356"
        >
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <button
          type="button"
          onClick={onNavigateGastrointestinal}
          className="absolute left-[calc(50%+124px)] top-[4799px] w-[641px] h-[100px] border-0 bg-transparent p-0 text-left cursor-pointer group fade-up d2 focus-visible:outline-none"
        >
          <div className="absolute bg-[#9d0b0f] left-0 overflow-clip size-[100px] top-0 transition-transform duration-200 group-hover:scale-[1.04]">
            <StethoscopeLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[124px] top-[2px]">
            <p className="font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px] transition-colors duration-200 group-hover:text-[#9d0b0f]">
              Gastrointestinal Agents
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[496px]">
              Acid control and gut protection with Esomeprazole, Omeprazole, and
              Vonoprazan.
            </p>
          </div>
        </button>
        <div
          className="absolute h-0 left-[calc(50%+124px)] top-[4943px] w-[624px]"
          data-node-id="47:362"
        >
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <div
          className="absolute bg-[#808586] h-[785px] left-[calc(50%-764px)] overflow-clip top-[4266px] w-[764px] scale-in img-zoom"
          data-node-id="47:363"
          data-name="Image"
        >
          <div
            className="absolute bg-[#010c0d] h-[443px] left-[-20px] top-[-18px] w-[600px]"
            data-node-id="47:364"
            data-name="Replace This"
          />
          <div
            className="absolute h-[803px] left-[-114px] top-[-18px] w-[1204px]"
            data-node-id="47:365"
            data-name="ASC01420.jpg 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgAsc01420Jpg1}
            />
          </div>
        </div>
        <p
          className="absolute font-['Inter:Medium',sans-serif] font-medium leading-none left-[calc(50%+124px)] not-italic text-[#9d0b0f] text-[25px] top-[4266px] uppercase whitespace-nowrap fade-up d0"
          data-node-id="47:366"
        >
          Therapeutic Portfolio
        </p>
        <p
          className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[calc(50%+124px)] not-italic text-[#010c0d] text-[56px] top-[4299px] w-[474px] clip-wrap"
          data-node-id="47:367"
        >
          <span className="clip-line d1">Our Product Line</span>
        </p>
        <div
          className="absolute contents left-[calc(50%-764px)] top-[1564px]"
          data-node-id="47:368"
        >
          <p
            className="absolute font-['Google_Sans:Medium',sans-serif] leading-none left-[calc(50%-228px)] not-italic text-[25px] text-black top-[1564px] tracking-[2.375px] uppercase whitespace-nowrap fade-up d0"
            data-node-id="47:369"
          >
            Who We Are
          </p>
          <p
            className="absolute font-['Google_Sans:Medium',sans-serif] leading-[1.1] left-[calc(50%-228px)] not-italic text-[#9d0b0f] text-[64px] top-[1617px] tracking-[-1.92px] w-[727px] clip-wrap"
            data-node-id="47:370"
          >
            <span className="clip-line d1">Quality is the Heart of Everything</span>
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.4] left-[calc(50%-228px)] not-italic text-[#2f4252] text-[25px] text-justify top-[1793px] w-[993px] fade-up d2"
            data-node-id="47:371"
          >
            Global Pharmaceuticals Pakistan is committed to delivering
            high-quality, safe, and affordable medicines that improve lives.
            Built on the principle of combining quality with affordability, we
            have grown into a modern pharmaceutical manufacturer operating in
            full compliance with Current Good Manufacturing Practices (cGMP),
            with a strong focus on innovation and continuous improvement.
          </p>
          <div
            className="absolute bg-[#f7f4f4] border-0 border-[#dadada] border-solid h-[167px] left-[calc(50%-228px)] top-[2071px] w-[993px] scale-in d0"
            data-node-id="47:372"
          />
          <p
            ref={commitmentCounterRef}
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[calc(50%-180.2px)] not-italic text-[#9d0b0f] text-[48px] top-[calc(50%-825px)] tracking-[-2.4px] w-[131.458px] tabular-nums"
            data-node-id="47:373"
          >
            {commitmentPercent}%
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.3] left-[calc(50%-176.94px)] not-italic text-[#051c2f] text-[28px] top-[calc(50%-762px)] w-[369.387px]"
            data-node-id="47:374"
          >
            Commitment to Excellence
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] h-[87px] leading-[1.4] left-[calc(50%+212px)] not-italic text-[#2f4252] text-[21px] text-justify top-[calc(50%-819px)] w-[504px]"
            data-node-id="47:375"
          >
            Every batch, every product, every partner held to the same
            uncompromising standard of pharmaceutical quality and safety.
          </p>
          {[
            {
              title: 'cGMP Operations',
              desc: 'Strictly compliant with global manufacturing standards',
              iconSrc: imgVector3,
              inset: 'inset-[12.5%_16.25%]',
              left: 'calc(50% - 764px)',
              d: 'd0',
              titleW: 'w-[225.226px]',
              descW: 'w-[248.489px]'
            },
            {
              title: 'Regulatory Approved',
              desc: 'Inspected and approved by leading regulatory authorities',
              iconSrc: imgVector5,
              inset: 'inset-[16.25%]',
              left: 'calc(50% - 373.82px)',
              d: 'd1',
              titleW: 'w-[270.694px]',
              descW: 'w-[263.293px]'
            },
            {
              title: 'Quality Management',
              desc: 'End-to-end QMS from raw material to final release',
              iconSrc: imgVector4,
              inset: 'inset-[27.42%_17.72%_27.5%_18.64%]',
              left: 'calc(50% + 16.36px)',
              d: 'd2',
              titleW: 'w-[265.407px]',
              descW: 'w-[248.489px]'
            },
            {
              title: 'Sustainable Growth',
              desc: 'Facility designed for consistent and scalable supply',
              iconSrc: imgVector6,
              inset: 'inset-[16.25%_12.5%]',
              left: 'calc(50% + 406.54px)',
              d: 'd3',
              titleW: 'w-[249.546px]',
              descW: 'w-[272.809px]'
            }
          ].map((c, i) => (
            <div
              key={i}
              className={`absolute border-0 border-[#c2c2c2] border-solid h-[154px] top-[2303px] w-[358.458px] scale-in card-hover ${c.d} bg-white transition-colors duration-300 hover:bg-[#9d0b0f] group cursor-default`}
              style={{ left: c.left }}
            >
              <div className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[22px] overflow-clip p-[10px] rounded-[96px] top-[35px] w-[40px]">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className={`absolute ${c.inset}`}>
                    <img alt="" className="absolute block inset-0 max-w-none size-full object-contain" src={c.iconSrc} />
                  </div>
                </div>
              </div>
              <p className={`absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[75px] not-italic text-[#9d0b0f] group-hover:text-white transition-colors duration-300 text-[25px] top-[35px] ${c.titleW}`}>
                {c.title}
              </p>
              <p className={`absolute font-['Google_Sans:Regular',sans-serif] leading-[1.4] left-[75px] not-italic text-[#2f4252] group-hover:text-white transition-colors duration-300 text-[18px] top-[75px] ${c.descW}`}>
                {c.desc}
              </p>
            </div>
          ))}
          <div
            className="absolute contents left-[calc(50%-764px)] top-[1564px]"
            data-node-id="47:392"
          >
            <div
              className="absolute bg-[#808586] h-[674px] left-[calc(50%-764px)] overflow-clip top-[1564px] w-[456px]"
              data-node-id="47:393"
              data-name="Image"
            >
              <div
                className="absolute h-[704px] left-[-379px] top-[-15px] w-[1058px]"
                data-node-id="47:394"
                data-name="WhatsApp Image 2026-04-07 at 4.09.19 PM 1"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgWhatsAppImage20260407At40919Pm1}
                />
              </div>
              <div
                className="absolute h-[682px] left-[-268px] top-[-2px] w-[1023px]"
                data-node-id="47:396"
                data-name="ASC01300.jpg 1"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgAsc01300Jpg1}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[1124px] left-1/2 -translate-x-1/2 w-[110vw] top-0 bg-white"
          data-node-id="47:397"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full object-cover"
            src={imgRectangle4}
          />
        </div>
        <div className="absolute left-0 top-[1126px] h-[152px] w-[1920px] bg-white [border-top-left-radius:50%_100%] [border-top-right-radius:50%_100%]" />
        <div
          className="absolute left-[283px] top-[1232px] w-[1355px]"
          data-node-id="47:398"
        >
          <p
            className="w-full text-center font-['Roboto:Regular',sans-serif] text-[40px] leading-[40.8px] tracking-[-0.4px] text-black clip-wrap"
            data-node-id="47:399"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className="clip-line">Our Trusted Group Companies And Strategic Partners</span>
          </p>
          <div
            className="mt-[74px] flex items-center justify-between fade-up d1"
            data-node-id="47:400"
          >
            <div className="flex items-center gap-[8px]">
              <div className="h-[57px] w-[56px]" data-node-id="47:403">
                <img
                  alt=""
                  className="h-full w-full object-contain"
                  src={imgGroup1000000720}
                />
              </div>
              <p
                className="whitespace-nowrap font-['Times_New_Roman:Bold',sans-serif] text-[40px] leading-[23px] text-[#9d0b0f]"
                data-node-id="47:414"
              >
                Global Pharmaceuticals Pvt. Ltd.
              </p>
            </div>
            <img
              alt=""
              className="h-[52px] w-[639px] object-contain"
              src={imgGroup1000001909}
              data-node-id="47:415"
            />
          </div>
        </div>
        <div
          className="absolute h-[1124px] left-1/2 -translate-x-1/2 w-[110vw] top-0 overflow-hidden bg-white"
          data-node-id="47:421"
          style={{
            WebkitMaskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1124' preserveAspectRatio='none'><path d='M0 0H1920V1124C1920 1124 1519.55 1000.4 853.617 1079.85C187.688 1159.3 0 1059.28 0 1059.28V0Z' fill='white'/></svg>\")",
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1124' preserveAspectRatio='none'><path d='M0 0H1920V1124C1920 1124 1519.55 1000.4 853.617 1079.85C187.688 1159.3 0 1059.28 0 1059.28V0Z' fill='white'/></svg>\")",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
          data-name="DSC01471 copy 1"
        >
          <img
            alt=""
            className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
            src={imgDsc01471Copy2}
          />
        </div>
        <div
          className="absolute contents left-[calc(50%-764px)] top-[335px]"
          data-node-id="47:422"
        >
          <div
            className="absolute h-[479px] left-[calc(50%-764px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-196px_-335px] mask-size-[1920px_1124px] top-[335px] w-[808px]"
            data-node-id="47:423"
            style={{ maskImage: `url('${imgDsc01471Copy1}')` }}
            data-name="Title"
          />
        </div>
        <div
          className="absolute contents left-px top-[33px]"
          data-node-id="47:424"
        >
          <div
            className="absolute bg-white h-[108px] left-1/2 -translate-x-1/2 w-[120vw] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)] top-[33px]"
            data-node-id="47:425"
          />
        </div>
        <div
          className="absolute h-[131px] left-[-2.5px] top-[22px] w-[510.5px]"
          data-node-id="47:426"
        >
          <div className="absolute inset-[0_-0.78%_-6.11%_-0.78%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgRectangle3468149}
            />
          </div>
        </div>
        <div
          className="absolute contents inset-[0.8%_76.82%_97.82%_7.19%]"
          data-node-id="47:427"
        >
          <div
            className="absolute contents inset-[0.8%_76.82%_97.82%_7.19%]"
            data-node-id="47:428"
          >
            <div
              className="absolute inset-[0.8%_88.68%_97.82%_7.19%]"
              data-node-id="47:429"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgGroup2}
              />
            </div>
            <div
              className="absolute flex flex-col font-['Myriad_Pro:Semibold',sans-serif] inset-[0.85%_76.82%_97.85%_11.93%] justify-center leading-[0] not-italic text-[28px] text-white"
              data-node-id="47:440"
            >
              <p className="leading-[28px] mb-0">Global</p>
              <p className="leading-[28px] mb-0">Pharmaceuticals</p>
              <p className="leading-[28px]">Pakistan</p>
            </div>
          </div>
        </div>
        <div
          className="absolute contents left-[calc(50%-347px)] top-[71px]"
          data-node-id="47:441"
        >
          <p
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[20px] left-[calc(50%-347px)] not-italic text-[#9d0b0f] text-[24px] top-[77px] tracking-[-0.144px] whitespace-nowrap"
            data-node-id="47:442"
            style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
          >
            Home
          </p>
          <div className="absolute left-[calc(50%-231px)] top-[71px] z-20 h-[228px] w-[270px]">
            <button
              type="button"
              className="absolute font-['Google_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#010c0d] text-[24px] top-[6px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 rounded-[2px]"
              data-node-id="47:443"
              style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
              onClick={() => onNavigateAbout?.("about")}
            >
              Our Company
            </button>
            <button
              type="button"
              aria-label="Toggle company menu"
              onClick={(event) => {
                event.stopPropagation();
                setShowCompanyMenu((prev) => !prev);
                setShowProductsMenu(false);
                setShowFacilityMenu(false);
              }}
              className="absolute left-[151px] top-0 size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"
              data-node-id="47:450"
              data-name="arrow-down-s-line"
            >
              <div
                className="absolute inset-[35.83%_26.13%_35%_26.14%]"
                data-node-id="I47:450;8:2046"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector7}
                />
              </div>
            </button>
            {showCompanyMenu ? (
              <div className="absolute left-0 top-[75px] w-[270px]">
                <button
                  type="button"
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                  onClick={() => {
                    onNavigateAbout?.("about");
                    setShowCompanyMenu(false);
                  }}
                >
                  About Us
                </button>
                <button
                  type="button"
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                  onClick={() => {
                    onNavigateAbout?.("vision");
                    setShowCompanyMenu(false);
                  }}
                >
                  Vision &amp; Mission
                </button>
                <button
                  type="button"
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                  onClick={() => {
                    onNavigateAbout?.("ims");
                    setShowCompanyMenu(false);
                  }}
                >
                  IMS Policy
                </button>
              </div>
            ) : null}
          </div>
          <div
            className="absolute left-[calc(50%-1px)] top-[72px] z-20 h-[440px] w-[365px]"
            data-node-id="47:444"
          >
            <button
              type="button"
              className="absolute font-['Google_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#010c0d] text-[24px] top-[5px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 rounded-[2px]"
              data-node-id="47:445"
              style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
              onClick={onNavigateProducts}
            >
              Products
            </button>
            <button
              type="button"
              aria-label="Toggle products menu"
              onClick={(event) => {
                event.stopPropagation();
                setShowProductsMenu((prev) => !prev);
                setShowCompanyMenu(false);
                setShowFacilityMenu(false);
              }}
              className="absolute left-[95px] top-[-1px] size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"
              data-node-id="47:449"
              data-name="arrow-down-s-line"
            >
              <div
                className="absolute inset-[35.83%_26.13%_35%_26.14%]"
                data-node-id="I47:449;8:2046"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector7}
                />
              </div>
            </button>
            {showProductsMenu ? (
              <div className="absolute left-0 top-[74px] w-[365px]">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateAntiInflammatory?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  Anti-inflammatory / Analgesics
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateAntibiotics?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  Anti-biotics
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateGastrointestinal?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  Gastrointestinal Agents
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateCns?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  CNS / Psychiatric
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateCardiovascular?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  Cardiovascular / Lipid Control
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateDermatology?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  Dermatology
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateRespiratory?.();
                    setShowProductsMenu(false);
                  }}
                  className="block h-[49px] w-full bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
                >
                  Respiratory &amp; Antiallergic
                </button>
              </div>
            ) : null}
          </div>
          <button
            type="button"
            aria-label="Pharmacovigilance"
            className="absolute z-[30] left-[calc(50%+284px)] top-[33px] h-[108px] w-[252px] pl-[18px] text-left font-['Google_Sans:Regular',sans-serif] leading-[20px] not-italic text-[#010c0d] text-[24px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 rounded-[2px]"
            data-node-id="47:446"
            style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
            onClick={onNavigatePharmacovigilance}
          >
            Pharmacovigilance
          </button>
          <button
            type="button"
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[20px] left-[calc(50%+550px)] not-italic text-[#010c0d] text-[24px] top-[77px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 rounded-[2px]"
            data-node-id="47:447"
            style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
            onClick={onNavigateCareers}
          >
            Careers
          </button>
          <button
            type="button"
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[20px] left-[calc(50%+682px)] not-italic text-[#010c0d] text-[24px] top-[77px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 rounded-[2px]"
            data-node-id="47:448"
            style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
            onClick={onNavigateContact}
          >
            Contact us
          </button>
        </div>
        <div
          className="absolute contents left-[194px] top-[335px]"
          data-node-id="47:461"
        >
          <p
            className="absolute font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] left-[calc(50%-764px)] not-italic text-[25px] text-white top-[335px] whitespace-nowrap hero-clip-wrap"
            data-node-id="47:462"
          >
            <span className="hero-clip-line d0">Empowering Healthcare</span>
          </p>
          <p
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.16] left-[calc(50%-764px)] not-italic text-[76px] text-white top-[384px] w-[653px] hero-clip-wrap"
            data-node-id="47:463"
          >
            <span className="hero-clip-line d1">Advancing Lives Through Trusted Medicine</span>
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.42] left-[calc(50%-764px)] not-italic text-[#f8fafa] text-[27px] text-justify top-[662px] w-[808px] fade-up d2"
            data-node-id="47:464"
          >
            Global Pharmaceuticals Pakistan is dedicated to developing and
            delivering high-quality, safe, and effective medicines that Improve
            lives. Guided by innovation and integrity, we strive to be a leading
            force in pharmaceutical manufacturing.
          </p>
          <div
            className="absolute left-[calc(50%-764px)] top-[857px] w-[min(620px,calc(100vw-388px))] max-w-[620px] scale-in d2"
            data-node-id="47:465"
          >
            <img
              alt="ISO 9001, ISO 14001, ISO 45001, and GMP certified company seals"
              className="block h-auto w-full max-h-[min(118px,17vh)] object-contain object-left drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)]"
              decoding="async"
              src="/assets/group-1000002029.png"
            />
          </div>
        </div>
        <div className="absolute left-[calc(50%+162px)] top-[72px] z-20 h-[228px] w-[270px]">
          <button
            type="button"
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#010c0d] text-[24px] top-[5px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 rounded-[2px]"
            data-node-id="47:545"
            style={{ fontFeatureSettings: "'calt' 0, 'liga' 0" }}
            onClick={() => onNavigateFacility?.()}
          >
            Facility
          </button>
          <button
            type="button"
            aria-label="Toggle facility menu"
            onClick={(event) => {
              event.stopPropagation();
              setShowFacilityMenu((prev) => !prev);
              setShowCompanyMenu(false);
              setShowProductsMenu(false);
            }}
            className="absolute left-[75px] top-[-1px] size-[32px] overflow-clip border-0 bg-transparent p-0 cursor-pointer"
          >
            <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector7}
              />
            </div>
          </button>
          {showFacilityMenu ? (
            <div className="absolute left-0 top-[74px] w-[270px]">
              <button
                type="button"
                onClick={() => {
                  onNavigateFacility?.("production");
                  setShowFacilityMenu(false);
                }}
                className="block h-[49px] w-full border-b border-[#f2f2f2] bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
              >
                Production
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigateFacility?.("quality");
                  setShowFacilityMenu(false);
                }}
                className="block h-[49px] w-full bg-[#827f7f] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]"
              >
                Quality Operations
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
