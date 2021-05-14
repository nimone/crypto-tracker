import React from 'react'
import './Title.css'

function Title({ text }) {
	return (
		<div className="title">
			<h1>{text}</h1>
		</div>
	)
}

export default Title