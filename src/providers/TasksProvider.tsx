import React, { useContext, useEffect, useState } from 'react'
import { TaskType } from '../models/types'
import { ContextSetterType, ContextType } from './providers'
import { staticTasks } from '../data'
import useLocalStorage from '../hooks/useLocalStorage'

const TasksContext = React.createContext<ContextType<TaskType[]>>({ value: [] })

export const useTasksContext = (): [
  TaskType[],
  ContextSetterType<TaskType[]> | undefined,
] => {
  const tasks = useContext(TasksContext)
  return [tasks.value, tasks.update]
}
export const useTasks = (): TaskType[] => {
  const tasks = useContext(TasksContext)
  return tasks.value
}

type Props = {
  children: React.ReactNode
}

const TasksProvider = ({ children }: Props): JSX.Element => {
  const [tasksStorage, setTasksStorage] = useLocalStorage<TaskType[]>(
    'todo-tasks',
    staticTasks,
  )
  const [tasks, setTasks] = useState<TaskType[]>(tasksStorage)

  useEffect(() => {
    setTasksStorage(tasks)
  }, [tasks])

  return (
    <TasksContext.Provider value={{ value: tasks, update: setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
