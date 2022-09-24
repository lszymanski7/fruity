import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Footer />)
        expect(container).toMatchSnapshot()
    })

    it('should have the correct text.', () => {
        render(<Footer />)
        const text = 'Created with ❤ by Łukasz Szymański'
        const p = screen.getByText(text)
        expect(p).toHaveTextContent(text)
    })
})
