import React from 'react';
import Book from './Book/Book';





const Books = (props) => {


  console.log(props)

  return (
    props.aboutBook.map((book, index) => {

      return <Book
        cover={book.cover}
        author={book.author}
        pages={book.pages}
        website={book.website}
        key={index}
      />

    })
  )

}


export default Books;