import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../../components/Modal'
import { fruits } from '../../data/constants'

const props = {
    isOpen: true,
    onRequestClose: jest.fn(),
    selected: fruits[0]
}

describe('Modal', () => {
    it('should be rendered correctly.', () => {
        const { baseElement } = render(<Modal {...props} />)
        expect(baseElement).toMatchSnapshot()
    })

    it('should handle clicking a button (Close).', async () => {
        render(<Modal {...props} />)
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(props.onRequestClose).toHaveBeenCalled()
    })

    it('should have the correct caption.', () => {
        render(<Modal {...props} />)
        const caption = props.selected.name
        const span = screen.getByText('Apple')
        expect(span).toHaveTextContent(caption)
    })

    it('should have the correct image.', () => {
        render(<Modal {...props} />)
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('alt', props.selected.name)
        expect(img).toHaveAttribute('src', props.selected.img)
    })
})
