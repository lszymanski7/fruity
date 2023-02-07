import React from 'react'
import { render } from '@testing-library/react'
import App from '../../components/App'
import { ThemeProvider } from '../../contexts/theme-context'

describe('App', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<App />, { wrapper: ThemeProvider })
        expect(container).toMatchSnapshot()
    })
})
