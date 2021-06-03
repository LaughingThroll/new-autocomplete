import { render } from '@testing-library/react'
import DropdownItem, { DropdownItemProps } from './DropdownItem'

const setUp = (props: DropdownItemProps) => render(<DropdownItem {...props} />)
const requiredProps = { enterText: 'Text', iconClassName: 'icon-enter' }

describe('DropdownItem render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps  })
    const dropdownItem =  container.querySelector('.dropdown-item')
    const dropdownItemEnter =  container.querySelector('.dropdown-item__enter')

    expect(dropdownItem).toBeInTheDocument()
    expect(dropdownItem).toContainElement(dropdownItemEnter as HTMLElement)
    expect(dropdownItemEnter).toHaveClass('icon-enter')
    expect(dropdownItemEnter).toHaveTextContent('Text')
  })

  it('with children', () => {
    const props = { ...requiredProps }
    const { container } = render(<DropdownItem {...props} ><div className="test-children">Hello</div></DropdownItem>)
    const dropdownItem =  container.querySelector('.dropdown-item')
    const testChildren = container.querySelector('.test-children')

    expect(dropdownItem).toContainElement(testChildren as HTMLElement)
  })


  it('without children', () => {
    const props = { ...requiredProps }
    const { container } = render(<DropdownItem {...props} />)
    const dropdownItem =  container.querySelector('.dropdown-item')

    expect(dropdownItem?.childElementCount).toBe(1)
  })


})
