import { render } from '@testing-library/react'
import DropdownContentUser, { DropdownContentUserProps } from './DropdownContentUser'

const setUp = (props: DropdownContentUserProps) => render(<DropdownContentUser {...props} />)
const requiredProps = { src: 'someImage.jpg', alt: 'someImage', name: 'Matan'  }

describe('DropdownContentUser render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps })
    const dropdownContent = container.querySelector('.dropdown-content')
    const dropdownContentText = container.querySelector('.dropdown-content__text')
    const dropdownContentWrapperImage = container.querySelector('.dropdown-content__wrapper-image')
    const dropdownContentImage = container.querySelector('img')

    expect(dropdownContent).toBeInTheDocument()
    expect(dropdownContentText).toBeInTheDocument()
    expect(dropdownContentText?.textContent).toBe('Matan')
    expect(dropdownContentWrapperImage).toBeInTheDocument()
    expect(dropdownContentImage).toBeInTheDocument()
    expect(dropdownContentImage?.alt).toBe('someImage')
  })

  it('with webp', () => {
    const props = { ...requiredProps, srcWebp: 'someImage.webp' }
    const { container } = setUp(props)
    const webpSource = container.querySelector('source[srcSet]')
    
    expect(webpSource).toBeInTheDocument()
    expect(webpSource?.getAttribute('srcSet')).toBe(props.srcWebp)
  })

  it('with classNames', () => {
    const props = { ...requiredProps, classNames: 'test-class' }
    const { container } = setUp(props)
    const testClass = container.querySelector('.test-class')
    
    expect(testClass).toBeInTheDocument()    
  })
})
