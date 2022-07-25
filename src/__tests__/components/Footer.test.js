import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Footer />)
		expect(component).toMatchSnapshot()
	})

	it('should have two anchor tags.', () => {
		render(<Footer />)
		const links = screen.getAllByRole('link')
		expect(links).toHaveLength(2)
	})
})

describe('Anchor tag', () => {
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
