import React from 'react'
import { Label, LabelProps } from '../../common'
import './dropdownContentLabel.scss'

export interface DropdownContentLabelProps extends LabelProps {
  classNames?: string
  labelText: string
}

const DropdownContentLabel: React.FC<DropdownContentLabelProps> = ({ labelText, text, active, classNames = '' }) => {
  return (
    <div className={`dropdown-content dropdown-content--label ${classNames}`}>
      <Label text={labelText} active={active} />
      <div className="dropdown-content__text">{text}</div> 
    </div>
  )
}

export default DropdownContentLabel
