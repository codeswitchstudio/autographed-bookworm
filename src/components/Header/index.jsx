import React from 'react'
import {HeaderContainer, Logo} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Autograffitude logo" />
    </a>
    {children}
  </HeaderContainer>
)

export default Header
