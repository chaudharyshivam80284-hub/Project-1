import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import AdminSidebar from '../../../components/Admin/AdminSidebar'

import TextValidators from '../../../FormValidators/TextValidators'


import { getFaq, createFaq } from "../../../Redux/ActionCreators/FaqActionCreators"
export default function AdminCreateFaqPage() {
    let [data, setData] = useState({
        question: '',
        answer: '',
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        question: "Question Field is Mendatory",
        answer: "Answer Field is Mendatory"
    })
    let [show, setShow] = useState(false)

    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = FaqStateData.find(x => x.question?.toLocaleLowerCase() === data.question?.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, 'question': "Faq Record With This Question Is Already Exist" })
                return
            }
            dispatch(createFaq({ ...data }))
            navigate("/admin/faq")
        }
    }

    useEffect(() => {
        (() => dispatch(getFaq()))()
    }, [FaqStateData.length])
    return (
        <>
            <div className="container my-3 admin">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Create Faq <Link to="/admin/faq"><i className='bi bi-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Question <span className='text-danger'>*</span></label>
                                    <input type="text" name="question" onChange={getInputData} placeholder='Faq Question' className={`form-control ${show && errorMessage.question ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.question ? <p className='text-danger'>{errorMessage.question}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Answer <span className='text-danger'>*</span></label>
                                    <textarea name="answer" rows={3} onChange={getInputData} placeholder='Answer' className={`form-control ${show && errorMessage.answer ? 'border-danger' : 'border-primary'}`} ></textarea>
                                    {show && errorMessage.answer ? <p className='text-danger'>{errorMessage.answer}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Status<span className='text-danger'>*</span></label>
                                    <select name="status" onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option value="0">Inctive</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className='btn btn-primary w-100'>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}