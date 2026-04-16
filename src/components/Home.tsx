import {
  img91098441,
  imgArrowRight,
  imgArrowRight1,
  imgDsc01283Copy1,
  imgDsc01471Copy1,
  imgDsc01471Copy2,
  imgFrame1000001885,
  imgGroup1,
  imgGroup1000000720,
  imgGroup1000001883,
  imgGroup1000001909,
  imgGroup2,
  imgIcon,
  imgIcon1,
  imgIcon2,
  imgLine2,
  imgRectangle3468149,
  imgRectangle4,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
  imgVector4,
  imgVector5,
  imgVector6,
  imgVector7,
  imgVector8,
  imgVector9,
  imgWhatsAppImage20260407At40919Pm1,
} from './figmaAssets'

function StethoscopeLine({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[50px]"} data-node-id="1:404" data-name="stethoscope-line">
      <div className="absolute inset-[16.25%_12.5%_12.5%_20%]" data-node-id="1:405" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function MedicineBottleLine({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[50px]"} data-node-id="1:402" data-name="medicine-bottle-line">
      <div className="absolute inset-[12.5%_20%]" data-node-id="1:403" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
    </div>
  );
}

function CapsuleLine({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[50px]"} data-node-id="1:397" data-name="capsule-line">
      <div className="absolute inset-[14.24%]" data-node-id="1:398" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex w-screen justify-center overflow-x-hidden bg-white">
      {/*
        All coordinates are for a 1920×4720 Figma frame. A fixed-size canvas keeps
        calc(50% - …) math stable; the previous full-width wrapper broke horizontal layout,
        and a taller scroll sentinel broke vertical calc(50% - …) positions.
      */}
      <div
        className="relative h-[4720px] w-[1920px] shrink-0 bg-white"
        data-node-id="1:2126"
        data-name="Home"
      >
      <div className="-translate-x-1/2 absolute bg-[#f5f8f9] h-[1513px] left-[calc(50%+0.5px)] top-[2831px] w-[1919px]" data-node-id="1:2127" />
      <div className="-translate-x-1/2 absolute h-[476px] left-1/2 overflow-clip top-[2601px] w-[1360px]" data-node-id="1:2130" data-name="Group F - Newsletter">
        <div className="-translate-x-1/2 absolute h-[476px] left-1/2 rounded-[50px] top-0 w-[1360px]" data-node-id="1:2131" style={{ backgroundImage: "linear-gradient(138.3679851582911deg, rgb(80, 101, 150) 2.5112%, rgb(10, 29, 44) 120.57%)" }} data-name="card">
          <div className="absolute content-stretch flex flex-col gap-[20px] items-center justify-center leading-[0] left-[197px] not-italic text-[#f9f9f9] text-center top-[103.5px]" data-node-id="1:2132" data-name="text">
            <div className="flex flex-col font-['Poppins',sans-serif] font-bold h-[157px] justify-center relative shrink-0 text-[48px] tracking-[-0.96px] w-[770px]" data-node-id="1:2133">
              <p className="leading-[60px]">150,000 Packs Per Day Production Capacity Target</p>
            </div>
            <div className="flex flex-col font-['Poppins',sans-serif] font-normal h-[61px] justify-center relative shrink-0 text-[18px] w-[966px]" data-node-id="1:2134">
              <p className="leading-[24px]">Through continuous investment in advanced automated machinery, we are scaling our manufacturing capacity to meet the growing demands of an expanding global patient base. Our facility is designed to support sustainable growth while ensuring consistent supply of affordable, high-quality medicines.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#9d0b0f] content-stretch flex gap-[10px] items-center justify-center left-[calc(50%+66px)] pl-[40px] pr-[34px] py-[20px] top-[3821px]" data-node-id="1:2135" data-name="Button">
        <p className="font-['Inter',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="I1:2135;3:127">
          All Products
        </p>
        <div className="relative shrink-0 size-[24px]" data-node-id="I1:2135;3:128" data-name="arrow-right">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
        </div>
      </div>
      <div className="absolute bg-[#0b4d83] left-[calc(50%+66px)] overflow-clip size-[100px] top-[3257px]" data-node-id="1:2136" data-name="Icon">
        <CapsuleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+190px)] not-italic top-[3259px]" data-node-id="1:2139" data-name="Title">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px]" data-node-id="1:2140">
          Cephalosporins
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[517px]" data-node-id="1:2141">
          Broad-spectrum antibiotics for critical infections, manufactured to the highest purity standards.
        </p>
      </div>
      <div className="absolute h-0 left-[calc(50%+66px)] top-[3401px] w-[624px]" data-node-id="1:2142">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>
      <div className="absolute bg-[#0b4d83] left-[calc(50%+66px)] overflow-clip size-[100px] top-[3445px]" data-node-id="1:2143" data-name="Icon">
        <MedicineBottleLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+190px)] not-italic top-[3447px]" data-node-id="1:2145" data-name="Title">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px]" data-node-id="1:2146">
          NSAIDS
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[495px]" data-node-id="1:2147">
          Targeted therapies supporting urological health and improving patient quality of life.
        </p>
      </div>
      <div className="absolute h-0 left-[calc(50%+66px)] top-[3589px] w-[624px]" data-node-id="1:2148">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>
      <div className="absolute bg-[#0b4d83] left-[calc(50%+66px)] overflow-clip size-[100px] top-[3633px]" data-node-id="1:2149" data-name="Icon">
        <StethoscopeLine className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+190px)] not-italic top-[3635px]" data-node-id="1:2151" data-name="Title">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#051c2f] text-[24px] w-[360px]" data-node-id="1:2152">
          Gastroenterology
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#808586] text-[16px] w-[496px]" data-node-id="1:2153">
          Effective formulations for digestive health conditions and gastrointestinal disorders.
        </p>
      </div>
      <div className="absolute h-0 left-[calc(50%+66px)] top-[3777px] w-[624px]" data-node-id="1:2154">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>
      <div className="absolute bg-[#808586] h-[408px] left-[calc(50%-707px)] overflow-clip top-[3477px] w-[705px]" data-node-id="1:2155" data-name="Image">
        <div className="absolute bg-[#010c0d] h-[443px] left-[-20px] top-[-18px] w-[600px]" data-node-id="1:2156" data-name="Replace This" />
        <div className="absolute h-[590px] left-[-224px] top-[-118px] w-[1049px]" data-node-id="1:2157" data-name="DSC01283 copy 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDsc01283Copy1} />
        </div>
        <div className="absolute bottom-0 contents right-[505px]" data-node-id="1:2158" data-name="Shape">
          <div className="absolute bottom-0 flex items-center justify-center right-[605px] size-[100px]">
            <div className="-scale-y-100 flex-none">
              <div className="bg-white size-[100px]" data-node-id="1:2159" />
            </div>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center right-[505px] size-[100px]">
            <div className="-scale-y-100 flex-none">
              <div className="bg-[#9d0b0f] size-[100px]" data-node-id="1:2160" />
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter',sans-serif] font-medium leading-none left-[calc(50%-707px)] not-italic text-[#9d0b0f] text-[18px] top-[3257px] whitespace-nowrap" data-node-id="1:2161">
        Therapeutic Portfolio
      </p>
      <p className="absolute font-['Inter',sans-serif] font-semibold leading-[1.4] left-[calc(50%-707px)] not-italic text-[#010c0d] text-[56px] top-[3290px] w-[560px]" data-node-id="1:2162">
        Our Product Line
      </p>
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[1.6] left-[calc(50%-707px)] not-italic text-[#808586] text-[18px] top-[3388px] w-[718px]" data-node-id="1:2163">
        Continuously expanding into new therapeutic segments with advanced automated manufacturing.
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[1.1] left-[calc(50%-228px)] not-italic text-[#051c2f] text-[64px] top-[1581px] tracking-[-1.92px] w-[727px]" data-node-id="1:2164">
        Quality is the Heart of Everything
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%-228px)] not-italic text-[#2f4252] text-[25px] text-justify top-[1757px] w-[993px]" data-node-id="1:2165">
        At Global Pharmaceuticals Pakistan (Pvt.) Ltd., quality is at the heart of everything we do. Our operations strictly comply with Current Good Manufacturing Practices (cGMP), and our facilities are routinely inspected and approved by leading regulatory authorities. Through a robust Quality Management System encompassing every stage from raw material procurement to final product release we ensure the highest standards of safety, purity, and efficacy in every medicine we produce.
      </p>
      <div className="absolute bg-[#f7f4f4] border border-[#dadada] border-solid h-[167px] left-[calc(50%-228px)] rounded-[12px] top-[2035px] w-[993px]" data-node-id="1:2166" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%-180.2px)] not-italic text-[#9d0b0f] text-[48px] top-[calc(50%-293px)] tracking-[-2.4px] w-[131.458px]" data-node-id="1:2167">
        100%
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.3] left-[calc(50%-176.94px)] not-italic text-[#051c2f] text-[28px] top-[calc(50%-230px)] w-[369.387px]" data-node-id="1:2168">
        Commitment to Excellence
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[87px] leading-[1.4] left-[calc(50%+212px)] not-italic text-[#2f4252] text-[21px] text-justify top-[calc(50%-287px)] w-[504px]" data-node-id="1:2169">
        Every batch, every product, every partner held to the same uncompromising standard of pharmaceutical quality and safety.
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-none left-[calc(50%-228px)] not-italic text-[#9d0b0f] text-[18px] top-[1528px] tracking-[1.71px] uppercase whitespace-nowrap" data-node-id="1:2170">
        Who We Are
      </p>
      <div className="absolute bg-white border border-[#c2c2c2] border-solid h-[154px] left-[calc(50%-764px)] rounded-[12px] top-[2267px] w-[358.458px]" data-node-id="1:2171" />
      <div className="absolute bg-white border border-[#c2c2c2] border-solid h-[154px] left-[calc(50%+16.36px)] rounded-[12px] top-[2267px] w-[358.458px]" data-node-id="1:2172" />
      <div className="absolute bg-[#0b4d83] h-[154px] left-[calc(50%-373.82px)] rounded-[12px] top-[2267px] w-[358.458px]" data-node-id="1:2173" />
      <div className="absolute bg-white border border-[#c2c2c2] border-solid h-[154px] left-[calc(50%+406.54px)] rounded-[12px] top-[2267px] w-[358.458px]" data-node-id="1:2174" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%-688.92px)] not-italic text-[#9d0b0f] text-[25px] top-[2302px] w-[225.226px]" data-node-id="1:2175">
        cGMP Operations
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%+91.44px)] not-italic text-[#9d0b0f] text-[25px] top-[2302px] w-[265.407px]" data-node-id="1:2176">
        Quality Management
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%-298.74px)] not-italic text-[25px] text-white top-[2302px] w-[270.694px]" data-node-id="1:2177">
        Regulatory Approved
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%+481.62px)] not-italic text-[#9d0b0f] text-[25px] top-[2302px] w-[249.546px]" data-node-id="1:2178">
        Sustainable Growth
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%-688.92px)] not-italic text-[#2f4252] text-[18px] top-[2342px] w-[248.489px]" data-node-id="1:2179">
        Strictly compliant with global manufacturing standards
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%+91.44px)] not-italic text-[#2f4252] text-[18px] top-[2342px] w-[248.489px]" data-node-id="1:2180">
        End-to-end QMS from raw material to final release
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%-298.74px)] not-italic text-[18px] text-white top-[2342px] w-[263.293px]" data-node-id="1:2181">
        Inspected and approved by leading regulatory authorities
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%+481.62px)] not-italic text-[#2f4252] text-[18px] top-[2342px] w-[272.809px]" data-node-id="1:2182">
        Facility designed for consistent and scalable supply
      </p>
      <div className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%-742px)] overflow-clip p-[10px] rounded-[96px] top-[2302px] w-[40px]" data-node-id="1:2183" data-name="Key Icons [1.0]">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I1:2183;8751:126791" data-name="survey-line">
          <div className="absolute inset-[12.5%_16.25%]" data-node-id="I1:2183;8751:126791;320:848" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%+39px)] overflow-clip p-[10px] rounded-[96px] top-[2302px] w-[40px]" data-node-id="1:2184" data-name="Key Icons [1.0]">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I1:2184;8751:126797" data-name="check-fill">
          <div className="absolute inset-[27.42%_17.72%_27.5%_18.64%]" data-node-id="I1:2184;8751:126797;320:845" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%-352px)] overflow-clip p-[10px] rounded-[96px] top-[2302px] w-[40px]" data-node-id="1:2185" data-name="Key Icons [1.0]">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I1:2185;8751:126793" data-name="organization-chart">
          <div className="absolute inset-[16.25%]" data-node-id="I1:2185;8751:126793;322:856" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#eaeef1] content-stretch flex items-center justify-center left-[calc(50%+429px)] overflow-clip p-[10px] rounded-[96px] top-[2302px] w-[40px]" data-node-id="1:2186" data-name="Key Icons [1.0]">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I1:2186;8751:126801" data-name="funds-box-line">
          <div className="absolute inset-[16.25%_12.5%]" data-node-id="I1:2186;8751:126801;322:859" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(50%-764px)] top-[1528px]" data-node-id="1:2187">
        <div className="absolute bg-[#808586] h-[674px] left-[calc(50%-764px)] overflow-clip top-[1528px] w-[456px]" data-node-id="1:2188" data-name="Image">
          <div className="absolute bottom-0 contents right-[256px]" data-node-id="1:2189" data-name="Shape">
            <div className="absolute bg-[#f8fafa] bottom-0 right-[356px] size-[100px]" data-node-id="1:2190" />
            <div className="absolute bg-white bottom-0 opacity-20 right-[256px] size-[100px]" data-node-id="1:2191" />
            <div className="absolute bg-[#00d3be] bottom-[100px] right-[356px] size-[100px]" data-node-id="1:2192" />
          </div>
          <div className="absolute h-[704px] left-[-379px] top-[-15px] w-[1058px]" data-node-id="1:2194" data-name="WhatsApp Image 2026-04-07 at 4.09.19 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260407At40919Pm1} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[2px] content-stretch flex flex-col items-start left-0 w-[1920px]" data-node-id="1:2196">
        <div className="bg-[#272727] content-stretch flex flex-col h-[509px] items-start pb-[99px] pl-[195px] pr-[193px] pt-[98px] relative shrink-0 w-full" data-node-id="1:2197">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:2198">
            <div className="col-1 content-stretch flex flex-col gap-[4px] items-start ml-0 mt-0 relative row-1 w-[1532px]" data-node-id="1:2199">
              <div className="content-stretch flex gap-[63px] items-start relative shrink-0 w-full" data-node-id="1:2200">
                <div className="h-[248.476px] relative shrink-0 w-[418px]" data-node-id="1:2201">
                  <div className="absolute font-['Inter',sans-serif] font-normal h-[156px] leading-[0] left-0 not-italic text-[#f6fafb] text-[21.98px] top-[92.48px] w-[418px]" data-node-id="1:2202">
                    <p className="leading-[39px] mb-0">We are committed to manufacturing and</p>
                    <p className="leading-[39px] mb-0">delivering high-quality pharmaceutical</p>
                    <p className="leading-[39px] mb-0">products that meet stringent regulatory</p>
                    <p className="leading-[39px]">{`standards. `}</p>
                  </div>
                  <div className="absolute contents inset-[0_41.63%_72.07%_0]" data-node-id="1:2203">
                    <div className="absolute inset-[0_83.66%_72.07%_0]" data-node-id="1:2204">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                    <div className="absolute flex flex-col font-['Times_New_Roman',serif] font-bold inset-[1.02%_41.63%_72.83%_19.65%] justify-center leading-[0] not-italic text-[22px] text-white" data-node-id="1:2215">
                      <p className="leading-[23px] mb-0">Global</p>
                      <p className="leading-[23px] mb-0">Pharmaceuticals</p>
                      <p className="leading-[23px]">Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[50px] items-start leading-[normal] not-italic relative shrink-0 w-[228px]" data-node-id="1:2216">
                  <p className="font-['Inter',sans-serif] font-bold h-[48px] min-w-full relative shrink-0 text-[40px] text-white w-[min-content]" data-node-id="1:2217">
                    Quick Links
                  </p>
                  <div className="capitalize content-stretch flex flex-col font-['Inter',sans-serif] font-normal gap-[14px] items-start relative shrink-0 text-[#f6fafb] text-[21px] w-[131px]" data-node-id="1:2218">
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2219">
                      Home
                    </p>
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2220">
                      About Us
                    </p>
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2221">
                      Our Products
                    </p>
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2222">
                      Career
                    </p>
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2223">
                      Contact us
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[50px] items-start leading-[normal] not-italic relative shrink-0 w-[292px]" data-node-id="1:2224">
                  <p className="font-['Inter',sans-serif] font-bold h-[48px] relative shrink-0 text-[40px] text-white w-full" data-node-id="1:2225">
                    Quick Links
                  </p>
                  <div className="capitalize content-stretch flex flex-col font-['Inter',sans-serif] font-normal gap-[15px] items-start relative shrink-0 text-[#f6fafb] text-[21px] w-full" data-node-id="1:2226">
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2227">
                      Policy Statement
                    </p>
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2228">
                      Apply for other departments
                    </p>
                    <p className="h-[25px] relative shrink-0 w-full" data-node-id="1:2229">
                      Apply for sales
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[405px]" data-node-id="1:2230">
                  <p className="font-['Inter',sans-serif] font-bold h-[48px] leading-[normal] not-italic relative shrink-0 text-[40px] text-white w-full" data-node-id="1:2231">
                    Our Location
                  </p>
                  <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-node-id="1:2232">
                    <div className="content-stretch flex gap-[19px] items-center relative shrink-0" data-node-id="1:2233">
                      <div className="h-[20px] relative shrink-0 w-[16px]" data-node-id="1:2234" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                      </div>
                      <div className="font-['Inter',sans-serif] font-normal h-[56px] leading-[0] not-italic relative shrink-0 text-[#f6fafb] text-[22px] w-[207px]" data-node-id="1:2235">
                        <p className="leading-[28px] mb-0">Industrial Area,</p>
                        <p className="leading-[28px]">Islamabad, Pakistan</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[19px] items-center relative shrink-0" data-node-id="1:2236">
                      <div className="h-[15px] relative shrink-0 w-[16px]" data-node-id="1:2237" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                      </div>
                      <p className="font-['Inter',sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] w-[179px]" data-node-id="1:2238">
                        +92-51-449-302
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full" data-node-id="1:2239">
                      <div className="h-[12px] relative shrink-0 w-[18px]" data-node-id="1:2240" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                      </div>
                      <p className="font-['Inter',sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] w-[369px]" data-node-id="1:2241">
                        info@globalpharmaceuticalspk.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:2242">
                <div className="relative shrink-0 size-[29px]" data-node-id="1:2243">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000001883} />
                </div>
                <div className="relative shrink-0 size-[29px]" data-node-id="1:2246">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1000001885} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#272727] border border-[#ececec] border-solid content-stretch flex h-[146px] items-center justify-center pb-[59px] pl-[263px] pr-[1175px] pt-[60px] relative shrink-0 w-full" data-node-id="1:2250">
          <p className="capitalize font-['Inter',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f6fafb] text-[21.98px] whitespace-nowrap" data-node-id="1:2251">
            © 2026 Global Pharmaceutical Pakistan. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="absolute h-[1124px] left-[-1px] top-0 w-[1925px]" data-node-id="1:2252">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
      </div>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.48px)] top-[1232px]" data-node-id="1:2253">
        <p className="-translate-x-1/2 absolute capitalize font-['Roboto',sans-serif] font-normal leading-[1.02] left-[calc(50%+0.48px)] text-[#051c2f] text-[40px] text-center top-[1232px] tracking-[-0.4px] w-[1354.967px]" data-node-id="1:2254" style={{ fontVariationSettings: "'wdth' 100" }}>
          Our Trusted Group Companies and Strategic Partners
        </p>
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.3px)] top-[1306px]" data-node-id="1:2255">
          <div className="absolute contents left-[calc(50%-673px)] top-[1308.24px]" data-node-id="1:2256">
            <div className="absolute contents left-[calc(50%-673px)] top-[1308.24px]" data-node-id="1:2257">
              <div className="absolute inset-[27.71%_82.12%_71.09%_14.95%]" data-node-id="1:2258">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000000720} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Times_New_Roman',serif] font-bold justify-center leading-[0] left-[calc(50%-316.03px)] not-italic text-[#9d0b0f] text-[40px] text-center top-[1336.74px] w-[586px]" data-node-id="1:2269">
                <p className="leading-[23px]">Global Pharmaceuticals Pvt. Ltd.</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-[27.66%_14.92%_71.25%_51.78%]" data-node-id="1:2270">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000001909} />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[1257px] left-[-65px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[64px_75px] mask-size-[1925px_1124px] top-[-75px] w-[2050px]"
        data-node-id="1:2276"
        style={{
          maskImage: `url('${imgDsc01471Copy1}')`,
          WebkitMaskImage: `url('${imgDsc01471Copy1}')`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: '64px 75px',
          WebkitMaskPosition: '64px 75px',
          maskSize: '1925px 1124px',
          WebkitMaskSize: '1925px 1124px',
        }}
        data-name="DSC01471 copy 1"
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-30 pointer-events-none size-full" src={imgDsc01471Copy2} />
      </div>
      <div
        className="absolute h-[1354px] left-[calc(50%-604px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-357px_-228px] mask-size-[1925px_1124px] top-[228px] w-[2030px]"
        data-node-id="1:2277"
        style={{
          maskImage: `url('${imgDsc01471Copy1}')`,
          WebkitMaskImage: `url('${imgDsc01471Copy1}')`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: '-357px -228px',
          WebkitMaskPosition: '-357px -228px',
          maskSize: '1925px 1124px',
          WebkitMaskSize: '1925px 1124px',
        }}
        data-name="9109844 1"
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img91098441} />
      </div>
      <div className="absolute contents left-[calc(50%-765px)] top-[335px]" data-node-id="1:2278">
        <div
          className="absolute z-[3] flex flex-col content-stretch items-start gap-[14px] left-[calc(50%-765px)] not-italic top-[335px]"
          data-node-id="1:2279"
          data-name="Title"
        >
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:2280">
            Empowering Healthcare
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.16] relative shrink-0 text-[76px] text-white w-[653px]" data-node-id="1:2281">
            Advancing Lives Through Trusted Medicine
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f8fafa] text-[23px] text-justify w-[683px]" data-node-id="1:2282">
            Global Pharmaceuticals Pakistan is dedicated to developing and delivering high-quality, safe, and effective medicines that enhance lives. Guided by innovation and integrity, we strive to be a leading force in pharmaceutical manufacturing.
          </p>
        </div>
        <div className="absolute contents left-[calc(50%-765px)] top-[871px]" data-node-id="1:2283">
          <div className="absolute contents left-[calc(50%-765px)] top-[871px]" data-node-id="1:2284">
            <div className="absolute contents left-[calc(50%-699px)] not-italic text-white top-[871px] whitespace-nowrap" data-node-id="1:2285">
              <p
                className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%-699px)] text-[25px] top-[871px] z-[5]"
                data-node-id="1:2286"
              >
                cGMP
              </p>
              <p
                className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%-699px)] text-[16px] top-[902px] z-[5]"
                data-node-id="1:2287"
              >
                Certified Manufacturing
              </p>
            </div>
            <div
              className="absolute flex content-stretch items-center justify-center overflow-clip rounded-[96px] bg-[var(--bg\/weak-100,#f6f8fa)] left-[calc(50%-765px)] p-[14px] top-[871px] z-[5]"
              data-node-id="1:2288"
              data-name="Key Icons [1.0]"
            >
              <div className="relative shrink-0 overflow-clip size-[28px]" data-node-id="I1:2288;8966:65569" data-name="award-line">
                <div className="absolute inset-[8.75%_20%_10.19%_20%]" data-node-id="I1:2288;8966:65569;314:1606" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(50%-475px)] top-[871px]" data-node-id="1:2289">
            <div className="absolute contents left-[calc(50%-409px)] not-italic text-white top-[871px] whitespace-nowrap" data-node-id="1:2290">
              <p
                className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%-409px)] text-[25px] top-[871px] z-[5]"
                data-node-id="1:2291"
              >
                150,000
              </p>
              <p
                className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%-409px)] text-[16px] top-[902px] z-[5]"
                data-node-id="1:2292"
              >
                Packs Per Day Target
              </p>
            </div>
            <div
              className="absolute flex content-stretch items-center justify-center overflow-clip rounded-[96px] bg-[var(--bg\/weak-100,#f6f8fa)] left-[calc(50%-475px)] p-[14px] top-[871px] z-[5]"
              data-node-id="1:2293"
              data-name="Key Icons [1.0]"
            >
              <div className="relative shrink-0 overflow-clip size-[28px]" data-node-id="I1:2293;8966:65569" data-name="box-3-line">
                <div className="absolute inset-[15.63%_20.31%]" data-node-id="I1:2293;8966:65569;314:1602" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(50%-208px)] top-[871px]" data-node-id="1:2294">
            <div className="absolute contents left-[calc(50%-142px)] not-italic text-white top-[871px] whitespace-nowrap" data-node-id="1:2295">
              <p
                className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.3] left-[calc(50%-142px)] text-[25px] top-[871px] z-[5]"
                data-node-id="1:2296"
              >
                5+
              </p>
              <p
                className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[1.4] left-[calc(50%-142px)] text-[16px] top-[902px] z-[5]"
                data-node-id="1:2297"
              >
                Therapeutic Areas
              </p>
            </div>
            <div
              className="absolute flex content-stretch items-center justify-center overflow-clip rounded-[96px] bg-[var(--bg\/weak-100,#f6f8fa)] left-[calc(50%-208px)] p-[14px] top-[871px] z-[5]"
              data-node-id="1:2298"
              data-name="Key Icons [1.0]"
            >
              <div className="relative shrink-0 overflow-clip size-[28px]" data-node-id="I1:2298;8966:65569" data-name="pulse-fill">
                <div className="absolute inset-[14.23%_8.75%]" data-node-id="I1:2298;8966:65569;314:1609" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[33px]" data-node-id="1:2299">
        <div className="absolute bg-white h-[108px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-33px] mask-size-[1925px_1124px] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)] top-[33px] w-[1921px]" data-node-id="1:2300" style={{ maskImage: `url('${imgDsc01471Copy1}')` }} />
        <div className="absolute contents left-[calc(50%-382px)] top-[76px]" data-node-id="1:2301">
          <div className="absolute contents left-[calc(50%-382px)] top-[76px]" data-node-id="1:2302">
            <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[20px] left-[calc(50%-382px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-579px_-76px] mask-size-[1925px_1124px] not-italic text-[#9d0b0f] text-[24px] top-[76px] tracking-[-0.144px] whitespace-nowrap" data-node-id="1:2303" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0", maskImage: `url('${imgDsc01471Copy1}')` }}>
              Home
            </p>
            <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[20px] left-[calc(50%-240px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-721px_-76px] mask-size-[1925px_1124px] not-italic text-[#010c0d] text-[24px] top-[76px] tracking-[-0.144px] whitespace-nowrap" data-node-id="1:2304" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0", maskImage: `url('${imgDsc01471Copy1}')` }}>
              About Us
            </p>
            <div className="absolute contents left-[calc(50%-63px)] top-[76px]" data-node-id="1:2305">
              <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[20px] left-[calc(50%-63px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-898px_-76px] mask-size-[1925px_1124px] not-italic text-[#010c0d] text-[24px] top-[76px] tracking-[-0.144px] whitespace-nowrap" data-node-id="1:2306" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0", maskImage: `url('${imgDsc01471Copy1}')` }}>
                Products
              </p>
            </div>
            <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[20px] left-[calc(50%+110px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1071px_-76px] mask-size-[1925px_1124px] not-italic text-[#010c0d] text-[24px] top-[76px] tracking-[-0.144px] whitespace-nowrap" data-node-id="1:2307" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0", maskImage: `url('${imgDsc01471Copy1}')` }}>
              Facilities
            </p>
            <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[20px] left-[calc(50%+287px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1248px_-76px] mask-size-[1925px_1124px] not-italic text-[#010c0d] text-[24px] top-[76px] tracking-[-0.144px] whitespace-nowrap" data-node-id="1:2308" style={{ fontFeatureSettings: "'calt' 0, 'liga' 0", maskImage: `url('${imgDsc01471Copy1}')` }}>
              Contact us
            </p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute right-[calc(50%-765px)] top-[calc(50%-2274px)] flex content-stretch items-center justify-center gap-[10px] bg-[#9d0b0f] py-[20px] pl-[40px] pr-[34px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1492px_-55px] mask-size-[1925px_1124px]" data-node-id="1:2309" style={{ maskImage: `url('${imgDsc01471Copy1}')` }} data-name="Button">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="I1:2309;3:127">
            Partner with us
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="I1:2309;3:128" data-name="arrow-right">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight1} />
          </div>
        </div>
      </div>
      <div className="absolute h-[131px] left-[-3.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.5px_-22px] mask-size-[1925px_1124px] top-[22px] w-[510.5px]" data-node-id="1:2310" style={{ maskImage: `url('${imgDsc01471Copy1}')` }}>
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle3468149} />
      </div>
      <div className="absolute contents inset-[1%_77.14%_97.3%_7.66%]" data-node-id="1:2311">
        <div className="absolute contents inset-[1%_77.14%_97.3%_7.66%]" data-node-id="1:2312">
          <div className="absolute inset-[1%_88.21%_97.3%_7.66%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-148px_-47px] mask-size-[1925px_1124px]" data-node-id="1:2313" style={{ maskImage: `url('${imgDsc01471Copy1}')` }}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
          </div>
          <div className="absolute flex flex-col font-['Times_New_Roman',serif] font-bold inset-[1.05%_77.14%_97.34%_12.4%] justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-239px_-49.608px] mask-size-[1925px_1124px] not-italic text-[28px] text-white" data-node-id="1:2324" style={{ maskImage: `url('${imgDsc01471Copy1}')` }}>
            <p className="leading-[28px] mb-0">Global</p>
            <p className="leading-[28px] mb-0">Pharmaceuticals</p>
            <p className="leading-[28px]">Pakistan</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}