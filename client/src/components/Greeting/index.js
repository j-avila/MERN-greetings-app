import React from 'react'
import PropTypes from 'prop-types'

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

Greeting.propTypes = {
	props: PropTypes.object,
}

export default Greeting
