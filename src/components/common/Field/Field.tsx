import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import './field.scss'

export interface FieldProps extends HTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
  icon?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  classNames?: string
  value?: string
}

const Field: React.FC<FieldProps> = ({ onChange, icon, value, classNames = '', ...rest }) => {
  const classNamesWithSpaceOnStart = ' ' + classNames

  return ( 
    <div className={classnames({
      "field": true,
      "field--icon": icon
    }) + classNamesWithSpaceOnStart }>
      <input className="field__input" onChange={onChange} value={value} type="text" {...rest} />
    </div> 
  )
}

export default Field
