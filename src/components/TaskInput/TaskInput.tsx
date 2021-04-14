import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useTasksContext } from '../../providers/TasksProvider'
import './TaskInput.scss'
import { v4 as uuidv4 } from 'uuid'
import { useGlobalStateContext } from '../../providers/GlobalStateProvider'
import { TaskType } from '../../models/types'

const TaskInput = (): JSX.Element => {
  const [globalState, setGlobalState] = useGlobalStateContext()
  const [, setTasks] = useTasksContext()
  const [value, setValue] = useState('')
  const [editingTask, setEditingTask] = useState<TaskType | null>(null)

  useEffect(() => {
    console.log(globalState.editingTask)
    if (globalState.editingTask) {
      setEditingTask(globalState.editingTask)
      setValue(globalState.editingTask.description)
    }
  }, [globalState])

  const saveNewTask = () => {
    const newTask = {
      id: uuidv4(),
      description: value,
      done: false,
    }

    setTasks && setTasks((oldTasks) => [...oldTasks, newTask])
  }

  const saveEditedTask = () => {
    setTasks &&
      setTasks((oldTasks) =>
        oldTasks.map((item) => {
          if (item.id !== editingTask?.id) return item
          return { ...item, description: value }
        }),
      )
    setEditingTask(null)
    setGlobalState && setGlobalState('editingTask', null)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (editingTask) {
        saveEditedTask()
      } else {
        saveNewTask()
      }
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
