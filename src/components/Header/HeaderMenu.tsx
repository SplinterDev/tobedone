import React from 'react'
import './HeaderMenu.scss'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu = (): JSX.Element => {
  return (
    <div className="HeaderMenu">
      <Icon className="menu-icon" icon={faQuestion} />
      <Icon className="menu-icon" icon={faTrashAlt} />
    </div>
  )
}

export default HeaderMenu
