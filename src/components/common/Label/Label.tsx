import React from 'react'
import classnames from 'classnames'

export interface LabelProps {
  text: string
  active?: boolean
  classNames?: string 
}

const Label: React.FC<LabelProps> = ({ text, active, classNames }) => {
  const classNamesWithSpace = ' ' + classNames
  
  return (
    <div className={classnames({"label": true, "label--active": active }) + classNamesWithSpace }>{ text }</div>
  )
}

export default Label
