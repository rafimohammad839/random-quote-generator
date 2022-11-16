import React from 'react'

function Quote(props) {
  	return (
		<div className='quote'>
			<div className="anime" title={props.anime}>{props.anime}</div>
			<blockquote>
				{props.quote}
			</blockquote>
			<div className="character" title={props.character}>{props.character}</div>
		</div>
  	)
}

export default Quote