import React from 'react'
import Breadcrum from '../components/Breadcrum'
import Feature from '../components/Feature'
import Faq from '../components/Faq'

export default function FeaturePage() {
  return (
    <>
        <Breadcrum title="Our Features" description="Experience the best of Heritage Ally with premium quality products, reliable service, secure payments, and fast delivery—designed to provide you with a seamless and satisfying shopping experience every time."/>
        <Feature/>
        <Faq/>
    </>
  )
}