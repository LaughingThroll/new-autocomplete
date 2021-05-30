import { render } from '@testing-library/react'
import MainLayout from './MainLayout'

describe('Main Layout render', () => {
  it('should has className container', () => {
    const { container } = render(<MainLayout />)
    const containerDOM = container.querySelector('.container')

    expect(containerDOM).toBeInTheDocument()
  })
})
