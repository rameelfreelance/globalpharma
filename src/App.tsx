import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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

  let currentPage = (
    <Home
      onNavigateAbout={(section = 'about') => {
        setAboutSection(section)
        setPage('about')
      }}
      onNavigateContact={() => setPage('contact')}
      onNavigateCareers={() => setPage('careers')}
      onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
      onNavigateFacility={() => setPage('facility')}
      onNavigateProducts={() => setPage('product')}
    />
  )

  if (page === 'about') {
    currentPage = <AboutUs onNavigateHome={() => setPage('home')} onNavigateCareers={() => setPage('careers')} onNavigateContact={() => setPage('contact')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} initialSection={aboutSection} />
  } else if (page === 'contact') {
    currentPage = <ContactUs onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigateCareers={() => setPage('careers')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} />
  } else if (page === 'careers') {
    currentPage = <Careers onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigateContact={() => setPage('contact')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateFacility={() => setPage('facility')} onNavigateProducts={() => setPage('product')} />
  } else if (page === 'facility') {
    currentPage = <Facilities onNavigateHome={() => setPage('home')} onNavigateAbout={() => setPage('about')} onNavigatePharmacovigilance={() => setPage('pharmacovigilance')} onNavigateCareers={() => setPage('careers')} onNavigateContact={() => setPage('contact')} onNavigateProducts={() => setPage('product')} />
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
        onNavigateAbout={() => setPage('about')}
        onNavigateContact={() => setPage('contact')}
        onNavigateCareers={() => setPage('careers')}
        onNavigatePharmacovigilance={() => setPage('pharmacovigilance')}
        onNavigateFacility={() => setPage('facility')}
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
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={page}
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ type: 'spring', stiffness: 150, damping: 24 }}
        layout
        className="overflow-x-hidden w-full max-w-full"
      >
        {currentPage}
      </motion.div>
    </AnimatePresence>
  )
}
