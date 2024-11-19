import React from 'react'
import '../static/style/TemplateFiller.css'
import FileUploader from '../components/Template/FileUploader'
import TextInput from '../components/Template/TextInput'
import Button from '../components/Button'

const TemplateFiller = () => {
  return (
    <>
    <div className='file-page'>
        <FileUploader/>
        <TextInput/>
        <Button name="Далее"/>
    </div>
    </>
  )
}

export default TemplateFiller