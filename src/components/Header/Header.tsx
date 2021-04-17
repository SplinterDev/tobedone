import React from 'react'
import Clock from '../Clock/Clock'
import './Header.scss'

const Header = (): JSX.Element => {
  return (
    <div className="Header">
      <h1>To Be Done</h1>
      <aside>
        <Clock />
        <div>Menu</div>
      </aside>
    </div>
  )
}

export default Header
