import React from 'react'
import './card.css'

class Card extends React.Component {
	render = () => {
		
		const { imgUrl, title, author, publishedYear, rating: {score, outOf} } = this.props

    	return (
    	<div className = 'card'>
        	<img src = { imgUrl } alt = "title" style = {{ width: '200px', height: '200px' }}/>
        	<div className = 'text-container'>
        	<p style = {{ fontSize: '16px', fontWeight: 'bold' }}>{ title }</p>
        	<p style = {{ fontSize: '14px' }}>Author: { author }</p>
        	<p style = {{ fontSize: '14px' }}>Published: {publishedYear}</p>
        	<p style = {{ fontSize: '14px' }}>Rating: {score + "/" + outOf}</p>
        	</div>
    	</div>
    	)
  }
}

export default Card