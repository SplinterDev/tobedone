import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { TaskType } from '../../models/types'
import { useTasksContext } from '../../providers/TasksProvider'
import './TaskInput.scss'

const TaskInput = (): JSX.Element => {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useTasksContext()

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newTask = {
        description: value,
        done: false,
      }

      setTasks && setTasks((oldTasks) => [...oldTasks, newTask])
      setValue('')
    }
  }

  return (
    <div className="TaskInput">
      <Icon className="icon" icon={faAlignLeft} />
      <input
        type="text"
        placeholder="Add a task..."
        onKeyPress={handleKeyPress}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default TaskInput
