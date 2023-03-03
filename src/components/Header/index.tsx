import { ListBullets, Timer } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import * as Styled from './styles'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Styled.StyledHeader>
      <img src={logo} alt="company logo" />
      <nav>
        <NavLink to={'/'} title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title={'History'}>
          <ListBullets size={24} />
        </NavLink>
      </nav>
    </Styled.StyledHeader>
  )
}

export default Header
