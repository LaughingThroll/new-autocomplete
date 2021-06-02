import React from 'react'
import classnames from 'classnames'

export interface DropdownContentProps {
  text?: string
  showMore?: boolean
}

const DropdownContent: React.FC<DropdownContentProps> = ({ text = '', showMore }) => {
  return (
    <div className={`dropdown-content ${classnames({ "dropdown-content--show-more": showMore }) }`}>
      <div className="dropdown-content__text">{text}</div> 
    </div>
  )
}

export default DropdownContent