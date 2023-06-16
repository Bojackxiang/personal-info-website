import Image from 'next/image'
import React from 'react'


function EducationImage({
  image
}) {
  return (
    <div className='flex lg:flex-1 lg:mr-10 lg:justify-end justify-center'>
      <Image className="rounded-full lg:rounded-lg" src={image} width={100} height={100} alt="education-image"/>
    </div>
  )
}

export default EducationImage
