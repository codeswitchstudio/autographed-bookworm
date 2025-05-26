import React from 'react'
import {Container, Signed, Title, Author} from './styles'

const Signed = ({book, pickBook, isLarge}) => (
  <Container $isLarge={isLarge} onClick={() => pickBook && pickBook(book)}>
    <Signed src={book.signed} alt={`Autograph for ${book.title} by ${book.author}`} />
    <figcaption>
      <Title $isLarge={isLarge}>{book.title}</Title>
      <Author>by {book.author}</Author>
    </figcaption>
  </Container>
)

export default Signed
