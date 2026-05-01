import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  parseAndApplyHash,
  syncHash,
  type AboutSection,
  type FacilitySection,
  type Page,
} from './utils/navigation'
import { bootstrapScrollReveal } from './utils/animations'
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
  const [page, setPage] = useState<Page>('home')
  const [aboutSection, setAboutSection] = useState<AboutSection>('about')
  const [facilitySection, setFacilitySection] = useState<FacilitySection>('production')

  useEffect(() => {
    const handleHashChange = () =>
      parseAndApplyHash({ setPage, setAboutSection, setFacilitySection })

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    syncHash(page, aboutSection, facilitySection)
  }, [page, aboutSection, facilitySection])

  // Re-run scroll observer on every page change (after DOM settles)
  useEffect(() => {
    return bootstrapScrollReveal()
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
    currentPage = <ContactUs onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigateCareers={() => setPage('careers')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} onNavigateAntibiotics={() => setPage('antibiotics')} onNavigateAntiInflammatory={() => setPage('antiinflammatory')} onNavigateGastrointestinal={() => setPage('gastrointestinal')} onNavigateCns={() => setPage('cns')} onNavigateCardiovascular={() => setPage('cardiovascular')} onNavigateRespiratory={() => setPage('respiratory')} onNavigateDermatology={() => setPage('dermatology')} />
  } else if (page === 'careers') {
    currentPage = <Careers onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigateContact={() => setPage('contact')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} onNavigateAntibiotics={() => setPage('antibiotics')} onNavigateAntiInflammatory={() => setPage('antiinflammatory')} onNavigateGastrointestinal={() => setPage('gastrointestinal')} onNavigateCns={() => setPage('cns')} onNavigateCardiovascular={() => setPage('cardiovascular')} onNavigateRespiratory={() => setPage('respiratory')} onNavigateDermatology={() => setPage('dermatology')} />
  } else if (page === 'facility') {
    currentPage = <Facilities onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateCareers={() => setPage('careers')} onNavigateContact={() => setPage('contact')} onNavigateProducts={() => setPage('product')} onNavigateAntibiotics={() => setPage('antibiotics')} onNavigateAntiInflammatory={() => setPage('antiinflammatory')} onNavigateGastrointestinal={() => setPage('gastrointestinal')} onNavigateCns={() => setPage('cns')} onNavigateCardiovascular={() => setPage('cardiovascular')} onNavigateRespiratory={() => setPage('respiratory')} onNavigateDermatology={() => setPage('dermatology')} initialSection={facilitySection} />
  } else if (page === 'pharmacovigilance') {
    currentPage = (
      <Pharmacovigilance
        onNavigateHome={() => setPage('home')}
        onNavigateAbout={() => setPage('about')}
        onNavigateContact={() => setPage('contact')}
        onNavigateCareers={() => setPage('careers')}
        onNavigateFacility={() => setPage('facility')}
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
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigateCns={() => setPage('cns')}
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigateDermatology={() => setPage('dermatology')}
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
        onNavigateGastrointestinal={() => setPage('gastrointestinal')}
        onNavigateCns={() => setPage('cns')}
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigateDermatology={() => setPage('dermatology')}
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
        onNavigateCns={() => setPage('cns')}
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigateDermatology={() => setPage('dermatology')}
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
        onNavigateCardiovascular={() => setPage('cardiovascular')}
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigateDermatology={() => setPage('dermatology')}
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
        onNavigateRespiratory={() => setPage('respiratory')}
        onNavigateDermatology={() => setPage('dermatology')}
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
        onNavigateDermatology={() => setPage('dermatology')}
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
    <div className="overflow-x-hidden w-full min-h-screen bg-white">
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
