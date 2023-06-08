import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToggleSwitch from '../../components/ToggleSwitch'

const props = {
  handleOnChange: jest.fn(),
  isChecked: false
}

describe('ToggleSwitch', () => {
  it('should be rendered correctly.', () => {
    const { container } = render(<ToggleSwitch {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should handle clicking the checkbox.', async () => {
    render(<ToggleSwitch {...props} />)
    const checkbox = screen.getByRole('checkbox')
    await userEvent.click(checkbox)
    expect(props.handleOnChange).toHaveBeenCalled()
  })

  it('should have a moon icon.', () => {
    render(<ToggleSwitch {...props} />)
    const icon = screen.getByTestId('moon')
    expect(icon).toHaveClass('moon-icon')
  })

  it('should have a sun icon.', () => {
    render(<ToggleSwitch {...props} />)
    const icon = screen.getByTestId('sun')
    expect(icon).toHaveClass('sun-icon')
  })
})
