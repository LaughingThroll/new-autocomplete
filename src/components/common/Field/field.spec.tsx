import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Field, { FieldProps } from './Field'

const setUp = (props: FieldProps) => render(<Field {...props} />)
const requiredProps = { onChange: jest.fn() }


describe('Field default render', () => {
  it('should has className "field"', () => {
    const { container } = setUp({ ...requiredProps  })
    const field = container.querySelector('.field')

    expect(field).toBeInTheDocument()
  })

  it('should has input with className field__input', () => {
    const { container } = setUp({ ...requiredProps  })
    const fieldInput = container.querySelector('input')

    expect(fieldInput).toBeInTheDocument()
    expect(fieldInput?.classList.contains('field__input')).toBe(true)
  })
})


describe('Field props', () => {
  it('placeholder', () => {
    const props = { ...requiredProps , placeholder: 'Hello World' } 
    const input = setUp(props).getByPlaceholderText('Hello World')
    
    expect(input).toBeInTheDocument()
  })

  it('icon', () => {
    const props = { ...requiredProps , icon: 'field--icon' } 
    const { container } = setUp(props)
    const filedWithIcon = container.querySelector('.field--icon')

    expect(filedWithIcon).toBeInTheDocument()
  })

  it('value', () => {
    const props = { ...requiredProps , value: '1234' } 
    const fieldInput = setUp(props).queryByDisplayValue('1234')

    expect(fieldInput).toBeInTheDocument()
  })

  it('onChange', () => {
    const props = { ...requiredProps   } 
    const { container } = setUp(props)
    const fieldInput = container.querySelector('input')
  
    fieldInput && fireEvent.change(fieldInput, { target: { value: '1234' }})
    
    expect(props.onChange).toHaveBeenCalled()
  })

  it('onFocus', () => {
    const props = { ...requiredProps, onFocus: jest.fn()   } 
    const { container } = setUp(props)
    const fieldInput = container.querySelector('input')
  
    fieldInput?.focus()

    expect(props.onFocus).toHaveBeenCalled()
  })

  it('classNames', () => {
    const props = { ...requiredProps, classNames: 'hello__test'   } 
    const { container } = setUp(props)
    const field = container.querySelector('.hello__test')
  
    expect(field).toBeInTheDocument()
  })

})