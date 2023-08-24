import React, { Suspense } from 'react'
import { useEffect } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { authRefreshToken, authUpdateUser } from './store/auth/auth-slice'
import { getToken } from './utils/auth'
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
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken()
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token
        })
      )
    } else {
      const { refresh_token } = getToken()
      dispatch(authRefreshToken(refresh_token))
    }
  }, [user])
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
        <Route path='/register' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/login' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
