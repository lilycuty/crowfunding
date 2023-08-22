import React, { Suspense } from 'react'
import Modal from 'react-modal'
import { Routes, Route } from 'react-router-dom'
const StartCampaignPage = React.lazy(() => import('./pages/StartCampaignPage'))
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))
const SignInPage = React.lazy(() => import('./pages/SignInPage'))
const ShippingPage = React.lazy(() => import('./pages/ShippingPage'))
const LayoutPayment = React.lazy(() => import('./layout/LayoutPayment'))
const LayoutDashboard = React.lazy(() => import('./layout/LayoutDashboard'))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'))
const CampaignView = React.lazy(() => import('./modules/campaign/CampaignView'))
const CampaignPage = React.lazy(() => import('./pages/CampaignPage'))

Modal.setAppElement('#root')
Modal.defaultStyles = {}

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path='/campaign'
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path='/start-campaign'
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path='/campaign/:slug'
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path='/checkout'
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path='/shipping-address'
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
