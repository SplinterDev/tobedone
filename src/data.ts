import { TaskType } from './models/types'
import { v4 as uuidv4 } from 'uuid'

export const staticTasks: TaskType[] = [
  {
    id: uuidv4(),
    description:
      'Add new tasks by typing in the input and confirm by pressing Enter',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Mark your tasks as completed by checking the box',
    done: true,
  },
  {
    id: uuidv4(),
    description:
      'Delete or edit old tasks by hovering them and clicking the icons on the right',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Cancel an edition by pressing Esc, or save by pressing Enter',
    done: true,
  },
]
