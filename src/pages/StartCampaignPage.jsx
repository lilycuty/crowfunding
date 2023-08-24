import { useEffect } from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CampaignAddNew from 'src/modules/campaign/CampaignAddNew'

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth)
  console.log('StartCampaignPage ~ user', user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user || !user.email) {
      navigate('/login')
    }
  }, [user])
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  )
}

export default StartCampaignPage
