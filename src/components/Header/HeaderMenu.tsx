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
import { useTasksContext } from '../../providers/TasksProvider'

type Props = {
  onChangeLabel: (label: string | null) => void
}

const HeaderMenu = ({ onChangeLabel }: Props): JSX.Element => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [, setTasks] = useTasksContext()

  const clearLabel = () => {
    onChangeLabel(null)
  }

  const clearChecked = () => {
    setTasks && setTasks((oldTasks) => oldTasks.filter((task) => !task.done))
  }

  const clearAll = () => {
    setTasks && setTasks([])
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
    <div
      className="HeaderMenu"
      onMouseLeave={() => {
        setIsConfirm(false)
        clearLabel()
      }}
    >
      <Icon
        className="menu-icon"
        icon={faCheckDouble}
        onMouseEnter={() => onChangeLabel('All')}
        onMouseLeave={() => onChangeLabel('Delete?')}
        onClick={() => {
          clearAll()
          setIsConfirm(false)
          clearLabel()
        }}
      />
      <Icon
        className="menu-icon"
        icon={faCheck}
        onMouseEnter={() => onChangeLabel('Checked')}
        onMouseLeave={() => onChangeLabel('Delete?')}
        onClick={() => {
          clearChecked()
          setIsConfirm(false)
          clearLabel()
        }}
      />
      <Icon
        className="menu-icon"
        icon={faTimes}
        onMouseEnter={() => onChangeLabel('Cancel')}
        onMouseLeave={() => onChangeLabel('Delete?')}
        onClick={() => {
          setIsConfirm(false)
          clearLabel()
        }}
      />
    </div>
  )
}

export default HeaderMenu
