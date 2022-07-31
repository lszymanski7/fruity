import React from 'react'
import { render, screen } from '@testing-library/react'
import Widget from '../../components/Widget'
import fruits from '../../data/fruits'

const props = {
	fruits,
    setFruits: jest.fn(),
    setFilteredFruits: jest.fn()
}

describe('Widget', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Widget {...props} />)
		expect(component).toMatchSnapshot()
	})

    it('should have the correct title.', () => {
		render(<Widget {...props} />)
		const title = 'Fruits to select:'
		const h2 = screen.getByRole('heading', { level: 2 })
		expect(h2).toHaveTextContent(title)
	})

    it('should have 24 items.', () => {
		const { container } = render(<Widget {...props} />)
		const items = container.getElementsByClassName('item')
		expect(items).toHaveLength(24)
	})
})
