import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
export default function Breadcrum({ title, description }) {
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
        <div className="page-title">
            <div className="heading">
                <div className="container">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="heading-title">{title}</h1>
                            <p className="mb-0">
                                {description.replaceAll("Heritage Ally",settingData.siteName)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li className="current">{title}</li>
                    </ol>
                </div>
            </nav>
        </div>
    )
}