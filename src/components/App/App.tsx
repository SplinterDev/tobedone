import React, { useState } from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import Colors from '../Colors/Colors'
import { TaskType } from '../../models/types'

const staticTasks = [
  {
    description: 'Break into components',
    done: true,
  },
  {
    description: 'Create layout',
    done: true,
  },
  {
    description: 'Add task (simple text)',
    done: false,
  },
  {
    description: 'Mark task as done',
    done: false,
  },
  {
    description: 'Edit task',
    done: false,
  },
  {
    description: 'Save to local storage',
    done: false,
  },
  {
    description: 'Undo task',
    done: false,
  },
  {
    description: 'Add details',
    done: false,
  },
  {
    description: 'Add date and time',
    done: false,
  },
  {
    description: 'Add subtasks',
    done: false,
  },
  {
    description:
      "Fix: the checked checkbox has a hight larger than the unchecked because the unchecked uses a simple div, while the checked is an icon. Should probably use the icon INSIDE the div, that'd help",
    done: true,
  },
]

function App(): JSX.Element {
  const [tasks, setTasks] = useState<TaskType[]>(staticTasks)

  return (
    <div id="App">
      <TaskInput />
      <TaskList tasks={tasks} />
      {/* <Colors /> */}
    </div>
  )
}

export default App
