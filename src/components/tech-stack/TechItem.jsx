import React from 'react'

const TechItem = ({
  children,
  text
}) => {
  return (
    <div className='m-4'>
        {children}
      <h4 className='text-2xl text-center mt-1'>{text}</h4>
    </div>
  )
}

export default TechItem
