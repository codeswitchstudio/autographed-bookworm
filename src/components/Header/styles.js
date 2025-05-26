import styled from 'styled-components'
import {ReactComponent as LogoAsset} from '../../assets/Autogruffy02.svg'

export const HeaderContainer = styled.header`
  // background: #75b9be;
  background: #f6f4f0;
  padding: 20px 20px;
  border-bottom: 5px solid black;
  position: static;
  z-index: 2;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 20px;
  }
`

export const Logo = styled(LogoAsset)`
  height: 200px;
  // width: 500px;
  display: block;

  @media (max-width: 800px) {
    height: 100px;
    // width: 222px;
  }
`
