import axios from 'axios'

export const options = {
	method: 'GET',
	mode: 'cors',
	cache: 'default',
	'Content-Type': 'application/json',
}

export const getGreetings = name =>
	axios
		.get('http://localhost:3020', { params: { name: name } }, options)
		.then(resp => {
			const response = resp.data
			console.log(response)
			return response
		})
		.catch(err => console.log(err))
