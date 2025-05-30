import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {GlobalStyle, Subtitle} from './styles'
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
      const response = await fetch('/data/books.json')
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
      {/* <Subtitle>Quill-Kissed Paperbacks & Stardusted Swirls of Pen-Toting Mortals</Subtitle> */}
      <Subtitle>QUILL-KISSED PAPERBACKS & STARDUSTED SWIRLS OF PEN-TOTING MORTALS</Subtitle>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'Signed editions'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} state={state} closePanel={closePanel} />}
      </Transition>
    </>
  )
}

export default App
