import { render, screen } from '@testing-library/react'
import DropdownContentLabel, { DropdownContentLabelProps } from './DropdownContentLabel'

const setUp = (props: DropdownContentLabelProps) => render(<DropdownContentLabel {...props} />)
const requiredProps = { text: 'Fashion', description: 'some Descr'  }

describe('DropdownContentLabel render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps })
    const dropdownContentLabel = container.querySelector('.dropdown-content--label')
    const dropdownContentLabelText = container.querySelector('.dropdown-content__text')
    const label = screen.getByText(requiredProps.text) 

    expect(dropdownContentLabel).toBeInTheDocument()
    expect(label.textContent).toBe(requiredProps.text)
    expect(dropdownContentLabelText).toBeInTheDocument()
    expect(dropdownContentLabelText).toHaveTextContent(requiredProps.description)
  })

  it('with classNames', () => {
    const { container } = setUp({ ...requiredProps , classNames: 'test-class'})
    const dropdownContentLabel = container.querySelector('.dropdown-content')

    expect(dropdownContentLabel).toHaveClass('test-class')
  })

})