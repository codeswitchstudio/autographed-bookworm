import React, {useRef, useEffect} from 'react'
import {CloseWrapper, Panel, BG, P, Em} from './styles'
import {Close} from '../../styles'

const DetailPanel = ({book, closePanel, state}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
    prevBook.current = book
  }, [book, prevBook])

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {book && (
          <>
            {/* <Book book={book} isLarge={true} /> */}
            {book.signedImage && (
              <img
                src={book.signedImage}
                alt={`Signed page of ${book.title}`}
                style={{
                  width: '100%',
                  marginBottom: '30px',
                  border: '2px solid black',
                  borderRadius: '8px',
                }}
              />
            )}
            <P>{book.description}</P>
            <P>
              <Em>Signed in {book.date}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
