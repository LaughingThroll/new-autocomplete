import React from 'react'
import './textWithIcon.scss'


export interface TextWithIconProps {
  text: string
  iconClassName: string
  classNames?: string
}

const TextWithIcon: React.FC<TextWithIconProps> = ({ text, iconClassName, classNames = '' }) => {
  return (
    <div className={`text-with-icon ${classNames} ${iconClassName}`}>{ text }</div>
  )
}

export default TextWithIcon
