import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Widget from '../../components/Widget'
import { fruits } from '../../data/constants'

const props = {
    data: [...fruits],
    handleCheck: jest.fn(),
    handleReset: jest.fn()
}

describe('Widget', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Widget {...props} />)
        expect(container).toMatchSnapshot()
    })

    it('should handle clicking a button (Reset).', async () => {
        render(<Widget {...props} />)
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(props.handleReset).toHaveBeenCalled()
    })

    it('should have 24 elements.', () => {
        render(<Widget {...props} />)
        const items = screen.getAllByRole('checkbox')
        expect(items).toHaveLength(24)
    })
})
