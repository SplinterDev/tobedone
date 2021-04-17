import React, { useState } from 'react'
import './HeaderMenu.scss'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faCheckDouble,
  faQuestion,
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  onChangeLabel: (label: string | null) => void
}

const HeaderMenu = ({ onChangeLabel }: Props): JSX.Element => {
  const [isConfirm, setIsConfirm] = useState(false)

  const clearLabel = () => {
    onChangeLabel(null)
  }

  return !isConfirm ? (
    <div className="HeaderMenu">
      <Icon
        className="menu-icon"
        icon={faQuestion}
        onMouseEnter={() => onChangeLabel('Help')}
        onMouseLeave={clearLabel}
      />
      <Icon
        className="menu-icon"
        icon={faTrashAlt}
        onClick={() => setIsConfirm(true)}
        onMouseEnter={() => onChangeLabel('Delete all')}
        onMouseLeave={clearLabel}
      />
    </div>
  ) : (
    <div className="HeaderMenu">
      <Icon
        className="menu-icon"
        icon={faTimes}
        onMouseEnter={() => onChangeLabel('Cancel')}
        onMouseLeave={clearLabel}
      />
      <Icon
        className="menu-icon"
        icon={faCheck}
        onMouseEnter={() => onChangeLabel('Delete checked')}
        onMouseLeave={clearLabel}
      />
      <Icon
        className="menu-icon"
        icon={faCheckDouble}
        onMouseEnter={() => onChangeLabel('Delete all')}
        onMouseLeave={clearLabel}
      />
    </div>
  )
}

export default HeaderMenu
