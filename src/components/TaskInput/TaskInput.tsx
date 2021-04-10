import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { TaskType } from '../../models/types'
import './TaskInput.scss'

type Props = {
  onSave: (newTask: TaskType) => void
}

const TaskInput = ({ onSave }: Props): JSX.Element => {
  const [value, setValue] = useState('')
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSave({ description: value, done: false })
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
