import React, {useEffect, useState} from 'react'

const App = () => {
  const [books, setBooks] = useState([])

  console.log('component is rendering')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      console.log(`fetch request returns:`, response)

      const books = await response.json()
      console.log(`jsonified response:`, books)

      // .then((response) => {
      //   return response.json()
      // })

      // .then((books) => {
      //   console.log(`jsonified response:`, books)
      //   return setBooks(books)
      // })
    }

    fetchData()
  }, [])

  console.log(`the books array in our state:`, books)

  return <div>hallo hallo</div>
}

export default App
