import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))
const SignInPage = React.lazy(() => import('./pages/SignInPage'))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))
const CampaignPage = React.lazy(() => import('./pages/CampaignPage'))
const StartCampaignPage = React.lazy(() => import('./pages/StartCampaignPage'))

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
        <Route path='/campaign' element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path='/start-campaign'
          element={<StartCampaignPage></StartCampaignPage>}
        ></Route>
      </Routes>
    </Suspense>
  )
}

export default App
