import styled from 'styled-components'

export const Container = styled.div`
  // background-color: #d6ebe9;
  background-color: #f6f4f0;
  padding: 40px 100px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'relative')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : '0')};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  font-size: 32px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`
