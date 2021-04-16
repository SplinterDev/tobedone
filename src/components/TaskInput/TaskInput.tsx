import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { useTasksContext } from '../../providers/TasksProvider'
import './TaskInput.scss'
import { v4 as uuidv4 } from 'uuid'
import { useGlobalStateContext } from '../../providers/GlobalStateProvider'
import { Alert, TaskType } from '../../models/types'
import { useAlertsContext } from '../../providers/AlertsProvider'
import { createAlert } from '../../utils/alerts'
import TdKeyIcon from '../../bricks/TdKeyIcon/TdKeyIcon'

const TaskInput = (): JSX.Element => {
  const [globalState, setGlobalState] = useGlobalStateContext()
  const [, setAlertsContext] = useAlertsContext()
  const [, setTasks] = useTasksContext()

  const [value, setValue] = useState('')
  const [editingTask, setEditingTask] = useState<TaskType | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (globalState.editingTask) {
      setEditingTask(globalState.editingTask)
      setValue(globalState.editingTask.description)
      inputRef?.current?.focus()
    }
  }, [globalState])

  const setAlert = (alert: Alert) => {
    setAlertsContext && setAlertsContext((oldQueue) => [...oldQueue, alert])
  }

  const saveNewTask = () => {
    const newTask = {
      id: uuidv4(),
      description: value,
      done: false,
    }

    setTasks && setTasks((oldTasks) => [...oldTasks, newTask])
    setAlert(createAlert('Task created'))
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
    setAlert(createAlert('Task edited'))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (editingTask) {
        saveEditedTask()
      } else {
        saveNewTask()
      }
      setValue('')
    } else if (e.key === 'Escape') {
      if (editingTask) {
        setEditingTask(null)
        setAlert(createAlert('Editing canceled'))
      }
      setValue('')
      inputRef?.current?.blur()
    }
  }

  return (
    <div className="TaskInput">
      <Icon className="icon" icon={faAlignLeft} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a task..."
        onKeyDown={handleKeyPress}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="key-icons">
        <TdKeyIcon keyName="Esc" />
        <TdKeyIcon keyName="Enter" />
      </div>
    </div>
  )
}

export default TaskInput
