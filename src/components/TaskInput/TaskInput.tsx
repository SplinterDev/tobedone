import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './TaskInput.scss'

const TaskInput = (): JSX.Element => {
  return (
    <div className="TaskInput">
      <Icon className="icon" icon={faAlignLeft} />
      <input type="text" placeholder="Add a task..." />
      <div className="color1">color1</div>
      <div className="color2">color2</div>
      <div className="color3">color3</div>
      <div className="color4">color4</div>
      <div className="color5">color5</div>
      <div className="color6">color6</div>
    </div>
  )
}

export default TaskInput
