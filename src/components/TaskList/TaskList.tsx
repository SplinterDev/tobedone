import React from 'react'
import { useTasksContext } from '../../providers/TasksProvider'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

const TaskList = (): JSX.Element => {
  const [tasks, setTasks] = useTasksContext()

  console.log(tasks)

  return (
    <ul className="TaskList">
      {tasks.map((e, i) => (
        <TaskItem task={e} key={i} />
      ))}
    </ul>
  )
}

export default TaskList
