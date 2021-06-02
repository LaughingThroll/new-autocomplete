import { render, screen } from '@testing-library/react'
import Picture, { PictureProps } from './Picture'

const setUp = (props: PictureProps) => render(<Picture {...props} />)
const requiredProps = { src: 'somePath.jpg', alt: 'someText' }

describe('Picure render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps })
    const picture = container.querySelector('picture')
    const image = screen.getByAltText('someText')

    expect(picture).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })

  it('without turn webp supports ', () => {
    const { container } = setUp({ ...requiredProps, })
    const picture = container.querySelector('picture')
    const image = screen.getByAltText('someText')
    const source = container.querySelector('source[srcSet]')
    
    expect(picture).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(source).toBe(null)
  })

  it('with turn webp supports ', () => {
    const props = { ...requiredProps, srcWebp: './image/hidri.webp' }
    const { container } = setUp(props)
    const picture = container.querySelector('picture')
    const image = screen.getByAltText('someText')
    const source = container.querySelector('source[srcSet]')
    
    expect(picture).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(source).toBeInTheDocument()
    expect(source?.getAttribute('srcSet')).toBe(props.srcWebp)
  })
})
