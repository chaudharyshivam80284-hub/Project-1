import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import AdminSidebar from '../../../components/Admin/AdminSidebar'

import TextValidators from '../../../FormValidators/TextValidators'
import ImageValidators from '../../../FormValidators/ImageValidators'


import { getMaincategory, createMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreators"
export default function AdminCreateMaincategoryPage() {
    let [data, setData] = useState({
        name: '',
        pic: '',
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name Field is Mendatory",
        pic: "Pic Field is Mendatory"
    })
    let [show, setShow] = useState(false)

    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? "maincategory/" + e.target.files[0].name : e.target.value
        // let value = name === "pic" ? e.target.files[0] : e.target.value

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidators(e) : TextValidators(e) })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = MaincategoryStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, 'name': "Maincategory With This Name Is Already Exist" })
                return
            }
            dispatch(createMaincategory({ ...data }))

            // let formData = new FormData()
            // formData.append("name",data.name)
            // formData.append("pic",data.pic)
            // formData.append("status",data.status)
            // dispatch(createMaincategory(formData))

            navigate("/admin/maincategory")
        }
    }

    useEffect(() => {
        (() => dispatch(getMaincategory()))()
    }, [MaincategoryStateData.length])
    return (
        <>
            <div className="container my-3 admin">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Create Maincategory <Link to="/admin/maincategory"><i className='bi bi-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name <span className='text-danger'>*</span></label>
                                    <input type="text" name="name" onChange={getInputData} placeholder='Maincategory Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Pic<span className='text-danger'>*</span></label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.pic ? <p className='text-danger'>{errorMessage.pic}</p> : null}
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