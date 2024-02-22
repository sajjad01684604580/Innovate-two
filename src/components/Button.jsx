import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className} py-[14px] px-[28px] bg-btncolor text-white rounded-full text-[18px] font-opensans font-semibold`}>{text}</button>
  )
}

export default Button