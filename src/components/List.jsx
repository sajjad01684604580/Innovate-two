import React from 'react'

const List = ({text,href,className}) => {
  return (
    <li><a href={href} className={`${className} inline-block  text-lg font-opensans font-semibold hover:text-btncolor`}>{text}</a></li>
  )
}

export default List