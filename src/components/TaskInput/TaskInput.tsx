import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './TaskInput.scss'

const TaskInput = (): JSX.Element => {
  return (
    <div className="TaskInput">
      <Icon className="icon" icon={faAlignLeft} />
      <input type="text" placeholder="Add a task..." />
    </div>
  )
}

export default TaskInput
