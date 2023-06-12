import React from 'react'
import { twMerge } from "tailwind-merge";


const HeaderItem = ({
  className,
  children
}) => {
  return (
    <div className={twMerge("ml-3 text-base", className)}>
      {children}
    </div>
  )
}

export default HeaderItem
