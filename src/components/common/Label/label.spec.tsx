import { render } from '@testing-library/react'
import Label, { LabelProps } from './Label'


const setUp = (props: LabelProps) => render(<Label {...props} />)
const requiredProps = { text: 'someText' }

describe('Label render', () => {
  it('default', () => {
    const { container } = setUp({ ...requiredProps })
    const label = container.querySelector('.label')

    expect(label).toBeInTheDocument()
  })

  it('with label text', () => {
    const label = setUp({ ...requiredProps }).getByText('someText')

    expect(label).toBeInTheDocument()
  })

  it('with label--active', () => {
    const { container } = setUp({ ...requiredProps, active: true })
    const label = container.querySelector('.label--active')

    expect(label).toBeInTheDocument()
  })

  it('with custom classnames', () => {
    const { container } = setUp({ ...requiredProps, classNames: 'hello-world' })
    const label = container.querySelector('.hello-world')

    expect(label).toBeInTheDocument()
  })
})


