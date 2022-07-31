import React from 'react'
import { render } from '@testing-library/react'
import Fruity from '../../components/Fruity'

describe('Fruity', () => {
	it('should be rendered correctly.', () => {
		const component = render(<Fruity />)
		expect(component).toMatchSnapshot()
	})
})
