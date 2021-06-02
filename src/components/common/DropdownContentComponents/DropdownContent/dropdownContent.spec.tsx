import { render } from '@testing-library/react'
import DropdownContent, { DropdownContentProps } from './DropdownContent'

const setUp = (props: DropdownContentProps) => render(<DropdownContent {...props} />)
const requiredProps = { text: 'Hello World' }

describe('DropdownContent render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps })
    const dropdownContent = container.querySelector('.dropdown-content')
    const dropdownContentText = container.querySelector('.dropdown-content__text')

    expect(dropdownContent).toBeInTheDocument()
    expect(dropdownContentText).toBeInTheDocument()
    expect(dropdownContentText).toHaveTextContent(requiredProps.text)
  })

  it('with showMore', () => {
    const { container } = setUp({ ...requiredProps, showMore: true })
    const showMore = container.querySelector('.dropdown-content--show-more')
   
    expect(showMore).toBeInTheDocument()
  })

  it('without showMore', () => {
    const { container } = setUp({ ...requiredProps })
    const showMore = container.querySelector('.dropdown-content--show-more')
   
    expect(showMore).toBeNull()
  })

  it('with classNames', () => {
    const { container } = setUp({ ...requiredProps, classNames: 'test-class' })
    const showMore = container.querySelector('.dropdown-content')
   
    expect(showMore).toHaveClass('test-class')
  })
})
