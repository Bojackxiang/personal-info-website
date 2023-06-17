import React from 'react'
import { twMerge } from "tailwind-merge";


const HeaderItem = ({
  className,
  children,
  onClick
}) => {
  const handleMenuItemClick = () => {
    onClick && onClick()
  }

  return (
    <div className={twMerge("ml-3 text-base text-white", className)} onClick={handleMenuItemClick}>
      {children}
    </div>
  )
}

export default HeaderItem
