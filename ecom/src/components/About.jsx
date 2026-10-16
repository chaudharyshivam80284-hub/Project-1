import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
export default function About() {
    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    let [settingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
    })

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                setSettingData({ siteName: SettingStateData[0].siteName || settingData.siteName })
            }
        })()
    }, [SettingStateData.length])
    return (
        <section id="home-about" className="home-about section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay="200">
                        <div className="about-content">
                            <h2 className="section-heading">About {settingData.siteName}</h2>
                            <p className="lead-text text-justify">At {settingData.siteName}, we believe that true style lies in the perfect blend of tradition and modern living. Our journey began with a vision to create an eCommerce platform that offers more than just products—it delivers experiences rooted in quality, authenticity, and trust. Every item in our collection is thoughtfully curated to reflect timeless design and everyday functionality, ensuring our customers receive value in every purchase. We take pride in building a brand that stands for reliability and customer satisfaction, where each product tells a story of craftsmanship and care. With a focus on detail and consistency, {settingData.siteName} continues to grow as a trusted destination for shoppers seeking both elegance and practicality in their lifestyle choices.</p>

                            <p className='text-justify'>Our mission is to redefine online shopping by making it simple, secure, and enjoyable for everyone. At {settingData.siteName}, we are committed to providing a seamless experience through a user-friendly platform, secure payment options, and dependable delivery services. We continuously work towards expanding our product range while maintaining strict quality standards, ensuring that every customer finds something that suits their needs and preferences. Our dedicated support team is always ready to assist, making sure your journey with us is smooth from start to finish. As we move forward, we aim to build lasting relationships with our customers by delivering excellence, innovation, and unmatched service in every interaction.</p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                        <div className="about-visual">
                            <div className="main-image">
                                <img src="/images/banner3.jpg" alt="Heritage Ally product collection" className="img-fluid mb-3" />
                                <img src="/images/banner6.jpg" alt="Featured products from Heritage Ally" className="img-fluid" />
                            </div>
                            <div className="floating-card">
                                <div className="card-content">
                                    <div className="icon">
                                        <i className="bi bi-headphones"></i>
                                    </div>
                                    <div className="card-text">
                                        <h4>24/7 Customer Care</h4>
                                        <p>Always here when you need us most</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-badge">
                                <div className="badge-content">
                                    <span className="years">100+</span>
                                    <span className="text">Top Brands</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}