import { Fragment } from 'react'
import Gap from 'src/components/common/Gap'
import Heading from 'src/components/common/Heading'
import CampaignFeature from 'src/modules/campaign/CampaignFeature'
import CampaignGrid from 'src/modules/campaign/CampaignGrid'
import CampaignItem from 'src/modules/campaign/CampaignItem'
import { v4 } from 'uuid'

const DashboardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>

      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>

      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  )
}

export default DashboardPage
