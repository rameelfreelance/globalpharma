import { useCallback, useLayoutEffect, useRef } from 'react'

const imgArrowRight = '/assets/figma/5e8d8e5c-2ac1-4e62-b6fc-3f7ada4293a9.svg'

const GAP_PX = 16
const PX_PER_SECOND = 28
const LOOP_SET_COUNT = 3

export type ProductCarouselItem = {
  name: string
  image: string
  nameColor: string
}

export const HOME_CAROUSEL_PRODUCTS: ProductCarouselItem[] = [
  { name: 'VONOGLOB', image: '/assets/products/1.png?v=4', nameColor: '#0c2d6b' },
  { name: 'Tamsol', image: '/assets/products/2.png?v=4', nameColor: '#78904a' },
  { name: 'ESOLEX', image: '/assets/products/3.png?v=4', nameColor: '#a51d24' },
  { name: 'VONOGLOB', image: '/assets/products/4.png?v=4', nameColor: '#0c2d6b' },
  { name: 'COX-2', image: '/assets/products/5.png?v=4', nameColor: '#f7931e' },
  { name: 'PELTON-V', image: '/assets/products/6.png?v=4', nameColor: '#556b2f' },
  { name: 'PELTON-C', image: '/assets/products/7.png?v=4', nameColor: '#0d5c5e' },
]

type ProductsCarouselProps = {
  products?: ProductCarouselItem[]
  className?: string
  /** Desktop home: 1920px Figma canvas sizing (scaled by parent .figma-scale-section). */
  scaledDesktop?: boolean
}

export default function ProductsCarousel({
  products = HOME_CAROUSEL_PRODUCTS,
  className = '',
  scaledDesktop = false,
}: ProductsCarouselProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const setWidthRef = useRef(0)

  const loopedProducts = Array.from({ length: LOOP_SET_COUNT }, () => products).flat()

  const syncDuration = useCallback(() => {
    const row = rowRef.current
    if (!row || products.length === 0) return

    const setWidth = row.scrollWidth / LOOP_SET_COUNT
    if (setWidth > 0) {
      setWidthRef.current = setWidth
      row.style.setProperty('--products-carousel-duration', `${setWidth / PX_PER_SECOND}s`)
    }
  }, [products.length])

  const getScrollStep = useCallback(() => {
    const card = cardRef.current
    return card ? card.offsetWidth + GAP_PX : 184
  }, [])

  const scrollByStep = useCallback(
    (direction: -1 | 1) => {
      const row = rowRef.current
      if (!row) return

      const animation = row.getAnimations()[0]
      const setWidth = setWidthRef.current
      if (!animation || setWidth <= 0) return

      const timing = animation.effect?.getTiming()
      const duration = typeof timing?.duration === 'number' ? timing.duration : setWidth / PX_PER_SECOND * 1000
      const step = getScrollStep()
      const timeShift = (step / setWidth) * duration
      const current = typeof animation.currentTime === 'number' ? animation.currentTime : 0
      animation.currentTime = (current + direction * timeShift + duration) % duration
    },
    [getScrollStep],
  )

  useLayoutEffect(() => {
    const row = rowRef.current
    if (!row) return

    syncDuration()

    const resizeObserver = new ResizeObserver(syncDuration)
    resizeObserver.observe(row)

    row.querySelectorAll('img').forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', syncDuration, { once: true })
      }
    })

    window.addEventListener('resize', syncDuration)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', syncDuration)
    }
  }, [syncDuration, products])

  return (
    <section
      className={
        scaledDesktop
          ? `bg-white px-12 py-20 ${className}`.trim()
          : `bg-white px-5 py-10 lg:px-8 lg:py-12 ${className}`.trim()
      }
    >
      <div className={scaledDesktop ? 'w-full' : 'mx-auto w-full max-w-[1200px]'}>
        <div>
          <p
            className={
              scaledDesktop
                ? "font-['Google_Sans:Medium',sans-serif] leading-none text-[25px] text-black tracking-[2.375px] uppercase fade-up d0"
                : 'text-xs uppercase tracking-[2px] text-black fade-up d0'
            }
          >
            Our Products
          </p>
          <h2
            className={
              scaledDesktop
                ? "mt-3 font-['Google_Sans:Medium',sans-serif] leading-[1.1] text-[64px] tracking-[-1.92px] text-[#9d0b0f] clip-wrap"
                : 'mt-3 text-[30px] leading-[1.15] text-[#9d0b0f] clip-wrap'
            }
          >
            <span className="clip-line d1">Diverse Pharmaceutical Solutions</span>
          </h2>
        </div>

        <div
          className={`mt-6 flex items-center ${scaledDesktop ? 'gap-3' : 'gap-3 lg:gap-4'}`}
        >
          <button
            type="button"
            aria-label="Scroll products left"
            onClick={() => scrollByStep(-1)}
            className={
              scaledDesktop
                ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-[#9d0b0f] shadow-[0_1px_4px_rgba(25,33,61,0.06)] transition-colors duration-200 hover:bg-[#4e0a0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50'
                : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#9d0b0f] shadow-[0_1px_4px_rgba(25,33,61,0.06)] transition-colors duration-200 hover:bg-[#4e0a0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 lg:h-11 lg:w-11'
            }
          >
            <img
              alt=""
              aria-hidden
              className={scaledDesktop ? 'size-6 brightness-0 invert' : 'size-5 brightness-0 invert lg:size-6'}
              style={{ transform: 'scaleX(-1)' }}
              src={imgArrowRight}
            />
          </button>

          <div className="products-carousel-viewport min-w-0 flex-1 overflow-hidden">
            <div ref={rowRef} className={`products-carousel-track flex w-max ${scaledDesktop ? 'gap-5' : 'gap-4'}`}>
              {loopedProducts.map((product, index) => (
                <div
                  key={`${product.name}-${product.image}-${index}`}
                  ref={index === products.length ? cardRef : undefined}
                  className={
                    scaledDesktop
                      ? 'relative size-[340px] shrink-0 overflow-hidden rounded-none bg-[#f5f8f9] shadow-[0_1px_4px_rgba(25,33,61,0.06)]'
                      : 'relative size-[168px] shrink-0 overflow-hidden rounded-none bg-[#f5f8f9] shadow-[0_1px_4px_rgba(25,33,61,0.06)] sm:size-[200px] lg:size-[220px]'
                  }
                >
                  <div className="absolute inset-0 bg-[#f5f8f9] p-3">
                    <img
                      alt={product.name}
                      className="h-full w-full object-contain"
                      src={product.image}
                      draggable={false}
                    />
                  </div>
                  <p
                    className={
                      scaledDesktop
                        ? 'pointer-events-none absolute left-0 top-0 z-10 px-3 pt-3 pb-1.5 text-[21px] font-bold leading-tight'
                        : 'pointer-events-none absolute left-0 top-0 z-10 px-3 py-1.5 text-[16px] font-bold leading-tight lg:text-[17px]'
                    }
                    style={{ color: product.nameColor }}
                  >
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll products right"
            onClick={() => scrollByStep(1)}
            className={
              scaledDesktop
                ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-[#9d0b0f] shadow-[0_1px_4px_rgba(25,33,61,0.06)] transition-colors duration-200 hover:bg-[#4e0a0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50'
                : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#9d0b0f] shadow-[0_1px_4px_rgba(25,33,61,0.06)] transition-colors duration-200 hover:bg-[#4e0a0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d0b0f]/50 lg:h-11 lg:w-11'
            }
          >
            <img
              alt=""
              aria-hidden
              className={scaledDesktop ? 'size-6 brightness-0 invert' : 'size-5 brightness-0 invert lg:size-6'}
              src={imgArrowRight}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
