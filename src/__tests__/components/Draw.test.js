import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Draw from '../../components/Draw'

const props = {
    disabled: true,
    handleDraw: jest.fn()
}

describe('Button', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Draw {...props} />)
        expect(container).toMatchSnapshot()
    })

    it('should handle clicking a button (Draw).', async () => {
        render(<Draw {...props} disabled={false} />)
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(props.handleDraw).toHaveBeenCalled()
    })

    it('should be disabled and have the correct text.', () => {
        render(<Draw {...props} />)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        expect(button).toHaveTextContent('Select more fruits!')
    })

    it('should be enabled and have the correct text.', () => {
        render(<Draw {...props} disabled={false} />)
        const button = screen.getByRole('button')
        expect(button).toBeEnabled()
        expect(button).toHaveTextContent('Draw a fruit!')
    })
})
