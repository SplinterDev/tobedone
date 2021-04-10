import React from 'react'
import './TaskItem.scss'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import TdCheck from '../../bricks/TdCheck/TdCheck'

type TaskType = {
  description: string
  done: boolean
}

interface Props {
  task: TaskType
}

const TaskItem = ({ task }: Props): JSX.Element => {
  return (
    <li className="TaskItem">
      <div className="checkbox">
        <TdCheck checked={task.done} />
      </div>
      <div className="content">{task.description}</div>
      <div className="menu">
        <Icon className="icon" icon={faEllipsisH} />
      </div>
    </li>
  )
}

export default TaskItem
