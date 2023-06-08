import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from '../../components/Board'
import fruits from '../../data/fruits'

const props = {
  data: [...fruits],
  handleCheck: jest.fn()
}

describe('Board', () => {
  it('should be rendered correctly.', () => {
    const { container } = render(<Board {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should have 24 elements.', () => {
    render(<Board {...props} />)
    const elements = screen.getAllByTestId('element')
    expect(elements).toHaveLength(24)
  })
})
