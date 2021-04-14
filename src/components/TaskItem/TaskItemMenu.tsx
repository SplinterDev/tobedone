import React from 'react'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import './TaskItemMenu.scss'

type Props = {
  show: boolean
}

const TaskItemMenu = ({ show }: Props): JSX.Element => {
  return (
    <div className={'TaskItemMenu'}>
      <Icon className={`icon  ${!show || 'show'}`} icon={faEdit} />
      <Icon className={`icon  ${!show || 'show'}`} icon={faTrashAlt} />
    </div>
  )
}

export default TaskItemMenu
