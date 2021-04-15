import React from 'react'
import { useTasks } from '../../providers/TasksProvider'
import AlertArea from '../AlertArea/AlertArea'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

const TaskList = (): JSX.Element => {
  const tasks = useTasks()

  return (
    <div className="TaskList">
      <AlertArea />
      <ul>
        {tasks.map((e) => (
          <TaskItem task={e} key={e.id} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
