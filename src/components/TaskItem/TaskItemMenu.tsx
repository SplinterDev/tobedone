import React, { useState } from 'react'
import {
  faCheck,
  faEdit,
  faExclamationTriangle,
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import './TaskItemMenu.scss'
import { TaskType } from '../../models/types'
// import { useTasksContext } from '../../providers/TasksProvider'

type Props = {
  show: boolean
  task: TaskType
}

const TaskItemMenu = ({ show, task }: Props): JSX.Element => {
  // const [, setTasks] = useTasksContext()
  const [isConfirm, setIsConfirm] = useState(false)

  const handleEdit = () => {
    console.log('edit', task.description)
  }

  const handleDelete = () => {
    setIsConfirm(true)
  }

  const handleCancel = () => {
    setIsConfirm(false)
  }

  return isConfirm ? (
    <div className="TaskItemMenu dialog">
      <Icon className="icon show alert" icon={faExclamationTriangle} />
      <span>Delete?</span>

      <Icon className="icon show yes" icon={faCheck} />
      <Icon className="icon show no" onClick={handleCancel} icon={faTimes} />
    </div>
  ) : (
    <div className="TaskItemMenu">
      <Icon
        className={`menu-icon ${!show || 'show'}`}
        onClick={handleEdit}
        icon={faEdit}
      />
      <Icon
        className={`menu-icon ${!show || 'show'}`}
        onClick={handleDelete}
        icon={faTrashAlt}
      />
    </div>
  )
}

export default TaskItemMenu
