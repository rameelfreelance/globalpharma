import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { initScrollReveal } from './scroll-reveal'
import AboutUs from './components/AboutUs'
import AntiBiotics from './components/Anti-Biotics'
import AntiInflammatoryAnalgesics from './components/AntiInflammatoryAnalgesics'
import CardiovascularLipidControl from './components/CardiovascularLipidControl'
import CnsPsychiatric from './components/CnsPsychiatric'
import Dermatology from './components/Dermatology'
import Gastrointestinal from './components/Gastrointestinal'
import RespiratoryAntiallergic from './components/RespiratoryAntiallergic'
import Careers from './components/Careers'
import ContactUs from './components/ContactUs'
import Facilities from './components/Facilities'
import Home from './components/Home'
import Pharmacovigilance from './components/Pharmacovigilance'
import Product from './components/Product'

export default function App() {
  const reduceMotion = useReducedMotion()
  const [page, setPage] = useState<'home' | 'about' | 'contact' | 'careers' | 'pharmacovigilance' | 'facility' | 'product' | 'antibiotics' | 'antiinflammatory' | 'gastrointestinal' | 'cns' | 'cardiovascular' | 'respiratory' | 'dermatology'>('home')
  const [aboutSection, setAboutSection] = useState<'about' | 'vision' | 'ims'>('about')
  const [facilitySection, setFacilitySection] = useState<'production' | 'quality'>('production')
  const [zoomLevel, setZoomLevel] = useState(1)

  useEffect(() => {
    const parseHash = () => {
      const raw = window.location.hash.replace(/^#/, '')
      if (!raw) return
      const [rawPage, rawSection] = raw.split(':')
      const parsedPage = rawPage as typeof page
      const validPages = new Set([
        'home',
        'about',
        'contact',
        'careers',
        'pharmacovigilance',
        'facility',
        'product',
        'antibiotics',
        'antiinflammatory',
        'gastrointestinal',
        'cns',
        'cardiovascular',
        'respiratory',
        'dermatology',
      ])
      if (!validPages.has(parsedPage)) return
      setPage(parsedPage)
      if (parsedPage === 'about') {
        const about = rawSection as typeof aboutSection
        if (about === 'about' || about === 'vision' || about === 'ims') {
          setAboutSection(about)
        }
      }
      if (parsedPage === 'facility') {
        const facility = rawSection as typeof facilitySection
        if (facility === 'production' || facility === 'quality') {
          setFacilitySection(facility)
        }
      }
    }

    parseHash()
    window.addEventListener('hashchange', parseHash)
    return () => window.removeEventListener('hashchange', parseHash)
  }, [])

  useEffect(() => {
    let hash = page
    if (page === 'about') hash = `about:${aboutSection}`
    if (page === 'facility') hash = `facility:${facilitySection}`
    if (window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, '', `#${hash}`)
    }
  }, [page, aboutSection, facilitySection])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setZoomLevel(width < 1920 ? width / 1920 : 1)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Re-run scroll observer on every page change (after DOM settles)
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setTimeout(initScrollReveal, 80)
    })
    return () => cancelAnimationFrame(raf)
  }, [page])

  let currentPage = (
    <Home
      onNavigateAbout={(section = 'about') => {
        setAboutSection(section)
        setPage('about')
      }}
      onNavigateContact={() => setPage('contact')}
      onNavigateCareers={() => setPage('careers')}
      onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
      onNavigateFacility={(section = 'production') => {
        setFacilitySection(section)
        setPage('facility')
      }}
      onNavigateProducts={() => setPage('product')}
      onNavigateAntibiotics={() => setPage('antibiotics')}
      onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
      onNavigateGastrointestinal={() => setPage('gastrointestinal')}
      onNavigateCns={() => setPage('cns')}
      onNavigateCardiovascular={() => setPage('cardiovascular')}
      onNavigateRespiratory={() => setPage('respiratory')}
      onNavigateDermatology={() => setPage('dermatology')}
    />
  )

  if (page === 'about') {
    currentPage = <AboutUs onNavigateHome={() => setPage('home')} onNavigateCareers={() => setPage('careers')} onNavigateContact={() => setPage('contact')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={(section = 'production') => { setFacilitySection(section); setPage('facility') }} onNavigateProducts={() => setPage('product')} onNavigateAntibiotics={() => setPage('antibiotics')} onNavigateAntiInflammatory={() => setPage('antiinflammatory')} onNavigateGastrointestinal={() => setPage('gastrointestinal')} onNavigateCns={() => setPage('cns')} onNavigateCardiovascular={() => setPage('cardiovascular')} onNavigateRespiratory={() => setPage('respiratory')} onNavigateDermatology={() => setPage('dermatology')} initialSection={aboutSection} />
  } else if (page === 'contact') {
    currentPage = <ContactUs onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigateCareers={() => setPage('careers')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} />
  } else if (page === 'careers') {
    currentPage = <Careers onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigateContact={() => setPage('contact')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} />
  } else if (page === 'facility') {
    currentPage = <Facilities onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateCareers={() => setPage('careers')} onNavigateContact={() => setPage('contact')} onNavigateProducts={() => setPage('product')} initialSection={facilitySection} />
  } else if (page === 'pharmacovigilance') {
    currentPage = (
      <Pharmacovigilance
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateContact={() => setPage('contact')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateFacility={() => setPage('facility')}
        onNavigateProducts={() => setPage('product')}
      />
    )
  } else if (page === 'product') {
    currentPage = (
      <Product
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={(section = 'about') => { setAboutSection(section); setPage('about') }}
        onNavigateContact={() => setPage('contact')}
        onNavigateCareers={() => setPage('careers')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateFacility={(section = 'production') => { setFacilitySection(section); setPage('facility') }}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigateCns={() => setPage('cns')}
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigateDermatology={() => setPage('dermatology')}
      />
    )
  } else if (page === 'antibiotics') {
    currentPage = (
      <AntiBiotics
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  } else if (page === 'antiinflammatory') {
    currentPage = (
      <AntiInflammatoryAnalgesics
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  } else if (page === 'gastrointestinal') {
    currentPage = (
      <Gastrointestinal
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  } else if (page === 'cns') {
    currentPage = (
      <CnsPsychiatric
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  } else if (page === 'cardiovascular') {
    currentPage = (
      <CardiovascularLipidControl
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigateCns={() => setPage('cns')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  } else if (page === 'respiratory') {
    currentPage = (
      <RespiratoryAntiallergic
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigateCns={() => setPage('cns')}
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  } else if (page === 'dermatology') {
    currentPage = (
      <Dermatology
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateProducts={() => setPage('product')}
        onNavigateAntibiotics={() => setPage('antibiotics')}
        onNavigateAntiInflammatory={() => setPage('antiinflammatory')}
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigateCns={() => setPage('cns')}
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateContact={() => setPage('contact')}
        onNavigateFacility={() => setPage('facility')}
      />
    )
  }

  return (
    <div style={{ zoom: zoomLevel }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.995 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.995 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          layout
          className="overflow-x-hidden w-full max-w-full"
        >
          {currentPage}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
