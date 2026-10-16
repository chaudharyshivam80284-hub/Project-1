import React from 'react'
import Breadcrum from "../components/Breadcrum"
import Testimonial from '../components/Testimonial'

export default function TestimonialPage() {
    return (
        <>
            <Breadcrum title="Our Costomers Reviews" description={"Hear from our happy customers at Heritage Ally who trust our quality, service, and style. Discover real experiences and feedback that reflect our commitment to customer satisfaction."} />
            <Testimonial />
        </>
    )
}