import React from 'react'
import { useTasks } from '../../providers/TasksProvider'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

const TaskList = (): JSX.Element => {
  const tasks = useTasks()

  return (
    <ul className="TaskList">
      {tasks.map((e, i) => (
        <TaskItem task={e} key={i} />
      ))}
    </ul>
  )
}

export default TaskList
