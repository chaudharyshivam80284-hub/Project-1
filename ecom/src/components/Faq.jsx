import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFaq } from "../Redux/ActionCreators/FaqActionCreators"
export default function Faq() {
    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getFaq())
        })()
    }, [FaqStateData.length])
    return (
        <section id="faq" className="faq section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="accordion" id="accordionExample">
                    {
                        FaqStateData.filter(x => x.status).map((item, index) => {
                            return <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls="collapseOne">
                                        {item.question}
                                    </button>
                                </h2>
                                <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}