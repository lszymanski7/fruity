import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'
import { ThemeProvider } from '../../contexts/ThemeContext'

describe('Header', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Header />, { wrapper: ThemeProvider })
        expect(container).toMatchSnapshot()
    })

    it('should have the GitHub logo.', () => {
        render(<Header />, { wrapper: ThemeProvider })
        const img = screen.getAllByRole('img')[0]
        expect(img).toHaveAttribute('alt', 'GitHub Logo')
        expect(img).toHaveAttribute('src', 'github.svg')
    })

    it('should have link with the correct href attribute.', () => {
        render(<Header />, { wrapper: ThemeProvider })
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', 'https://github.com/lszymanski7/fruity-app')
    })

    it('should have a toggle switch (dark/light mode).', () => {
        render(<Header />, { wrapper: ThemeProvider })
        const themeSwitch = screen.getByTestId('theme-switch')
        expect(themeSwitch).toBeInTheDocument()
    })

    it('should have the correct application logo.', () => {
        render(<Header />, { wrapper: ThemeProvider })
        const img = screen.getAllByRole('img')[1]
        expect(img).toHaveAttribute('alt', 'Application Logo')
        expect(img).toHaveAttribute('src', 'fruity-256x256.webp')
    })

    it('should have the correct application name.', () => {
        render(<Header />, { wrapper: ThemeProvider })
        const name = 'FRUITY'
        const h1 = screen.getByRole('heading', { level: 1 })
        expect(h1).toHaveTextContent(name)
    })
})
