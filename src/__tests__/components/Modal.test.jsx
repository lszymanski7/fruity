import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../../components/Modal'
import { ThemeProvider } from '../../contexts/ThemeContext'
import fruits from '../../data/fruits'

const props = {
    isOpen: true,
    onAfterClose: jest.fn(),
    onRequestClose: jest.fn(),
    selectedFruit: fruits[0]
}

describe('Modal', () => {
    it('should be rendered correctly.', () => {
        const { baseElement } = render(<Modal {...props} />, { wrapper: ThemeProvider })
        expect(baseElement).toMatchSnapshot()
    })

    it('should be closed by pressing the Esc key.', async () => {
        render(<Modal {...props} />, { wrapper: ThemeProvider })
        await userEvent.keyboard('{Escape}')
        expect(props.onRequestClose).toHaveBeenCalled()
    })

    it('should have the correct image.', () => {
        render(<Modal {...props} />, { wrapper: ThemeProvider })
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('alt', props.selectedFruit.name)
        expect(img).toHaveAttribute('src', props.selectedFruit.img)
    })

    it('should have the correct caption.', () => {
        render(<Modal {...props} />, { wrapper: ThemeProvider })
        const caption = props.selectedFruit.name.toUpperCase()
        const span = screen.getByText('APPLE')
        expect(span).toHaveTextContent(caption)
    })
})
