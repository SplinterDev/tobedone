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

  const onEdit = () => {
    console.log('edit', task.description)
  }

  const onDelete = () => {
    console.log('delete', task.description)
    setIsConfirm(true)
  }

  return isConfirm ? (
    <div className="TaskItemMenu dialog">
      <Icon className="icon show alert" icon={faExclamationTriangle} />
      <span>Delete?</span>

      <Icon className="icon show yes" icon={faCheck} />
      <Icon className="icon show no" icon={faTimes} />
    </div>
  ) : (
    <div className="TaskItemMenu">
      <Icon
        className={`menu-icon ${!show || 'show'}`}
        onClick={onEdit}
        icon={faEdit}
      />
      <Icon
        className={`menu-icon ${!show || 'show'}`}
        onClick={onDelete}
        icon={faTrashAlt}
      />
    </div>
  )
}

export default TaskItemMenu
