import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} font-paprika font-[400] text-[18px] text-pcolor`}>{text}</p>
  )
}

export default Paragraph