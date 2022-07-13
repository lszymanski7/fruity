import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'
 
describe('Footer', () => {
    it('should be rendered correctly.', () => {
        const component = render(<Footer />)
        expect(component).toMatchSnapshot()
    })
})

describe('Footer anchor tag', () => {
    it('should navigate to https://www.flaticon.com/authors/freepik.', () => {
        render(<Footer />)
        const link = screen.getByRole('link', { name: 'Freepik' })
        expect(link).toHaveAttribute('href', 'https://www.flaticon.com/authors/freepik')
    })

    it('should navigate to https://www.flaticon.com/authors/smashicons.', () => {
        render(<Footer />)
        const link = screen.getByRole('link', { name: 'Smashicons' })
        expect(link).toHaveAttribute('href', 'https://www.flaticon.com/authors/smashicons')
    })
})