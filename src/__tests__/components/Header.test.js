import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header', () => {
    it('should be rendered correctly.', () => {
        const component = render(<Header />)
        expect(component).toMatchSnapshot()
    })

    it('should have the correct title.', () => {
        render(<Header />)
        const title = 'Fruity'
        const h1 = screen.getByRole('heading', { level: 1 })
        expect(h1).toHaveTextContent(title)
    })

    it('should have the correct subtitle.', () => {
        render(<Header />)
        const subtitle = 'Click the button below and draw your fruit!'
        const h2 = screen.getByRole('heading', { level: 2 })
        expect(h2).toHaveTextContent(subtitle)
    })

    it('should have the correct logo.', () => {
        render(<Header />)
        const logo = screen.getByRole('img')
		expect(logo).toHaveAttribute('alt', 'Fruity Logo')
        expect(logo).toHaveAttribute('src', 'fruity-512x512.webp')
    })
})
