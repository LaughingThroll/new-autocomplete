import React from 'react'
import { Label, LabelProps } from '../../index'
import './dropdownContentLabel.scss'


export interface DropdownContentLabelProps extends LabelProps {
  description: string
  classNames?: string
}

const DropdownContentLabel: React.FC<DropdownContentLabelProps> = ({ description, text, active, classNames = '' }) => {
  return (
    <div className={`dropdown-content dropdown-content--label ${classNames}`}>
      <Label text={text} active={active} />
      <div className="dropdown-content__text">{description}</div> 
    </div>
  )
}

export default DropdownContentLabel
