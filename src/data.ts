import { TaskType } from './models/types'
import { v4 as uuidv4 } from 'uuid'

export const staticTasks: TaskType[] = [
  {
    id: uuidv4(),
    description: 'Break into components',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Create layout',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Add task (simple text)',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Mark task as done',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Add context menu',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Delete task',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Edit task',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Save to local storage',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Undo task',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Add details',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Add date and time',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Add subtasks',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'use Animations',
    done: false,
  },
]
