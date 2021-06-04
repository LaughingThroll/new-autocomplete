import React from 'react'
import classnames from 'classnames'
import './dropdownContent.scss'


export interface DropdownContentProps {
  text: string
  showMore?: boolean
  classNames?: string 
}

const DropdownContent: React.FC<DropdownContentProps> = ({ text, showMore, classNames = '' }) => {
  const classNamesWithSpace = ' ' + classNames
  
  return (
    <div className={`dropdown-content ${classnames({ "dropdown-content--show-more": showMore }) + classNamesWithSpace }`}>
      <div className="dropdown-content__text">{text}</div> 
    </div>
  )
}

export default DropdownContent