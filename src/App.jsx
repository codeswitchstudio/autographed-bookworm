import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {GlobalStyle} from './styles'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

const App = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.jsonsilo.com/public/8ac27526-5c8b-4e97-b458-7a8f914653a4'
      )
      const books = await response.json()
      setBooks(books)
      setFilteredBooks(books)
    }

    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
    }
  }

  const hasFiltered = filteredBooks.length !== books.length

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} state={state} closePanel={closePanel} />}
      </Transition>
    </>
  )
}

export default App
