import React from 'react'
import Clock from '../Clock/Clock'
import './Header.scss'
import HeaderMenu from './HeaderMenu'

const Header = (): JSX.Element => {
  return (
    <div className="Header">
      <h1>To Be Done</h1>
      <aside>
        <Clock />
        <HeaderMenu />
      </aside>
    </div>
  )
}

export default Header
