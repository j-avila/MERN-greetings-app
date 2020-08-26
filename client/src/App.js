import React, { useState, useEffect } from 'react'
import './App.scss'
import Salute from './components/Salute'
import Greeting from './components/Greeting'
import { getGreetings } from './services'
import NetworkDetector from './components/NetworkDetector'

export const App = () => {
	const [msg, setMsg] = useState({})
	const [name, setName] = useState('')

	const createGreeting = async friend => {
		const msg = await getGreetings(friend)
		const usrAvatar = Math.floor(Math.random() * (300 - 1) + 1) + 100

		const greeting = () => {
			if (!msg) {
				return false
			}

			return {
				avatar: `https://api.adorable.io/avatar/${usrAvatar}/`,
				message: msg.message,
			}
		}

		setMsg(greeting)
		console.log(msg)
	}

	const testeo = par => par

	useEffect(() => {
		createGreeting(name)
	}, [name])

	return (
		<div className='App'>
			<header className='App-header'>
				<p>who do you want to say hi?</p>
				<Salute action={setName} />
				{!name || name.length <= 0 ? (
					<h4>write a name to say hi</h4>
				) : (
					<Greeting greeting={msg} />
				)}
			</header>
		</div>
	)
}

export default NetworkDetector(App)
