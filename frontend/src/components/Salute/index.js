import React, { useState } from 'react'

const Salute = props => {
	const [name, setname] = useState('')

	return (
		<div className='holder'>
			<input type='text' onChange={e => setname(e.target.value)} />
			<button type='button' onClick={() => props.action(name)}>
				say hi!
			</button>
		</div>
	)
}

export default Salute
