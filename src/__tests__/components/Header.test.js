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
		const subtitle = `Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? Don't worry about that anymore! Just click the button below!`
		const h2 = screen.getByRole('heading', { level: 2 })
		expect(h2).toHaveTextContent(subtitle)
	})

	it('should have a logo.', () => {
		render(<Header />)
		const logo = screen.getByRole('img')
		expect(logo).toHaveAttribute('alt', 'Fruity Logo')
		expect(logo).toBeInTheDocument()
	})
})
