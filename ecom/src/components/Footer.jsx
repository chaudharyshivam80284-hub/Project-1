import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"
import { getNewsletter, createNewsletter } from "../Redux/ActionCreators/NewsletterActionCreators"
export default function Footer() {
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")

  let SettingStateData = useSelector(state => state.SettingStateData)
  let NewsletterStateData = useSelector(state => state.NewsletterStateData)

  let dispatch = useDispatch()

  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    map1: import.meta.env.VITE_APP_MAP1,
    address: import.meta.env.VITE_APP_ADDRESS,
    email: import.meta.env.VITE_APP_EMAIL,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    facebook: import.meta.env.VITE_APP_FACEBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    instagram: import.meta.env.VITE_APP_INSTAGRAM,
    youtube: import.meta.env.VITE_APP_YOUTUBE
  })

  function postData(e) {
    e.preventDefault()
    if (email === "")
      setMessage("Please Enter a Valid Email Address")
    else {
      if (NewsletterStateData.find(x => x.email?.toLowerCase() === email.toLocaleLowerCase()))
        setMessage("This Email Address is Already Registered With US")
      else {
        dispatch(createNewsletter({ email: email, status: true }))
        setMessage("Thank to Subscribe Our Newsletter Service")
        setEmail("")
      }
    }
  }

  useEffect(() => {
    (() => {
      dispatch(getSetting())
      if (SettingStateData.length) {
        let data = []
        Object.keys(settingData).forEach((x => {
          data.push([x, SettingStateData[0][x] ? SettingStateData[0][x] : settingData[x]])
        }))
        setSettingData(Object.fromEntries(data))
      }
    })()
  }, [SettingStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getNewsletter())
    })()
  }, [NewsletterStateData.length])
  const footerStyles = `
    .heritage-footer {
      background: #0d2240;
      color: #ffffff;
      position: relative;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .heritage-footer .footer-upper {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 3rem 0 2.25rem;
    }

    .heritage-footer .site-title {
      display: inline-block;
      font-size: clamp(1.3rem, 2vw, 2rem);
      font-weight: 700;
      color: #ffffff;
      text-decoration: none;
      margin-bottom: 1rem;
    }

    .heritage-footer .site-title:hover,
    .heritage-footer .footer-link:hover,
    .heritage-footer .contact-link:hover,
    .heritage-footer .social-link:hover,
    .heritage-footer .bottom-link:hover {
      color: #dfeaff !important;
      text-decoration: none;
    }

    .heritage-footer .footer-copy {
      color: rgba(255, 255, 255, 0.86);
      font-size: 1.02rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      max-width: 520px;
    }

    .heritage-footer .contact-list {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-top: 1rem;
    }

    .heritage-footer .contact-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 0.98rem;
      line-height: 1.5;
    }

    .heritage-footer .contact-icon {
      width: 22px;
      min-width: 22px;
      color: #ffffff;
      opacity: 0.9;
    }

    .heritage-footer .footer-column h6 {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .heritage-footer .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .heritage-footer .footer-link,
    .heritage-footer .bottom-link {
      color: rgba(255, 255, 255, 0.82);
      text-decoration: none;
      font-size: 0.98rem;
      transition: 0.2s ease;
    }

    .heritage-footer .newsletter-box {
      width: 100%;
    }

    .heritage-footer .newsletter-copy {
      color: rgba(255, 255, 255, 0.82);
      line-height: 1.7;
      font-size: 0.98rem;
      margin: 0 0 1.2rem;
    }

    .heritage-footer .newsletter-form {
      display: flex;
      align-items: stretch;
      border-radius: 0.9rem;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.18);
      max-width: 100%;
    }

    .heritage-footer .heritage-input {
      background: rgba(255, 255, 255, 0.96);
      border: none;
      border-radius: 0;
      min-height: 52px;
      padding: 0.9rem 1rem;
      color: #1e2b39;
      font-size: 0.96rem;
      flex: 1;
    }

    .heritage-footer .heritage-input::placeholder {
      color: #6b7280;
    }

    .heritage-footer .heritage-input:focus {
      box-shadow: none;
      border: none;
      background: #ffffff;
    }

    .heritage-footer .heritage-btn {
      min-width: 160px;
      background: #0f172a;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-weight: 600;
      padding: 0.9rem 1.4rem;
      transition: 0.2s ease;
    }

    .heritage-footer .heritage-btn:hover {
      background: #111827;
      color: #ffffff;
    }

    .heritage-footer .footer-message {
      color: #dbeafe;
      font-size: 0.85rem;
      margin-top: 0.8rem;
      margin-bottom: 0;
    }

    .heritage-footer .social-links {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      flex-wrap: wrap;
      margin-top: 1.4rem;
    }

    .heritage-footer .social-link {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      text-decoration: none;
      transition: 0.2s ease;
    }

    .heritage-footer .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .heritage-footer .footer-bottom {
      padding: 1rem 0;
      background: rgba(9, 19, 36, 0.6);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .heritage-footer .bottom-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .heritage-footer .bottom-text,
    .heritage-footer .bottom-text span {
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
      font-size: 0.95rem;
    }

    .heritage-footer .bottom-links {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .heritage-footer .scroll-top {
      position: absolute;
      right: 1.6rem;
      bottom: 1rem;
      width: 42px;
      height: 42px;
      border: none;
      border-radius: 50%;
      background: #1d8fe7;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 18px rgba(29, 143, 231, 0.4);
      cursor: pointer;
      transition: transform 0.2s ease;
      z-index: 10;
    }

    .heritage-footer .scroll-top:hover {
      transform: translateY(-2px);
    }

    @media (max-width: 991.98px) {
      .heritage-footer .footer-upper {
        padding-top: 2.5rem;
      }

      .heritage-footer .bottom-row {
        justify-content: center;
        text-align: center;
      }

      .heritage-footer .bottom-links {
        justify-content: center;
      }
    }

    @media (max-width: 767.98px) {
      .heritage-footer .newsletter-form {
        flex-direction: column;
        border-radius: 0.8rem;
      }

      .heritage-footer .heritage-btn {
        width: 100%;
        min-width: 100%;
      }

      .heritage-footer .scroll-top {
        right: 1rem;
      }
    }
  `;

  return (
    <>
      <style>{footerStyles}</style>
      <footer id="footer" className="heritage-footer">
        <div className="container footer-upper">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="footer-column">
                <Link to="/" className="site-title">{settingData.siteName}</Link>
                <p className="footer-copy">
                  Heritage Ally is your trusted destination for quality products that blend tradition with modern style,
                  offering a seamless shopping experience with reliability, authenticity, and customer satisfaction at its core.
                </p>

                <div className="contact-list">
                  <Link to={settingData.map1} target="_blank" className="contact-link">
                    <i className="bi bi-geo-alt contact-icon"></i>
                    <span>{settingData.address}</span>
                  </Link>
                  <Link to={`mailto:${settingData.email}`} target="_blank" className="contact-link">
                    <i className="bi bi-envelope contact-icon"></i>
                    <span>{settingData.email}</span>
                  </Link>
                  <Link to={`tel:${settingData.phone}`} target="_blank" className="contact-link">
                    <i className="bi bi-telephone contact-icon"></i>
                    <span>{settingData.phone}</span>
                  </Link>
                  <Link to={`https://wa.me/${settingData.whatsapp}`} target="_blank" className="contact-link">
                    <i className="bi bi-whatsapp contact-icon"></i>
                    <span>{settingData.whatsapp}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <div className="footer-column">
                <h6>Quick Links</h6>
                <nav className="footer-nav">
                  <Link to="/" className="footer-link">Home</Link>
                  <Link to="/about" className="footer-link">About</Link>
                  <Link to="/shop" className="footer-link">Shop</Link>
                  <Link to="/feature" className="footer-link">Features</Link>
                  <Link to="/faq" className="footer-link">Faq</Link>
                </nav>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-column">
                <h6>Important Links</h6>
                <nav className="footer-nav">
                  <Link to="/testimonial" className="footer-link">Testimonials</Link>
                  <Link to="/contactus" className="footer-link">Contact Us</Link>
                  <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                  <Link to="/tc" className="footer-link">Term and Conditions</Link>
                </nav>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <div className="footer-column">
                <h6>Newsletter</h6>
                <p className="newsletter-copy">
                  Subscribe to the Heritage Ally newsletter to stay updated with the latest arrivals, exclusive offers,
                  and special discounts.
                </p>
                <div className="newsletter-box">
                  <form onSubmit={postData} className="newsletter-form">
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter Your Email Address"
                      className="form-control heritage-input"
                    />
                    <button type="submit" className="btn heritage-btn">Subscribe</button>
                  </form>
                  {message ? <p className="footer-message">{message}</p> : null}
                </div>

                <div className="social-links">
                  <Link to={settingData.facebook} target="_blank" className="social-link"><i className="bi bi-facebook"></i></Link>
                  <Link to={settingData.twitter} target="_blank" className="social-link"><i className="bi bi-twitter-x"></i></Link>
                  <Link to={settingData.instagram} target="_blank" className="social-link"><i className="bi bi-instagram"></i></Link>
                  <Link to={settingData.linkedin} target="_blank" className="social-link"><i className="bi bi-linkedin"></i></Link>
                  <Link to={settingData.youtube} target="_blank" className="social-link"><i className="bi bi-youtube"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container bottom-row">
            <p className="bottom-text">
              © <span>{settingData.siteName}</span>. All rights reserved.
            </p>

            <div className="bottom-links">
              <Link to="/" className="bottom-link">Home</Link>
              <Link to="/about" className="bottom-link">About</Link>
              <Link to="/shop" className="bottom-link">Shop</Link>
              <Link to="/feature" className="bottom-link">Features</Link>
              <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link>
              <Link to="/tc" className="bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>

        <button type="button" className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          <i className="bi bi-arrow-up"></i>
        </button>
      </footer>
    </>
  )
}