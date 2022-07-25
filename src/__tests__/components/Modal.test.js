import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Modal from '../../components/Modal'
import fruits from '../__fixtures__/fruits'

const props = {
	selectedFruit: fruits[0],
    isOpenModal: true,
	closeModal: jest.fn()
}

describe('Modal', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Modal {...props} />)
		expect(component).toMatchSnapshot()
	})

    it('should have the correct title.', () => {
		render(<Modal {...props} />)
		const title = props.selectedFruit.name
		const h2 = screen.getByRole('heading', { level: 2 })
		expect(h2).toHaveTextContent(title)
	})

	it('should have the correct image.', () => {
		render(<Modal {...props} />)
		const img = screen.getByRole('img')
		expect(img).toHaveAttribute('alt', props.selectedFruit.name)
		expect(img).toBeInTheDocument()
	})
})

describe('Button', () => {
    it('should handle clicking.', () => {
		render(<Modal {...props} />)
		const button = screen.getByRole('button')
		fireEvent.click(button)
		expect(props.closeModal).toHaveBeenCalled()
	})
})
