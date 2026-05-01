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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = () => {
      setOpenMenu(null);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const closeMobileOnDesktop = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
        setMobileSection(null);
      }
    };
    window.addEventListener('resize', closeMobileOnDesktop);
    return () => window.removeEventListener('resize', closeMobileOnDesktop);
  }, []);

  const toggleMenu = (e: React.MouseEvent, menu: string) => {
    e.stopPropagation();
    setOpenMenu(prev => prev === menu ? null : menu);
  };

  const navClusterRow =
    "pointer-events-auto absolute left-0 top-[-39px] z-[1] flex h-[108px] items-center gap-[8px]";

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
        className="fixed right-4 top-12 z-[140] flex h-10 w-10 items-center justify-center rounded-md border border-[#9d0b0f]/35 bg-white text-[#9d0b0f] shadow-sm xl:hidden"
      >
        <span className="text-[20px] leading-none">≡</span>
      </button>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[150] xl:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            aria-label="Close menu overlay"
            onClick={() => {
              setMobileOpen(false);
              setMobileSection(null);
            }}
          />
          <div className="absolute right-0 top-0 h-full w-[min(88vw,360px)] overflow-y-auto bg-[#92050b] shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-3 py-2.5">
              <p className="font-['Google_Sans:Bold',sans-serif] text-[14px] leading-[1.15] text-[#9d0b0f]">Global Pharmaceuticals (Pvt) Ltd.</p>
              <button
                type="button"
                aria-label="Close menu"
                className="px-2 py-1 text-[28px] leading-none text-[#9d0b0f]"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileSection(null);
                }}
              >
                ×
              </button>
            </div>

            <div className="px-3 py-2 text-white">
              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => { onNavigateHome?.(); setMobileOpen(false); }}>Home</button>
              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => setMobileSection((p) => p === 'company' ? null : 'company')}>Our Company</button>
              {mobileSection === 'company' ? (
                <div className="space-y-1 border-b border-white/15 pb-2">
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateAbout?.('about'); setMobileOpen(false); }}>About Us</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateAbout?.('vision'); setMobileOpen(false); }}>Vision & Mission</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateAbout?.('ims'); setMobileOpen(false); }}>IMS Policy</button>
                </div>
              ) : null}

              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => setMobileSection((p) => p === 'products' ? null : 'products')}>Products</button>
              {mobileSection === 'products' ? (
                <div className="space-y-1 border-b border-white/15 pb-2">
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateProducts?.(); setMobileOpen(false); }}>All Products</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateAntiInflammatory?.(); setMobileOpen(false); }}>Anti-inflammatory / Analgesics</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateAntibiotics?.(); setMobileOpen(false); }}>Anti-biotics</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateGastrointestinal?.(); setMobileOpen(false); }}>Gastrointestinal Agents</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateCns?.(); setMobileOpen(false); }}>CNS / Psychiatric</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateCardiovascular?.(); setMobileOpen(false); }}>Cardiovascular / Lipid Control</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateDermatology?.(); setMobileOpen(false); }}>Dermatology</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateRespiratory?.(); setMobileOpen(false); }}>Respiratory & Antiallergic</button>
                </div>
              ) : null}

              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => setMobileSection((p) => p === 'facility' ? null : 'facility')}>Facility</button>
              {mobileSection === 'facility' ? (
                <div className="space-y-1 border-b border-white/15 pb-2">
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateFacility?.('production'); setMobileOpen(false); }}>Production</button>
                  <button type="button" className="block w-full py-2 text-center text-base" onClick={() => { onNavigateFacility?.('quality'); setMobileOpen(false); }}>Quality Operations</button>
                </div>
              ) : null}

              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => { onNavigatePharmacovigilance?.(); setMobileOpen(false); }}>Pharmacovigilance</button>
              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => { onNavigateCareers?.(); setMobileOpen(false); }}>Careers</button>
              <button type="button" className="block w-full border-b border-white/15 py-2.5 text-center font-['Google_Sans:Regular',sans-serif] text-[clamp(1.2rem,4.8vw,1.55rem)] leading-[1.15] tracking-[-0.01em] transition-opacity hover:opacity-90 active:opacity-80" onClick={() => { onNavigateContact?.(); setMobileOpen(false); }}>Contact us</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="absolute contents z-[80] max-xl:hidden">
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
    </>
  );
}
