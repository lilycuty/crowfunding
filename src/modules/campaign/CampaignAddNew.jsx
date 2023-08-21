/* eslint-disable no-unused-vars */
import ReactQuill, { Quill } from 'react-quill'
import ImageUploader from 'quill-image-uploader'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Label } from 'src/components/label'
import { Input, TextArea } from 'src/components/input'
import { Field, FieldRow } from 'src/components/field'
import { Dropdown } from 'src/components/dropdown'
import 'react-quill/dist/quill.snow.css'
import { Button } from 'src/components/button'
Quill.register('modules/imageUploader', ImageUploader)

const CampaignAddNew = () => {
  const [content, setContent] = useState('')

  const { handleSubmit, control } = useForm()

  const handleAddNewCampaign = (values) => {
    console.log('handleAddNewCampaign ~ values', values)
  }

  //useMemo không bị re-render khi giá trị thay đổi
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image']
      ],
      imageUploader: {}
    }),
    []
  )
  return (
    <div className='bg-white rounded-xl py-10 px-[66px]'>
      <div className='text-center'>
        <h1 className='py-4 px-[60px] bg-text4 bg-opacity-10 rounded-xl font-bold text-[25px] inline-block mb-10'>
          Start a Campaign🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FieldRow>
            <Field>
              <Label htmlFor='title'>Campaign Title *</Label>
              <Input
                control={control}
                placeholder='Write a titel'
                name='title'
              ></Input>
            </Field>
            <Field>
              <Label>Select a category *</Label>
              {/* Dropdown */}
              <Dropdown>
                <Dropdown.Select placeholder='Select a category'></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </Field>
          </FieldRow>

          <Field>
            <Label htmlFor='short_description'>Short Description *</Label>
            <TextArea
              name='short_description'
              control={control}
              placeholder='Write a short description....'
            ></TextArea>
          </Field>

          <Field>
            <Label>Story *</Label>
            <ReactQuill
              modules={modules}
              theme='snow'
              value={content}
              onChange={setContent}
              placeholder='Write your story......'
            />
          </Field>

          <FieldRow>
            <Field>
              <Label htmlFor='goal'>Goal *</Label>
              <Input
                control={control}
                placeholder='$0.00 USD'
                name='goal'
              ></Input>
            </Field>
            <Field>
              <Label htmlFor='amount'>Raised Amount *</Label>
              <Input
                control={control}
                placeholder='$0.00 USD'
                name='amount'
              ></Input>
            </Field>
          </FieldRow>

          <FieldRow>
            <Field>
              <Label htmlFor='prefilled'>Amount Prefilled</Label>
              <Input
                control={control}
                placeholder='Amount Prefilled'
                name='prefilled'
              ></Input>
              <p className='text-text3 text-sm text-left'>
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </Field>
            <Field>
              <Label htmlFor='video'>Video</Label>
              <Input control={control} placeholder='Video' name='video'></Input>
              <p className='text-text3 text-sm text-left'>
                Place Youtube or Vimeo Video URL
              </p>
            </Field>
          </FieldRow>

          <FieldRow>
            <Field>
              <Label>Campaign End Method</Label>
              {/* Dropdown */}
              <Dropdown>
                <Dropdown.Select placeholder='Select one'></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </Field>
            <Field>
              <Label>Counrty</Label>
              {/* Dropdown */}
              <Dropdown>
                <Dropdown.Select placeholder='Select a counrty'></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                  <Dropdown.Option>Fullstack</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </Field>
          </FieldRow>

          <FieldRow>
            <Field>
              <Label htmlFor='startDate'>Start Date</Label>
              <Input
                control={control}
                placeholder='Start Date'
                name='startDate'
              ></Input>
            </Field>
            <Field>
              <Label htmlFor='endDate'>End Date</Label>
              <Input
                control={control}
                placeholder='End Date'
                name='endDate'
              ></Input>
            </Field>
          </FieldRow>

          <div className='text-center'>
            <Button
              type='button'
              kind='primary'
              className='mx-auto mt-10 px-10'
            >
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CampaignAddNew
