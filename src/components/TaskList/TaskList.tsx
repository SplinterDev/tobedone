import React, { useState } from 'react'
import { TaskType } from '../../models/types'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

type Props = {
  tasks: TaskType[]
}

const TaskList = ({ tasks }: Props): JSX.Element => {
  const [taskList, setTaskList] = useState(tasks)

  return (
    <ul className="TaskList">
      {taskList.map((e, i) => (
        <TaskItem task={e} key={i} />
      ))}
    </ul>
  )
}

export default TaskList
