import React, { useState } from 'react'
import './TaskItem.scss'
import TdCheck from '../../bricks/TdCheck/TdCheck'
import { TaskType } from '../../models/types'
import { useTasksContext } from '../../providers/TasksProvider'
import TaskItemMenu from './TaskItemMenu'

interface Props {
  task: TaskType
}

const TaskItem = ({ task }: Props): JSX.Element => {
  const [, setTasks] = useTasksContext()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setTasks &&
      setTasks((old) =>
        old.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
      )
  }

  return (
    <li
      className="TaskItem"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <TdCheck checked={task.done} onClick={handleClick} />
      <div className="content">{task.description}</div>
      <TaskItemMenu show={showMenu} />
    </li>
  )
}

export default TaskItem
