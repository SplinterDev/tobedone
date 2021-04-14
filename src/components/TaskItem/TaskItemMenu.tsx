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
import { useTasksContext } from '../../providers/TasksProvider'
import { useGlobalStateContext } from '../../providers/GlobalStateProvider'

type Props = {
  show: boolean
  task: TaskType
}

const TaskItemMenu = ({ show, task }: Props): JSX.Element => {
  const [, setGlobalState] = useGlobalStateContext()
  const [, setTasks] = useTasksContext()
  const [isConfirm, setIsConfirm] = useState(false)

  const handleEdit = () => {
    setGlobalState && setGlobalState('editingTask', task)
  }

  const handleDelete = () => {
    setIsConfirm(true)
  }

  const handleCancel = () => {
    setIsConfirm(false)
  }

  const handleConfirm = () => {
    setTasks &&
      setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id))
    setIsConfirm(false)
  }

  return isConfirm ? (
    <div className="TaskItemMenu dialog">
      <Icon className="icon show alert" icon={faExclamationTriangle} />
      <span>Delete?</span>

      <Icon className="icon show yes" onClick={handleConfirm} icon={faCheck} />
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
