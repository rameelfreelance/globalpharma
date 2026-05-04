const LOGO_SRC = "/assets/global-pharma-pakistan-logo.svg";

type MobileTopLogoProps = {
  /** Positioning only; visibility is `xl:hidden` (non-desktop / no top nav bar). */
  className: string;
  onActivate?: () => void;
};

/**
 * Brand mark for viewports below `xl` where the horizontal navbar is hidden.
 */
export default function MobileTopLogo({ className, onActivate }: MobileTopLogoProps) {
  const mark = (
    <span className="inline-flex max-w-[min(82vw,276px)] items-center justify-start">
      <img
        src={LOGO_SRC}
        alt="Global Pharma Pakistan"
        className="h-8 w-auto object-contain object-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] sm:h-10"
        width={307}
        height={81}
        decoding="async"
      />
    </span>
  );

  if (onActivate) {
    return (
      <button
        type="button"
        aria-label="Global Pharma Pakistan — Home"
        onClick={onActivate}
        className={`xl:hidden ${className}`}
      >
        {mark}
      </button>
    );
  }

  return (
    <div className={`xl:hidden ${className}`} role="img" aria-label="Global Pharma Pakistan">
      {mark}
    </div>
  );
}
