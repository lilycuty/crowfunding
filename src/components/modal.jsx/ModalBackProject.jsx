import ReactModal from 'react-modal'
import { Button } from '../button'
import CampaignPerk from 'src/modules/campaign/CampaignPerk'

const ModalBackProject = () => {
  return (
    <ReactModal
      isOpen={false}
      overlayClassName='model-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center'
      className='modal-content w-full max-w-[521px] bg-white rounded-2xl p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden'
    >
      <button className='absolute z-10 right-10 top-[10px] text-text1 cursor-pointer w-11 h-11 flex items-center justify-center'>
        X
      </button>
      <h2 className='font-bold text-[25px] mb-10 text-center'>
        Back this project
      </h2>
      <p className='text-sm mb-3'>Enter the contribute amount</p>
      <input
        placeholder='$10'
        className='text-lg font-medium py-2 px-5 border border-strock w-full rounded-md'
        name='amount'
        type='text'
      />
      <p className='text-text3 my-5 text-sm'>
        Contribution are not associatied with perks
      </p>
      <Button kind='primary' type='button'>
        Continue
      </Button>
      <div className='mt-[60px]'></div>
      <CampaignPerk></CampaignPerk>
    </ReactModal>
  )
}

export default ModalBackProject
