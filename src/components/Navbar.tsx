import { useState, useEffect } from 'react';

const imgArrowLight = '/assets/figma/87f39614-7293-4298-b70b-ea0666986aee.svg';
const imgArrowDark = '/assets/figma/7e8a7b0c-6b0c-4b40-9f47-9c71148f7b89.svg';

type NavbarProps = {
  activePage?: 'home' | 'about' | 'product' | 'facility' | 'pharmacovigilance' | 'careers' | 'contact' | 'antibiotics' | 'antiinflammatory' | 'gastrointestinal' | 'cns' | 'cardiovascular' | 'respiratory' | 'dermatology';
  onNavigateHome?: () => void;
  onNavigateAbout?: (section?: 'about' | 'vision' | 'ims') => void;
  onNavigateProducts?: () => void;
  onNavigateAntibiotics?: () => void;
  onNavigateAntiInflammatory?: () => void;
  onNavigateGastrointestinal?: () => void;
  onNavigateCns?: () => void;
  onNavigateCardiovascular?: () => void;
  onNavigateRespiratory?: () => void;
  onNavigateDermatology?: () => void;
  onNavigateFacility?: (section?: 'production' | 'quality') => void;
  onNavigatePharmacovigilance?: () => void;
  onNavigateCareers?: () => void;
  onNavigateContact?: () => void;
};

export default function Navbar({
  activePage = 'home',
  onNavigateHome,
  onNavigateAbout,
  onNavigateProducts,
  onNavigateAntibiotics,
  onNavigateAntiInflammatory,
  onNavigateGastrointestinal,
  onNavigateCns,
  onNavigateCardiovascular,
  onNavigateRespiratory,
  onNavigateDermatology,
  onNavigateFacility,
  onNavigatePharmacovigilance,
  onNavigateCareers,
  onNavigateContact
}: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = () => setOpenMenu(null);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const toggleMenu = (e: React.MouseEvent, menu: string) => {
    e.stopPropagation();
    setOpenMenu(prev => prev === menu ? null : menu);
  };

  const btnBase =
    "absolute top-[77px] z-[2] border-0 bg-transparent p-0 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] whitespace-nowrap focus-visible:outline-none";

  const navClusterRow =
    "pointer-events-auto absolute left-0 top-[-39px] z-[1] flex h-[108px] items-center gap-[8px]";

  return (
    <div className="absolute contents z-[80]">
      {/* Home */}
      {activePage === 'home' && (
        <div className="absolute left-[calc(50%-368px)] top-[33px] h-[108px] w-[112px] bg-[#9d0b0f] z-[1]" />
      )}
      <button
        type="button"
        onClick={onNavigateHome}
        className={`absolute left-[calc(50%-368px)] top-[33px] z-[30] flex h-[108px] w-[112px] items-center justify-center border-0 bg-transparent px-4 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 ${
          activePage === 'home'
            ? "font-['Google_Sans:Bold',sans-serif] text-white hover:text-white"
            : 'text-[#010c0d] hover:text-[#9d0b0f]'
        }`}
      >
        Home
      </button>

      {/* Our Company */}
      <div className="absolute left-[calc(50%-231px)] top-[72px] z-20 h-[228px] w-[270px] pointer-events-none">
        <div
          className={`${navClusterRow} ${
            activePage === 'about' ? 'bg-[#9d0b0f] px-2' : 'bg-transparent px-0'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigateAbout?.('about');
            }}
            className={`relative border-0 bg-transparent p-0 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] ${activePage === 'about' ? 'text-white hover:text-white' : 'text-[#010c0d]'}`}
          >
            Our Company
          </button>
          <button
            type="button"
            aria-label="Toggle company menu"
            onClick={(e) => toggleMenu(e, 'company')}
            className="relative flex size-[32px] shrink-0 items-center justify-center overflow-clip border-0 bg-transparent p-0 cursor-pointer"
          >
            <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
              <img alt="" className="size-full" src={activePage === 'about' ? imgArrowLight : imgArrowDark} />
            </div>
          </button>
        </div>
        {openMenu === 'company' && (
          <div className="pointer-events-auto absolute left-0 top-[74px] w-[270px] shadow-lg rounded-b-md overflow-hidden bg-[#827f7f]">
            <button type="button" onClick={() => { onNavigateAbout?.('about'); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">About Us</button>
            <button type="button" onClick={() => { onNavigateAbout?.('vision'); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Vision &amp; Mission</button>
            <button type="button" onClick={() => { onNavigateAbout?.('ims'); setOpenMenu(null); }} className="block h-[49px] w-full pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">IMS Policy</button>
          </div>
        )}
      </div>

      {/* Products */}
      <div className="absolute left-[calc(50%-8px)] top-[72px] z-20 h-[440px] w-[365px] pointer-events-none">
        <div
          className={`${navClusterRow} ${
            ['product', 'antibiotics', 'antiinflammatory', 'gastrointestinal', 'cns', 'cardiovascular', 'respiratory', 'dermatology'].includes(activePage)
              ? 'bg-[#9d0b0f] px-2'
              : 'bg-transparent px-0'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigateProducts?.();
            }}
            className={`relative border-0 bg-transparent p-0 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] ${['product', 'antibiotics', 'antiinflammatory', 'gastrointestinal', 'cns', 'cardiovascular', 'respiratory', 'dermatology'].includes(activePage) ? 'text-white hover:text-white' : 'text-[#010c0d]'}`}
          >
            Products
          </button>
          <button
            type="button"
            aria-label="Toggle products menu"
            onClick={(e) => toggleMenu(e, 'products')}
            className="relative flex size-[32px] shrink-0 items-center justify-center overflow-clip border-0 bg-transparent p-0 cursor-pointer"
          >
            <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
              <img
                alt=""
                className="size-full"
                src={
                  ['product', 'antibiotics', 'antiinflammatory', 'gastrointestinal', 'cns', 'cardiovascular', 'respiratory', 'dermatology'].includes(activePage)
                    ? imgArrowLight
                    : imgArrowDark
                }
              />
            </div>
          </button>
        </div>
        {openMenu === 'products' && (
          <div className="pointer-events-auto absolute left-0 top-[74px] w-[365px] shadow-lg rounded-b-md overflow-hidden bg-[#827f7f]">
            <button type="button" onClick={() => { onNavigateAntiInflammatory?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-inflammatory / Analgesics</button>
            <button type="button" onClick={() => { onNavigateAntibiotics?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Anti-biotics</button>
            <button type="button" onClick={() => { onNavigateGastrointestinal?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Gastrointestinal Agents</button>
            <button type="button" onClick={() => { onNavigateCns?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">CNS / Psychiatric</button>
            <button type="button" onClick={() => { onNavigateCardiovascular?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Cardiovascular / Lipid Control</button>
            <button type="button" onClick={() => { onNavigateDermatology?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Dermatology</button>
            <button type="button" onClick={() => { onNavigateRespiratory?.() ?? onNavigateProducts?.(); setOpenMenu(null); }} className="block h-[49px] w-full pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Respiratory &amp; Antiallergic</button>
          </div>
        )}
      </div>

      {/* Facility */}
      <div className="absolute left-[calc(50%+172px)] top-[72px] z-20 h-[228px] w-[270px] pointer-events-none">
        <div
          className={`${navClusterRow} ${activePage === 'facility' ? 'bg-[#9d0b0f] pl-4 pr-3' : 'bg-transparent px-0'}`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigateFacility?.();
            }}
            className={`relative border-0 bg-transparent p-0 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] cursor-pointer transition-colors duration-200 hover:text-[#9d0b0f] ${activePage === 'facility' ? 'text-white hover:text-white' : 'text-[#010c0d]'}`}
          >
            Facility
          </button>
          <button
            type="button"
            aria-label="Toggle facility menu"
            onClick={(e) => toggleMenu(e, 'facility')}
            className="relative flex size-[32px] shrink-0 items-center justify-center overflow-clip border-0 bg-transparent p-0 cursor-pointer"
          >
            <div className="absolute inset-[35.83%_26.13%_35%_26.14%]">
              <img alt="" className="size-full" src={activePage === 'facility' ? imgArrowLight : imgArrowDark} />
            </div>
          </button>
        </div>
        {openMenu === 'facility' && (
          <div className="pointer-events-auto absolute left-0 top-[74px] w-[270px] shadow-lg rounded-b-md overflow-hidden bg-[#827f7f]">
            <button type="button" onClick={() => { onNavigateFacility?.('production'); setOpenMenu(null); }} className="block h-[49px] w-full border-b border-[#f2f2f2] pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Production</button>
            <button type="button" onClick={() => { onNavigateFacility?.('quality'); setOpenMenu(null); }} className="block h-[49px] w-full pl-[23px] text-left font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[49px] text-white cursor-pointer transition-colors duration-200 hover:bg-[#6f6c6c]">Quality Operations</button>
          </div>
        )}
      </div>

      {/* Pharmacovigilance */}
      {activePage === 'pharmacovigilance' && (
        <div className="absolute left-[calc(50%+314px)] top-[33px] h-[108px] w-[252px] bg-[#9d0b0f] z-[1]" />
      )}
      <button
        type="button"
        aria-label="Pharmacovigilance"
        onClick={onNavigatePharmacovigilance}
        className={`absolute z-[30] left-[calc(50%+314px)] top-[33px] h-[108px] w-[252px] pl-[18px] text-left border-0 bg-transparent font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] whitespace-nowrap cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 ${
          activePage === 'pharmacovigilance'
            ? "font-['Google_Sans:Bold',sans-serif] text-white hover:text-white"
            : 'text-[#010c0d] hover:text-[#9d0b0f]'
        }`}
      >
        Pharmacovigilance
      </button>

      {/* Careers */}
      {activePage === 'careers' && (
        <div className="absolute left-[calc(50%+576px)] top-[33px] h-[108px] w-[130px] bg-[#9d0b0f] z-[1]" />
      )}
      <button
        type="button"
        onClick={onNavigateCareers}
        className={`absolute left-[calc(50%+576px)] top-[33px] z-[30] flex h-[108px] w-[130px] items-center justify-center border-0 bg-transparent px-4 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 ${
          activePage === 'careers'
            ? "font-['Google_Sans:Bold',sans-serif] text-white hover:text-white"
            : 'text-[#010c0d] hover:text-[#9d0b0f]'
        }`}
      >
        Careers
      </button>

      {/* Contact us */}
      {activePage === 'contact' && (
        <div className="absolute left-[calc(50%+718px)] top-[33px] h-[108px] w-[153px] bg-[#9d0b0f] z-[1]" />
      )}
      <button
        type="button"
        onClick={onNavigateContact}
        className={`absolute left-[calc(50%+718px)] top-[33px] z-[30] flex h-[108px] w-[153px] items-center justify-center border-0 bg-transparent px-4 font-['Google_Sans:Regular',sans-serif] text-[24px] leading-[20px] whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 ${
          activePage === 'contact'
            ? "font-['Google_Sans:Bold',sans-serif] text-white hover:text-white"
            : 'text-[#010c0d] hover:text-[#9d0b0f]'
        }`}
      >
        Contact us
      </button>
    </div>
  );
}
