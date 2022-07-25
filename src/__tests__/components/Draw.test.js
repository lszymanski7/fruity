import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Draw from '../../components/Draw'
import fruits from '../__fixtures__/fruits'

const props = {
	filteredFruits: fruits,
	handleDraw: jest.fn()
}

describe('Draw', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Draw {...props} />)
		expect(component).toMatchSnapshot()
	})
})

describe('Button', () => {
	it('should handle clicking.', () => {
		render(<Draw {...props} />)
		const button = screen.getByRole('button')
		fireEvent.click(button)
		expect(props.handleDraw).toHaveBeenCalled()
	})

	it('should be disabled and have the correct displayed text.', () => {
		render(<Draw filteredFruits={props.filteredFruits.splice(0, 1)} handleDraw={props.handleDraw} />)
		const button = screen.getByRole('button')
		expect(button).toBeDisabled()
		expect(button).toHaveTextContent('Select more fruits!')
	})

	it('should be enabled and have the correct displayed text.', () => {
		render(<Draw {...props} />)
		const button = screen.getByRole('button')
		expect(button).toBeEnabled()
		expect(button).toHaveTextContent('Draw a fruit!')
	})
})
