import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Element from '../../components/Element'
import fruits from '../../data/fruits'

const props = {
  checked: fruits[0].checked,
  handleCheck: jest.fn(),
  id: fruits[0].id,
  img: fruits[0].img,
  name: fruits[0].name
}

describe('Element', () => {
  it('should be rendered correctly.', () => {
    const { container } = render(<Element {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should handle clicking the checkbox.', async () => {
    render(<Element {...props} />)
    const checkbox = screen.getByRole('checkbox')
    await userEvent.click(checkbox)
    expect(props.handleCheck).toHaveBeenCalled()
  })

  it('should have the correct image.', () => {
    render(<Element {...props} />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', props.name)
    expect(img).toHaveAttribute('src', props.img)
  })

  it('should have the correct caption.', () => {
    render(<Element {...props} />)
    const span = screen.getByText('APPLE')
    expect(span).toHaveTextContent(props.name.toUpperCase())
  })
})
