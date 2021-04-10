import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

const tasks = [
  // 'Break into components',
  'Create layout',
  'Add task (simple text)',
  'Mark task as done',
  'Edit task',
  'Save to local storage',
  'Undo task',
  'Add details',
  'Add date and time',
  'Add subtasks',
  "Fix: the checked checkbox has a hight larger than the unchecked because the unchecked uses a simple div, while the checked is an icon. Should probably use the icon INSIDE the div, that'd help",
]

const TaskList = (): JSX.Element => {
  return (
    <ul className="TaskList">
      {tasks.map((e, i) => (
        <TaskItem content={e} key={i} />
      ))}
    </ul>
  )
}

export default TaskList
