import React from 'react'
import { TextWithIcon } from './..'

export interface DropdownItemProps {
  enterText: string
  iconClassName: string
}

const DropdownItem: React.FC<DropdownItemProps> = ({ enterText, iconClassName, children }) => {
  return (
    <button type="button" className={`dropdown-item`}>
      {children}
      
      <TextWithIcon classNames="dropdown-item__enter" text={enterText} iconClassName={iconClassName} />    
    </button>
  )
}

export default DropdownItem
