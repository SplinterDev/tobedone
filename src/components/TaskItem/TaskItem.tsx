import React, { useState } from 'react'
import './TaskItem.scss'
import TdCheck from '../TdCheck/TdCheck'
import { TaskType } from '../../models/types'
import { useTasksContext } from '../../providers/TasksProvider'
import TaskItemMenu from './TaskItemMenu'
import { motion } from 'framer-motion'

interface Props {
  task: TaskType
}

const TaskItem = ({ task }: Props): JSX.Element => {
  const [, setTasks] = useTasksContext()
  const [showMenu, setShowMenu] = useState(true)

  const handleClick = () => {
    setTasks &&
      setTasks((old) =>
        old.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
      )
  }

  return (
    <motion.li
      //https://codesandbox.io/s/framer-motion-drag-to-reorder-pkm1k?file=/src/Example.tsx:102-116
      // drag
      // dragConstraints={{ left: 0, right: 0 }}
      // dragElastic={0.2}
      // dragMomentum={false}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="TaskItem"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <TdCheck checked={task.done} onClick={handleClick} />
      <div className="content">{task.description}</div>
      {showMenu && <TaskItemMenu show={showMenu} task={task} />}
    </motion.li>
  )
}

export default TaskItem
