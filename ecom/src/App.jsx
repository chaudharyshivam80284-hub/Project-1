import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import FeaturePage from './pages/FeaturePage'
import FaqPage from './pages/FaqPage'
import ContactUsPage from './pages/ContactUsPage'
import ErrorPage from './pages/ErrorPage'
import PrivacyPolicy from './pages/Policies/PrivacyPolicy'
import TermsCondition from './pages/Policies/TermsCondition'
import TestimonialPage from './pages/TestimonialPage'


import AdminHomePage from './pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './pages/Admin/Maincategory/AdminMaincategoryPage'
import AdminCreateMaincategoryPage from './pages/Admin/Maincategory/AdminCreateMaincategoryPage'
import AdminUpdateMaincategoryPage from './pages/Admin/Maincategory/AdminUpdateMaincategoryPage'

import AdminSubcategoryPage from './pages/Admin/Subcategory/AdminSubcategoryPage'
import AdminCreateSubcategoryPage from './pages/Admin/Subcategory/AdminCreateSubcategoryPage'
import AdminUpdateSubcategoryPage from './pages/Admin/Subcategory/AdminUpdateSubcategoryPage'

import AdminBrandPage from './pages/Admin/Brand/AdminBrandPage'
import AdminCreateBrandPage from './pages/Admin/Brand/AdminCreateBrandPage'
import AdminUpdateBrandPage from './pages/Admin/Brand/AdminUpdateBrandPage'

import AdminFeaturePage from './pages/Admin/Feature/AdminFeaturePage'
import AdminCreateFeaturePage from './pages/Admin/Feature/AdminCreateFeaturePage'
import AdminUpdateFeaturePage from './pages/Admin/Feature/AdminUpdateFeaturePage'

import AdminFaqPage from './pages/Admin/Faq/AdminFaqPage'
import AdminCreateFaqPage from './pages/Admin/Faq/AdminCreateFaqPage'
import AdminUpdateFaqPage from './pages/Admin/Faq/AdminUpdateFaqPage'

import AdminSettingPage from './pages/Admin/Setting/AdminSettingPage'

import AdminProductPage from './pages/Admin/Product/AdminProductPage'
import AdminCreateProductPage from './pages/Admin/Product/AdminCreateProductPage'
import AdminUpdateProductPage from './pages/Admin/Product/AdminUpdateProductPage'
import Product from './pages/Product'
import LoginPage from './pages/User/LoginPage'
import SignupPage from './pages/User/SignupPage'
import ProfilePage from './pages/User/ProfilePage'
import CartPage from './pages/User/CartPage'
import CheckoutPage from './pages/User/CheckoutPage'
import OrderConfirmation from './pages/User/OrderConfirmation'
import AdminNewsletterPage from './pages/Admin/Newsletter/AdminNewsletterPage'
import AdminContactUsPage from './pages/Admin/ContactUs/AdminContactUsPage'
import AdminContactUsShowPage from './pages/Admin/ContactUs/AdminContactUsShowPage'
import AdminCheckoutPage from './pages/Admin/Checkout/AdminCheckoutPage'
import AdminCheckoutShowPage from './pages/Admin/Checkout/AdminCheckoutShowPage'
import AdminUserPage from './pages/Admin/User/AdminUserPage'
import AdminCreateUserPage from './pages/Admin/User/AdminCreateUserPage'
import AdminUpdateUserPage from './pages/Admin/User/AdminUpdateUserPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/feature' element={<FeaturePage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/testimonial' element={<TestimonialPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/tc' element={<TermsCondition />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

          {/* User Routes */}
          {localStorage.getItem("login") ?
            <>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/order-confirmation' element={<OrderConfirmation />} />

            </> : null}

          {/* Admin Routes */}
          {localStorage.getItem("login") && localStorage.getItem("role") !== "Buyer" ?
            <>
              <Route path='/admin' element={<AdminHomePage />} />

              <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
              <Route path='/admin/maincategory/create' element={<AdminCreateMaincategoryPage />} />
              <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategoryPage />} />

              <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
              <Route path='/admin/subcategory/create' element={<AdminCreateSubcategoryPage />} />
              <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategoryPage />} />

              <Route path='/admin/brand' element={<AdminBrandPage />} />
              <Route path='/admin/brand/create' element={<AdminCreateBrandPage />} />
              <Route path='/admin/brand/update/:id' element={<AdminUpdateBrandPage />} />

              <Route path='/admin/feature' element={<AdminFeaturePage />} />
              <Route path='/admin/feature/create' element={<AdminCreateFeaturePage />} />
              <Route path='/admin/feature/update/:id' element={<AdminUpdateFeaturePage />} />

              <Route path='/admin/faq' element={<AdminFaqPage />} />
              <Route path='/admin/faq/create' element={<AdminCreateFaqPage />} />
              <Route path='/admin/faq/update/:id' element={<AdminUpdateFaqPage />} />

              <Route path='/admin/product' element={<AdminProductPage />} />
              <Route path='/admin/product/create' element={<AdminCreateProductPage />} />
              <Route path='/admin/product/update/:id' element={<AdminUpdateProductPage />} />

              <Route path='/admin/setting' element={<AdminSettingPage />} />

              <Route path='/admin/newsletter' element={<AdminNewsletterPage />} />

              <Route path='/admin/contactus' element={<AdminContactUsPage />} />
              <Route path='/admin/contactus/show/:id' element={<AdminContactUsShowPage />} />


              <Route path='/admin/checkout' element={<AdminCheckoutPage />} />
              <Route path='/admin/checkout/show/:id' element={<AdminCheckoutShowPage />} />

              {localStorage.getItem("role")=== "Super Admin" ?
                <>
                  <Route path='/admin/user' element={<AdminUserPage />} />
                  <Route path='/admin/user/create' element={<AdminCreateUserPage />} />
                  <Route path='/admin/user/update/:id' element={<AdminUpdateUserPage />} />
                </> : null
              }
            </> : null}

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}