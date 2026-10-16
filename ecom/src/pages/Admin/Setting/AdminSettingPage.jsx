import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Bounce, ToastContainer, toast } from 'react-toastify';

import AdminSidebar from '../../../components/Admin/AdminSidebar'

import { getSetting, createSetting, updateSetting } from "../../../Redux/ActionCreators/SettingActionCreators"

var rtePrivacyPolicy;
var rteTermsAndCondition;
export default function AdminSettingPage() {
    var refdivPrivacyPolicy = useRef(null);
    var refdivTermsAndCondition = useRef(null);

    let [data, setData] = useState({
        siteName: "",
        map1: "",
        map2: "",
        address: "",
        email: "",
        phone: "",
        whatsapp: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        instagram: "",
        privacyPolicy: "",
        termsAndCondition: "",
    })
    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    function postData(e) {
        e.preventDefault()
        data.privacyPolicy = rtePrivacyPolicy.getHTMLCode()
        data.termsAndCondition = rteTermsAndCondition.getHTMLCode()
        setData(data)
        if (SettingStateData.length)
            dispatch(updateSetting({ ...data }))
        else
            dispatch(createSetting({ ...data }))

        toast("Setting Data Has Been Updated!!!")
    }

    useEffect(() => {
        (() => {
            rtePrivacyPolicy = new window.RichTextEditor(refdivPrivacyPolicy.current)
            rteTermsAndCondition = new window.RichTextEditor(refdivTermsAndCondition.current)
            rtePrivacyPolicy.setHTMLCode("")
            rteTermsAndCondition.setHTMLCode("")

            dispatch(getSetting())
            if (SettingStateData.length) {
                setData({ ...data, ...SettingStateData[0] })
                rtePrivacyPolicy.setHTMLCode(SettingStateData[0].privacyPolicy ?? "")
                rteTermsAndCondition.setHTMLCode(SettingStateData[0].termsAndCondition ?? "")

            }
        })()
    }, [SettingStateData.length])
    return (
        <>
            <div className="container my-3 admin">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Setting</h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label>SiteName</label>
                                    <input type="text" name="siteName" value={data.siteName} onChange={getInputData} className='form-control border border-primary' placeholder='Site Name' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Email</label>
                                    <input type="email" name="email" value={data.email} onChange={getInputData} className='form-control border border-primary' placeholder='Email Address' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" value={data.phone} onChange={getInputData} className='form-control border border-primary' placeholder='Phone Number' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Whatsapp</label>
                                    <input type="text" name="whatsapp" value={data.whatsapp} onChange={getInputData} className='form-control border border-primary' placeholder='Whatsapp Number' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Address</label>
                                    <textarea name="address" rows={2} value={data.address} onChange={getInputData} className='form-control border border-primary' placeholder='Address' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Map1</label>
                                    <input type='url' name="map1" value={data.map1} onChange={getInputData} className='form-control border border-primary' placeholder='Map1' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Map2</label>
                                    <input type='url' name="map2" value={data.map2} onChange={getInputData} className='form-control border border-primary' placeholder='Map2' />
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Facebook Profile Page URL</label>
                                    <input type='url' name="facebook" value={data.facebook} onChange={getInputData} className='form-control border border-primary' placeholder='Facebook Profile Page URL' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Youtube Profile Page URL</label>
                                    <input type='url' name="youtube" value={data.youtube} onChange={getInputData} className='form-control border border-primary' placeholder='Youtube Profile Page URL' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Linkedin Profile Page URL</label>
                                    <input type='url' name="linkedin" value={data.linkedin} onChange={getInputData} className='form-control border border-primary' placeholder='Linkedin Profile Page URL' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Twitter Profile Page URL</label>
                                    <input type='url' name="twitter" value={data.twitter} onChange={getInputData} className='form-control border border-primary' placeholder='Twitter Profile Page URL' />
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Instagram Profile Page URL</label>
                                    <input type='url' name="instagram" value={data.instagram} onChange={getInputData} className='form-control border border-primary' placeholder='Instagram Profile Page URL' />
                                </div>
                                <div className='col-12 mb-3'>
                                    <label>Privacy Policy</label>
                                    <div className='border border-primary rounded'>
                                        <div ref={refdivPrivacyPolicy}></div>
                                    </div>
                                </div>
                                <div className='col-12 mb-3'>
                                    <label>Terms and Condition</label>
                                    <div className='border border-primary rounded'>
                                        <div ref={refdivTermsAndCondition}></div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className='btn btn-primary w-100'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>
    )
}