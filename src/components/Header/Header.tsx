import React, { useState } from 'react'
import Clock from '../Clock/Clock'
import './Header.scss'
import HeaderMenu from './HeaderMenu'

type Props = {
  onClickAbout: () => void
}

const Header = ({ onClickAbout }: Props): JSX.Element => {
  const [label, setLabel] = useState<string | null>(null)

  return (
    <div className="Header">
      <h1>To Be Done</h1>
      <aside>
        {label ? <div className="label">{label}</div> : <Clock />}
        <HeaderMenu onChangeLabel={setLabel} onClickAbout={onClickAbout} />
      </aside>
    </div>
  )
}

export default Header
