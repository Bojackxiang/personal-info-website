import Header from '@/components/Header'
import React from 'react'

const ProjectLayout = ({children}) => {
  return (
    <div className='bg-neutral-100 h-full '>
      <Header />
      {children}
    </div>
  )
}

export default ProjectLayout