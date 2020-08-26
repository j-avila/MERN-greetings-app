import React from 'react'

const Greeting = props => {
	const { greeting } = props
	return (
		<div className='greeting'>
			<figure>
				<img src={greeting.avatar} alt='name' />
			</figure>
			<h2>{greeting.message}</h2>
		</div>
	)
}

export default Greeting
