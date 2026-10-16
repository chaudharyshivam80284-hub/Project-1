import React from 'react'
import Breadcrum from '../components/Breadcrum'
import About from '../components/About'
import Feature from '../components/Feature'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'

export default function AboutPage() {
    return (
        <>
            <Breadcrum title="About Us" description ="Discover the story behind Heritage Ally, where timeless tradition meets modern style. Explore our journey, values, and passion for delivering quality products with trust and authenticity."/>
            <About/>
            <Feature/>
            <Testimonial/>
            <Faq/>
        </>
    )
}