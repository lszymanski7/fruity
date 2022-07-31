import React from 'react'
import { render, screen } from '@testing-library/react'
import Item from '../../components/Item'
import fruits from '../../data/fruits'

const props = {
    id: fruits[0].id,
    name: fruits[0].name,
    img: fruits[0].img,
    checked: fruits[0].checked,
    fruits,
    setFruits: jest.fn(),
    setFilteredFruits: jest.fn()
}

describe('Item', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Item {...props} />)
		expect(component).toMatchSnapshot()
	})

	it('should have the correct image.', () => {
		render(<Item {...props} />)
		const img = screen.getByRole('img')
		expect(img).toHaveAttribute('src', props.img.color)
		expect(img).toHaveAttribute('alt', props.name)
		expect(img).toBeInTheDocument()
	})

    it('should have the correct title.', () => {
		render(<Item {...props} />)
		const title = props.name
		const h3 = screen.getByRole('heading', { level: 3 })
		expect(h3).toHaveTextContent(title)
	})
})
