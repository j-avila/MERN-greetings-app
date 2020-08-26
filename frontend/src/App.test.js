import React from 'react'
import { render } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import { App } from './App'
import Salute from './components/Salute'

test('renders learn react link', () => {
	const { getByText } = render(<App />)
	const title = getByText(/who do you want to say hi/i)
	expect(title).toBeInTheDocument()
})
