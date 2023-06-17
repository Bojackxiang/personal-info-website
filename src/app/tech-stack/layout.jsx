import Header from '@/components/header/Header'
import React from 'react'

const TechStackLayout = ({children}) => {
  return (
    <div className='bg-neutral-100 h-full '>
      
      tech stack
      {children}
    </div>
  )
}

export default TechStackLayout