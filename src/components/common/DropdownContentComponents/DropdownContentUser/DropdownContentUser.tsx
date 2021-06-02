import React from 'react'
import { Picture, PictureProps } from '../../index'

export interface DropdownContentUserProps extends PictureProps {
  name: string
  classNames?: string 
}

const DropdownContentUser: React.FC<DropdownContentUserProps> = ({ name, src, alt, srcWebp, classNames = '' }) => {
  return (
    <div className={`dropdown-content dropdown-content--user ${classNames}`}>
      <div className="dropdown-content__wrapper-image">
        <Picture src={src} alt={alt} srcWebp={srcWebp} />
      </div>
      <div className="dropdown-content__text">{name}</div>
    </div>
  )
}

export default DropdownContentUser
