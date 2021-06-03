import { render } from '@testing-library/react'
import TextWithIcon, { TextWithIconProps } from './TextWithIcon'

const setUp = (props: TextWithIconProps) => render(<TextWithIcon {...props} />)
const requiredProps = { text: 'Text', iconClassName: 'icon-enter' }

describe('TextWithIcon render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps })
    const textWithIcon = container.querySelector('.text-with-icon')

    expect(textWithIcon).toBeInTheDocument()
    expect(textWithIcon).toHaveClass('icon-enter')
    expect(textWithIcon).toHaveTextContent('Text')
  })

  it('with classNames', () => {
    const { container } = setUp({ ...requiredProps, classNames: 'test-class' })
    const textWithIcon = container.querySelector('.text-with-icon')

    expect(textWithIcon).toHaveClass('test-class')
  })
})
