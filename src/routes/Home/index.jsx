import React from 'react'
import './home.css'
import Card from '../../components/Card'

import BookService from '../../services/BookService'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books : []
    }
  }

  componentDidMount = () => {
    BookService.get((res) => {
      if(res.isSuccess) {
        this.processResponse(res.data)
      } else {
        alert('fetching failed')
      }
    })
  }

  processResponse = (data) => {
    const apiResponseData = data.data

    let toState = apiResponseData.map((b) =>{
      return {
        title: b.title,
        author: b.author,
        publishedDate: b.published_date,
        rating: {
          score: b.rating.score,
          outOf: b.rating.out_of
        },
        imageUrl: b.image_url
      }
    })

    this.setState({
      books: toState
    }, () => {
      console.log(this.state)
    })
  }

  render = () => {
    const { books } = this.state
    let display = []
    console.log("books" , books)
    books.forEach((b) => {
      display.push(
        <Card
          key = {b.title}
          imgUrl = {b.imageUrl}
          authhor = {b.author}
          publishedYear = {b.publishedDate}
          rating = {b.rating}
        />
      )
    })

    return (
      <div className = 'grid-container'>
        

       {display}

      </div>
    )
  }
}

export default Home
