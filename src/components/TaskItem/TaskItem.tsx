import React from 'react'
import './TaskItem.scss'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import TdCheck from '../../bricks/TdCheck/TdCheck'
import { TaskType } from '../../models/types'
import { useTasksContext } from '../../providers/TasksProvider'

interface Props {
  task: TaskType
}

const TaskItem = ({ task }: Props): JSX.Element => {
  const [tasks, setTasks] = useTasksContext()

  const handleClick = () => {
    setTasks &&
      setTasks((old) =>
        old.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
      )
  }

  return (
    <li className="TaskItem">
      <div className="checkbox">
        <TdCheck checked={task.done} onClick={handleClick} />
      </div>
      <div className="content">{task.description}</div>
      <div className="menu">
        <Icon className="icon" icon={faEllipsisH} />
      </div>
    </li>
  )
}

export default TaskItem
