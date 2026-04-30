import { useEffect, useState } from "react";

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
const imgVector8 = "/assets/figma/f298c1fd-5993-4429-b9d9-1c340c68161f.svg";
const imgVector9 = "/assets/figma/45bacc05-dc49-4720-9525-316add0c7650.svg";
const imgVector10 = "/assets/figma/e4749329-4060-4015-925b-9bc94405a5ce.svg";
const imgVector11 = "/assets/figma/bd490c60-9078-40eb-ae85-79f28cda51e9.svg";
const imgVector12 = "/assets/figma/777f7483-7203-4353-b23a-fb68c575e249.svg";
const imgVector13 = "/assets/figma/a54cea2a-8813-4941-a3e3-1201541445ad.svg";
const imgVector14 = "/assets/figma/6c2f59c2-addc-4735-b9fb-4ee612965ea0.svg";
const imgVector15 = "/assets/figma/1eb89b31-2d18-4919-8b15-bb7a35219e17.svg";
const imgVector16 = "/assets/figma/5e8a06f0-6c5d-4f45-bdec-d3c8795521a5.svg";
const imgVector17 = "/assets/figma/497081a9-bc1d-4fd5-a92a-40305e0f6af6.svg";
const imgVector18 = "/assets/figma/d7856a0c-457d-478d-88e9-7a5c3f1267ac.svg";
const imgVector19 = "/assets/figma/7792a219-b8cf-4e28-b638-d23de428e446.svg";
const imgVector20 = "/assets/figma/6689ccff-ac4d-4431-a0c0-5ed90a57a942.svg";
const imgVector21 = "/assets/figma/ab5cb56c-d505-4caa-a9d5-48d714c9a608.svg";
const imgVector22 = "/assets/figma/c026e1ef-fb59-462d-b38f-f0174c74a19c.svg";
const imgVector23 = "/assets/figma/e42e0c36-e7f7-49e4-8dad-1d7ef236e8bb.svg";
const imgVector24 = "/assets/figma/65615be5-ed61-4780-a55c-c308e1808209.svg";
const imgVector25 = "/assets/figma/ae8fa830-cdb0-4900-adbb-1e1fe3dff127.svg";
const imgVector26 = "/assets/figma/3d0bdefd-f48d-4292-9d03-c000010ed55d.svg";
const imgVector27 = "/assets/figma/21b2722f-e8a2-4625-9c28-2fd3b82c0592.svg";
const imgVector28 = "/assets/figma/a3bfa673-0434-47c6-a8fb-90806d35d7f0.svg";
const imgVector29 = "/assets/figma/db344e16-2fea-49a9-8d8e-62bb0dde3e3e.svg";
const imgVector30 = "/assets/figma/cd75a91f-bd47-43c8-ae10-2118f669f02e.svg";
const imgVector31 = "/assets/figma/69a9a63b-0dbe-4c7a-9a00-faef08f12382.svg";
const imgVector32 = "/assets/figma/88fc5a2e-439f-4921-b677-a4ad7834169f.svg";

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
    <div className="flex w-full justify-center overflow-hidden bg-white">
      <div
        className="home-figma relative h-[5858px] w-[1920px] shrink-0 bg-white"
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
              <path d="M64 75H1989V1199C1989 1199 1583.55 1075.4 917.617 1154.85C251.688 1234.3 64 1134.28 64 1134.28V75Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="absolute bg-[#f5f5f5] bottom-[2px] content-stretch flex flex-col items-start left-[3px] w-[1920px]"
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
          className="absolute bg-[#f5f8f9] h-[1093px] left-[2px] top-[1464px] w-[1921px]"
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
              className="absolute bg-[#f5f8f9] h-[1147px] left-[2px] top-[4051px] w-[1921px]"
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
          className="absolute bg-[#0b0f13] content-stretch flex gap-[10px] items-center justify-center left-[calc(50%+124px)] pl-[40px] pr-[34px] py-[20px] top-[4987px]"
          data-node-id="47:343"
          data-name="Button"
        >
          <button
            type="button"
            className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap border-0 bg-transparent p-0 cursor-pointer transition-colors duration-200 hover:text-[#e4e7ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-[2px]"
            data-node-id="I47:343;3:127"
            onClick={onNavigateProducts}
          >
            All Products
          </button>
          <div
            className="relative shrink-0 size-[24px]"
            data-node-id="I47:343;3:128"
            data-name="arrow-right"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgArrowRight}
            />
          </div>
        </div>
        <div
          className="absolute bg-[#9d0b0f] left-[calc(50%+124px)] overflow-clip size-[100px] top-[4423px]"
          data-node-id="47:344"
          data-name="Icon"
        >
          <CapsuleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
          <CapsuleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+248px)] not-italic top-[4425px] fade-up d0"
          data-node-id="47:347"
          data-name="Title"
        >
          <p
            className="font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px]"
            data-node-id="47:348"
          >
            Anti-biotics
          </p>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[517px]"
            data-node-id="47:349"
          >
            Broad-spectrum antibiotics including Ciprofloxacin, Levofloxacin,
            and Cefixime.
          </p>
        </div>
        <div
          className="absolute h-0 left-[calc(50%+124px)] top-[4567px] w-[624px]"
          data-node-id="47:350"
        >
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <div
          className="absolute bg-[#9d0b0f] left-[calc(50%+124px)] overflow-clip size-[100px] top-[4611px]"
          data-node-id="47:351"
          data-name="Icon"
        >
          <MedicineBottleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+248px)] not-italic top-[4613px] fade-up d1"
          data-node-id="47:353"
          data-name="Title"
        >
          <p
            className="font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px]"
            data-node-id="47:354"
          >
            Anti-inflammatory / Analgesics
          </p>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[495px]"
            data-node-id="47:355"
          >
            Pain relief and anti-inflammatory therapies including Piroxicam,
            Diclofenac, and Meloxicam.
          </p>
        </div>
        <div
          className="absolute h-0 left-[calc(50%+124px)] top-[4755px] w-[624px]"
          data-node-id="47:356"
        >
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <div
          className="absolute bg-[#9d0b0f] left-[calc(50%+124px)] overflow-clip size-[100px] top-[4799px]"
          data-node-id="47:357"
          data-name="Icon"
        >
          <StethoscopeLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+248px)] not-italic top-[4801px] fade-up d2"
          data-node-id="47:359"
          data-name="Title"
        >
          <p
            className="font-['Google_Sans:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px]"
            data-node-id="47:360"
          >
            Gastrointestinal Agents
          </p>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[496px]"
            data-node-id="47:361"
          >
            Acid control and gut protection with Esomeprazole, Omeprazole, and
            Vonoprazan.
          </p>
        </div>
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
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[calc(50%-180.2px)] not-italic text-[#9d0b0f] text-[48px] top-[calc(50%-825px)] tracking-[-2.4px] w-[131.458px]"
            data-node-id="47:373"
          >
            100%
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
          <div
            className="absolute bg-white border-0 border-[#c2c2c2] border-solid h-[154px] left-[calc(50%-764px)] top-[2303px] w-[358.458px] scale-in card-hover d0"
            data-node-id="47:376"
          />
          <div
            className="absolute bg-white border-0 border-[#c2c2c2] border-solid h-[154px] left-[calc(50%+16.36px)] top-[2303px] w-[358.458px] scale-in card-hover d2"
            data-node-id="47:377"
          />
          <div
            className="absolute bg-[#9d0b0f] h-[154px] left-[calc(50%-373.82px)] top-[2303px] w-[358.458px] scale-in card-hover d1"
            data-node-id="47:378"
          />
          <div
            className="absolute bg-white border-0 border-[#c2c2c2] border-solid h-[154px] left-[calc(50%+406.54px)] top-[2303px] w-[358.458px] scale-in card-hover d3"
            data-node-id="47:379"
          />
          <p
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[calc(50%-688.92px)] not-italic text-[#9d0b0f] text-[25px] top-[2338px] w-[225.226px]"
            data-node-id="47:380"
          >
            cGMP Operations
          </p>
          <p
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[calc(50%+91.44px)] not-italic text-[#9d0b0f] text-[25px] top-[2338px] w-[265.407px]"
            data-node-id="47:381"
          >
            Quality Management
          </p>
          <p
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[calc(50%-298.74px)] not-italic text-[25px] text-white top-[2338px] w-[270.694px]"
            data-node-id="47:382"
          >
            Regulatory Approved
          </p>
          <p
            className="absolute font-['Google_Sans:Bold',sans-serif] leading-[1.3] left-[calc(50%+481.62px)] not-italic text-[#9d0b0f] text-[25px] top-[2338px] w-[249.546px]"
            data-node-id="47:383"
          >
            Sustainable Growth
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.4] left-[calc(50%-688.92px)] not-italic text-[#2f4252] text-[18px] top-[2378px] w-[248.489px]"
            data-node-id="47:384"
          >
            Strictly compliant with global manufacturing standards
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.4] left-[calc(50%+91.44px)] not-italic text-[#2f4252] text-[18px] top-[2378px] w-[248.489px]"
            data-node-id="47:385"
          >
            End-to-end QMS from raw material to final release
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.4] left-[calc(50%-298.74px)] not-italic text-[18px] text-white top-[2378px] w-[263.293px]"
            data-node-id="47:386"
          >
            Inspected and approved by leading regulatory authorities
          </p>
          <p
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[1.4] left-[calc(50%+481.62px)] not-italic text-[#2f4252] text-[18px] top-[2378px] w-[272.809px]"
            data-node-id="47:387"
          >
            Facility designed for consistent and scalable supply
          </p>
          <div
            className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%-742px)] overflow-clip p-[10px] rounded-[96px] top-[2338px] w-[40px]"
            data-node-id="47:388"
            data-name="Key Icons [1.0]"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="I47:388;8751:126791"
              data-name="survey-line"
            >
              <div
                className="absolute inset-[12.5%_16.25%]"
                data-node-id="I47:388;8751:126791;320:848"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector3}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%+39px)] overflow-clip p-[10px] rounded-[96px] top-[2338px] w-[40px]"
            data-node-id="47:389"
            data-name="Key Icons [1.0]"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="I47:389;8751:126797"
              data-name="check-fill"
            >
              <div
                className="absolute inset-[27.42%_17.72%_27.5%_18.64%]"
                data-node-id="I47:389;8751:126797;320:845"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector4}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%-352px)] overflow-clip p-[10px] rounded-[96px] top-[2338px] w-[40px]"
            data-node-id="47:390"
            data-name="Key Icons [1.0]"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="I47:390;8751:126793"
              data-name="organization-chart"
            >
              <div
                className="absolute inset-[16.25%]"
                data-node-id="I47:390;8751:126793;322:856"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector5}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%+429px)] overflow-clip p-[10px] rounded-[96px] top-[2338px] w-[40px]"
            data-node-id="47:391"
            data-name="Key Icons [1.0]"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="I47:391;8751:126801"
              data-name="funds-box-line"
            >
              <div
                className="absolute inset-[16.25%_12.5%]"
                data-node-id="I47:391;8751:126801;322:859"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector6}
                />
              </div>
            </div>
          </div>
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
          className="absolute h-[1124px] left-0 top-0 w-[1925px]"
          data-node-id="47:397"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
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
          className="absolute h-[1124px] left-0 top-0 w-[1925px] overflow-hidden"
          data-node-id="47:421"
          style={{
            WebkitMaskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1925 1124' preserveAspectRatio='none'><path d='M0 0H1925V1124C1925 1124 1519.55 1000.4 853.617 1079.85C187.688 1159.3 0 1059.28 0 1059.28V0Z' fill='white'/></svg>\")",
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1925 1124' preserveAspectRatio='none'><path d='M0 0H1925V1124C1925 1124 1519.55 1000.4 853.617 1079.85C187.688 1159.3 0 1059.28 0 1059.28V0Z' fill='white'/></svg>\")",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
          data-name="DSC01471 copy 1"
        >
          <img
            alt=""
            className="absolute left-[-64px] top-[-75px] h-[1199px] w-[2050px] max-w-none object-cover opacity-70 pointer-events-none"
            src={imgDsc01471Copy2}
          />
        </div>
        <div
          className="absolute contents left-[calc(50%-764px)] top-[335px]"
          data-node-id="47:422"
        >
          <div
            className="absolute h-[479px] left-[calc(50%-764px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-196px_-335px] mask-size-[1925px_1124px] top-[335px] w-[808px]"
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
            className="absolute bg-white h-[108px] left-px mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-33px] mask-size-[1925px_1124px] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)] top-[33px] w-[1921px]"
            data-node-id="47:425"
            style={{ maskImage: `url('${imgDsc01471Copy1}')` }}
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
            className="absolute font-['Google_Sans:Regular',sans-serif] leading-[20px] left-[calc(50%+284px)] top-[33px] h-[108px] w-[252px] pl-[18px] pt-[44px] not-italic text-left text-[#010c0d] text-[24px] tracking-[-0.144px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:bg-[#9d0b0f]/5 hover:text-[#9d0b0f] border-0 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50"
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
          className="absolute inset-[14.74%_77.77%_85.09%_21.65%]"
          data-node-id="47:451"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector8}
          />
        </div>
        <div
          className="absolute inset-[14.74%_72.53%_85.09%_26.88%]"
          data-node-id="47:452"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector8}
          />
        </div>
        <div
          className="absolute inset-[14.69%_77.39%_85.17%_22.2%]"
          data-node-id="47:453"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector9}
          />
        </div>
        <div
          className="absolute inset-[14.69%_72.15%_85.17%_27.43%]"
          data-node-id="47:454"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector9}
          />
        </div>
        <div
          className="absolute inset-[14.69%_77.08%_85.17%_22.75%]"
          data-node-id="47:455"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector10}
          />
        </div>
        <div
          className="absolute inset-[14.69%_71.84%_85.17%_27.98%]"
          data-node-id="47:456"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector10}
          />
        </div>
        <div
          className="absolute inset-[14.7%_76.53%_85.16%_23.02%]"
          data-node-id="47:457"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector11}
          />
        </div>
        <div
          className="absolute inset-[14.7%_71.29%_85.16%_28.26%]"
          data-node-id="47:458"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector11}
          />
        </div>
        <div
          className="absolute inset-[14.77%_76.25%_85.09%_23.44%]"
          data-node-id="47:459"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector12}
          />
        </div>
        <div
          className="absolute inset-[14.77%_71.02%_85.09%_28.67%]"
          data-node-id="47:460"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector12}
          />
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
            className="absolute contents left-[194px] top-[857px]"
            data-node-id="47:465"
          >
            <div
              className="absolute contents left-[194px] top-[857px]"
              data-node-id="47:466"
            >
              <div
                className="absolute inset-[14.63%_85.69%_83.99%_10.1%]"
                data-node-id="47:467"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector13}
                />
              </div>
              <div
                className="absolute inset-[14.63%_80.46%_83.99%_15.34%]"
                data-node-id="47:468"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector13}
                />
              </div>
              <div
                className="absolute inset-[15.56%_88.97%_84.29%_10.59%]"
                data-node-id="47:469"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector14}
                />
              </div>
              <div
                className="absolute inset-[15.56%_83.73%_84.29%_15.82%]"
                data-node-id="47:470"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector14}
                />
              </div>
              <div
                className="absolute inset-[15.69%_88.59%_84.16%_10.93%]"
                data-node-id="47:471"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector15}
                />
              </div>
              <div
                className="absolute inset-[15.69%_83.35%_84.16%_16.17%]"
                data-node-id="47:472"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector15}
                />
              </div>
              <div
                className="absolute inset-[15.76%_88%_84.06%_11.41%]"
                data-node-id="47:473"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector16}
                />
              </div>
              <div
                className="absolute inset-[15.76%_82.76%_84.06%_16.65%]"
                data-node-id="47:474"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector16}
                />
              </div>
              <div
                className="absolute inset-[15.8%_87.55%_84.05%_12.1%]"
                data-node-id="47:475"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector17}
                />
              </div>
              <div
                className="absolute inset-[15.8%_82.32%_84.05%_17.34%]"
                data-node-id="47:476"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector17}
                />
              </div>
              <div
                className="absolute inset-[15.77%_86.97%_84.06%_12.58%]"
                data-node-id="47:477"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector18}
                />
              </div>
              <div
                className="absolute inset-[15.77%_81.73%_84.06%_17.82%]"
                data-node-id="47:478"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector18}
                />
              </div>
              <div
                className="absolute inset-[15.67%_86.49%_84.14%_12.93%]"
                data-node-id="47:479"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector19}
                />
              </div>
              <div
                className="absolute inset-[15.67%_81.25%_84.14%_18.17%]"
                data-node-id="47:480"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector19}
                />
              </div>
              <div
                className="absolute inset-[15.53%_86.17%_84.31%_13.31%]"
                data-node-id="47:481"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector20}
                />
              </div>
              <div
                className="absolute inset-[15.53%_80.94%_84.31%_18.54%]"
                data-node-id="47:482"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector20}
                />
              </div>
              <div
                className="absolute inset-[14.99%_89.1%_84.86%_10.45%]"
                data-node-id="47:483"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector21}
                />
              </div>
              <div
                className="absolute inset-[14.99%_83.87%_84.86%_15.69%]"
                data-node-id="47:484"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector21}
                />
              </div>
              <div
                className="absolute inset-[14.83%_88.72%_84.99%_10.72%]"
                data-node-id="47:485"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector22}
                />
              </div>
              <div
                className="absolute inset-[14.83%_83.49%_84.99%_15.96%]"
                data-node-id="47:486"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector22}
                />
              </div>
              <div
                className="absolute inset-[14.74%_88.28%_85.09%_11.14%]"
                data-node-id="47:487"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector23}
                />
              </div>
              <div
                className="absolute inset-[14.74%_83.04%_85.09%_16.37%]"
                data-node-id="47:488"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector23}
                />
              </div>
              <div
                className="absolute inset-[14.69%_87.9%_85.17%_11.69%]"
                data-node-id="47:489"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector24}
                />
              </div>
              <div
                className="absolute inset-[14.69%_82.66%_85.17%_16.93%]"
                data-node-id="47:490"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector24}
                />
              </div>
              <div
                className="absolute inset-[14.69%_87.59%_85.17%_12.24%]"
                data-node-id="47:491"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector25}
                />
              </div>
              <div
                className="absolute inset-[14.69%_82.35%_85.17%_17.48%]"
                data-node-id="47:492"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector25}
                />
              </div>
              <div
                className="absolute inset-[14.7%_87.04%_85.16%_12.52%]"
                data-node-id="47:493"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector26}
                />
              </div>
              <div
                className="absolute inset-[14.7%_81.8%_85.16%_17.75%]"
                data-node-id="47:494"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector26}
                />
              </div>
              <div
                className="absolute inset-[14.77%_86.76%_85.09%_12.93%]"
                data-node-id="47:495"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector27}
                />
              </div>
              <div
                className="absolute inset-[14.77%_81.52%_85.09%_18.17%]"
                data-node-id="47:496"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector27}
                />
              </div>
              <div
                className="absolute inset-[14.83%_86.31%_84.99%_13.14%]"
                data-node-id="47:497"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector28}
                />
              </div>
              <div
                className="absolute inset-[14.83%_81.08%_84.99%_18.37%]"
                data-node-id="47:498"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector28}
                />
              </div>
              <div
                className="absolute inset-[14.98%_86.04%_84.86%_13.45%]"
                data-node-id="47:499"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector29}
                />
              </div>
              <div
                className="absolute inset-[14.98%_80.8%_84.86%_18.68%]"
                data-node-id="47:500"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector29}
                />
              </div>
              <div
                className="absolute inset-[14.87%_86.42%_84.23%_10.83%]"
                data-node-id="47:501"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector30}
                />
              </div>
              <div
                className="absolute inset-[14.87%_81.18%_84.23%_16.06%]"
                data-node-id="47:502"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector30}
                />
              </div>
              <div
                className="absolute inset-[14.9%_86.52%_84.26%_10.93%]"
                data-node-id="47:503"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector31}
                />
              </div>
              <div
                className="absolute inset-[14.9%_81.28%_84.26%_16.17%]"
                data-node-id="47:504"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector32}
                />
              </div>
              <div
                className="-translate-x-1/2 absolute contents leading-[normal] left-[calc(50%-608px)] not-italic text-black text-center top-[883px]"
                data-node-id="47:505"
              >
                <p
                  className="-translate-x-1/2 absolute h-[19.183px] left-[calc(50%-607px)] text-[17px] text-center top-[calc(50%-2044px)] w-[39.028px]"
                  data-node-id="47:506"
                  style={{
                    fontFamily: "'Times New Roman', serif",
                    fontWeight: 700,
                  }}
                >
                  ISO
                </p>
                <p
                  className="-translate-x-1/2 absolute font-['Times_New_Roman:Bold',sans-serif] h-[7.938px] left-[calc(50%-607.3px)] text-[5.5px] text-center top-[901.54px] w-[33.074px]"
                  data-node-id="47:507"
                >
                  14001:2015
                </p>
              </div>
              <div
                className="-translate-x-1/2 absolute contents leading-[normal] left-[calc(50%-708px)] not-italic text-black text-center top-[883px]"
                data-node-id="47:508"
              >
                <p
                  className="-translate-x-1/2 absolute h-[19.183px] left-[calc(50%-707px)] text-[17px] text-center top-[calc(50%-2044px)] w-[39.028px]"
                  data-node-id="47:509"
                  style={{
                    fontFamily: "'Times New Roman', serif",
                    fontWeight: 700,
                  }}
                >
                  ISO
                </p>
                <p
                  className="-translate-x-1/2 absolute font-['Times_New_Roman:Bold',sans-serif] h-[7.938px] left-[calc(50%-707.3px)] text-[5.5px] text-center top-[901.54px] w-[33.074px]"
                  data-node-id="47:510"
                >
                  9001:2008
                </p>
              </div>
            </div>
            <div
              className="absolute inset-[14.63%_75.18%_83.99%_20.61%]"
              data-node-id="47:511"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector13}
              />
            </div>
            <div
              className="absolute inset-[14.63%_69.95%_83.99%_25.85%]"
              data-node-id="47:512"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector13}
              />
            </div>
            <div
              className="absolute inset-[15.56%_78.46%_84.29%_21.09%]"
              data-node-id="47:513"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector14}
              />
            </div>
            <div
              className="absolute inset-[15.56%_73.22%_84.29%_26.33%]"
              data-node-id="47:514"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector14}
              />
            </div>
            <div
              className="absolute inset-[15.69%_78.08%_84.16%_21.44%]"
              data-node-id="47:515"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector15}
              />
            </div>
            <div
              className="absolute inset-[15.69%_72.84%_84.16%_26.68%]"
              data-node-id="47:516"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector15}
              />
            </div>
            <div
              className="absolute inset-[15.76%_77.49%_84.06%_21.92%]"
              data-node-id="47:517"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector16}
              />
            </div>
            <div
              className="absolute inset-[15.76%_72.26%_84.06%_27.16%]"
              data-node-id="47:518"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector16}
              />
            </div>
            <div
              className="absolute inset-[15.8%_77.05%_84.05%_22.61%]"
              data-node-id="47:519"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector17}
              />
            </div>
            <div
              className="absolute inset-[15.8%_71.81%_84.05%_27.85%]"
              data-node-id="47:520"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector17}
              />
            </div>
            <div
              className="absolute inset-[15.77%_76.46%_84.06%_23.09%]"
              data-node-id="47:521"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector18}
              />
            </div>
            <div
              className="absolute inset-[15.77%_71.22%_84.06%_28.33%]"
              data-node-id="47:522"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector18}
              />
            </div>
            <div
              className="absolute inset-[15.67%_75.98%_84.14%_23.44%]"
              data-node-id="47:523"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector19}
              />
            </div>
            <div
              className="absolute inset-[15.67%_70.74%_84.14%_28.67%]"
              data-node-id="47:524"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector19}
              />
            </div>
            <div
              className="absolute inset-[15.53%_75.67%_84.31%_23.82%]"
              data-node-id="47:525"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector20}
              />
            </div>
            <div
              className="absolute inset-[15.53%_70.43%_84.31%_29.05%]"
              data-node-id="47:526"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector20}
              />
            </div>
            <div
              className="absolute inset-[14.99%_78.6%_84.86%_20.96%]"
              data-node-id="47:527"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector21}
              />
            </div>
            <div
              className="absolute inset-[14.99%_73.36%_84.86%_26.19%]"
              data-node-id="47:528"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector21}
              />
            </div>
            <div
              className="absolute inset-[14.83%_78.22%_84.99%_21.23%]"
              data-node-id="47:529"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector22}
              />
            </div>
            <div
              className="absolute inset-[14.83%_72.98%_84.99%_26.47%]"
              data-node-id="47:530"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector22}
              />
            </div>
            <div
              className="absolute inset-[14.83%_75.8%_84.99%_23.64%]"
              data-node-id="47:531"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector28}
              />
            </div>
            <div
              className="absolute inset-[14.83%_70.57%_84.99%_28.88%]"
              data-node-id="47:532"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector28}
              />
            </div>
            <div
              className="absolute inset-[14.98%_75.53%_84.86%_23.95%]"
              data-node-id="47:533"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector29}
              />
            </div>
            <div
              className="absolute inset-[14.98%_70.29%_84.86%_29.19%]"
              data-node-id="47:534"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector29}
              />
            </div>
            <div
              className="absolute inset-[14.87%_75.91%_84.23%_21.34%]"
              data-node-id="47:535"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector30}
              />
            </div>
            <div
              className="absolute inset-[14.87%_70.67%_84.23%_26.57%]"
              data-node-id="47:536"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector30}
              />
            </div>
            <div
              className="absolute inset-[14.9%_76.01%_84.26%_21.44%]"
              data-node-id="47:537"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector32}
              />
            </div>
            <div
              className="absolute inset-[14.9%_70.78%_84.26%_26.67%]"
              data-node-id="47:538"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector32}
              />
            </div>
            <div
              className="-translate-x-1/2 absolute contents leading-[normal] left-[calc(50%-405px)] not-italic text-[#0b0f13] text-center top-[885px]"
              data-node-id="47:539"
            >
              <p
                className="-translate-x-1/2 absolute h-[19.183px] left-[calc(50%-404px)] text-[17px] text-center top-[calc(50%-2044px)] w-[39.028px]"
                data-node-id="47:540"
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontWeight: 700,
                }}
              >
                GMP
              </p>
              <p
                className="-translate-x-1/2 absolute font-['Times_New_Roman:Bold',sans-serif] h-[7.938px] left-[calc(50%-404.6px)] text-[5.5px] text-center top-[901.54px] w-[33.074px]"
                data-node-id="47:541"
              >
                14001:2015
              </p>
            </div>
            <div
              className="-translate-x-1/2 absolute contents leading-[normal] left-[calc(50%-506px)] not-italic text-black text-center top-[883px]"
              data-node-id="47:542"
            >
              <p
                className="-translate-x-1/2 absolute h-[19.183px] left-[calc(50%-505px)] text-[17px] text-center top-[calc(50%-2044px)] w-[39.028px]"
                data-node-id="47:543"
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontWeight: 700,
                }}
              >
                ISO
              </p>
              <p
                className="-translate-x-1/2 absolute font-['Times_New_Roman:Bold',sans-serif] h-[7.938px] left-[calc(50%-505.3px)] text-[5.5px] text-center top-[901.54px] w-[33.074px]"
                data-node-id="47:544"
              >
                45001:2018
              </p>
            </div>
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
