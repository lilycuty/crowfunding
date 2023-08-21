import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutDashboard from './layout/LayoutDashboard'
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))
const SignInPage = React.lazy(() => import('./pages/SignInPage'))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))
const CampaignPage = React.lazy(() => import('./pages/CampaignPage'))
const StartCampaignPage = React.lazy(() => import('./pages/StartCampaignPage'))

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
        </Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
