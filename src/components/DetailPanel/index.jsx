import React, {useRef, useEffect} from 'react'
import {CloseWrapper, Panel, BG, P, Em, Divider} from './styles'
import {Close} from '../../styles'

const renderInline = (text) =>
  text.split(/\*(.+?)\*/g).map((part, i) => (i % 2 === 1 ? <Em key={i}>{part}</Em> : part))

const renderEssay = (text) =>
  text
    .split('\n\n')
    .map((para, i) =>
      para.trim() === '---' ? <Divider key={i} /> : <P key={i}>{renderInline(para)}</P>
    )

const DetailPanel = ({book, closePanel, state}) => {
  const panelEl = useRef(null)

  useEffect(() => {
    if (state === 'entering') {
      panelEl.current.scrollTop = 0
    }
  }, [state])

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {book && (
          <>
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
            {renderEssay(book.description)}
            <P>
              <tt>Signed in {book.date}</tt>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
