import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Draw from '../../components/Draw'

const props = {
  animation: null,
  disabled: false,
  handleDraw: jest.fn(),
  handleReset: jest.fn()
}

describe('Draw', () => {
  it('should be rendered correctly.', () => {
    const { container } = render(<Draw {...props} />)
    expect(container).toMatchSnapshot()
  })

  describe('Button (draw)', () => {
    it('should handle clicking.', async () => {
      render(<Draw {...props} />)
      const button = screen.getAllByRole('button')[0]
      await userEvent.click(button)
      expect(props.handleDraw).toHaveBeenCalled()
    })

    it('should have the correct text when enabled.', () => {
      render(<Draw {...props} />)
      const button = screen.getAllByRole('button')[0]
      expect(button).toBeEnabled()
      expect(button).toHaveTextContent('DRAW A FRUIT')
    })

    it('should have the correct text when disabled.', () => {
      render(<Draw {...props} disabled={true} />)
      const button = screen.getAllByRole('button')[0]
      expect(button).toBeDisabled()
      expect(button).toHaveTextContent('SELECT MORE FRUITS')
    })
  })

  describe('Button (reset)', () => {
    it('should handle clicking.', async () => {
      render(<Draw {...props} />)
      const button = screen.getAllByRole('button')[1]
      await userEvent.click(button)
      expect(props.handleReset).toHaveBeenCalled()
    })

    it('should not have an animation when enabled.', () => {
      render(<Draw {...props} />)
      const button = screen.getAllByRole('button')[1]
      expect(button).toBeEnabled()
      expect(button).not.toHaveClass('spin')
    })

    it('should have an animation when disabled.', () => {
      render(<Draw {...props} animation={'spin'} />)
      const button = screen.getAllByRole('button')[1]
      expect(button).toBeDisabled()
      expect(button).toHaveClass('spin')
    })

    it('should have the correct background image.', () => {
      render(<Draw {...props} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Reset Icon')
      expect(img).toHaveAttribute('src', 'reset.svg')
    })
  })
})
