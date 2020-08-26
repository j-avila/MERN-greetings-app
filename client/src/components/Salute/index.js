import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Salute = props => {
	const [name, setname] = useState('')
	const { action } = props

	return (
		<div className='holder'>
			<input type='text' onChange={e => setname(e.target.value)} />
			<button type='button' onClick={() => action(name)}>
				say hi!
			</button>
		</div>
	)
}

Salute.propTypes = {
	action: PropTypes.func,
}

export default Salute
