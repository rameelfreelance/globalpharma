import { initScrollReveal } from '../scroll-reveal'

export function bootstrapScrollReveal() {
  const raf = requestAnimationFrame(() => {
    setTimeout(initScrollReveal, 80)
  })

  return () => cancelAnimationFrame(raf)
}
