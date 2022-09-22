import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer', () => {
    it('should be rendered correctly.', () => {
        const component = render(<Footer />)
        expect(component).toMatchSnapshot()
    })

    it('should have the correct text.', () => {
        render(<Footer />)
        const text = 'Created with ❤ by Łukasz Szymański'
        const p = screen.getByText(text)
        expect(p.textContent).toEqual(text)
    })
})
