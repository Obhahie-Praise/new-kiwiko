import CreateProjectForm from '@/components/create-projectpage/CreateProjectForm'
import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'

const CreateProjectPage = () => {
    
  return (
    <div className=''>
        <Spotlight fill='white' />
        <CreateProjectForm />
    </div>
  )
}

export default CreateProjectPage