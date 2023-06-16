import Header from '@/components/Header'
import React from 'react'

const TechStackLayout = ({children}) => {
  return (
    <div className='bg-neutral-100 h-full '>
      <Header />
      tech stack
      {children}
    </div>
  )
}

export default TechStackLayout