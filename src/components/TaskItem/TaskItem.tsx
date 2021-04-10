import React from 'react'
import './TaskItem.scss'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import TdCheck from '../../bricks/TdCheck/TdCheck'

interface Props {
  content: string
}

const TaskItem = ({ content }: Props): JSX.Element => {
  return (
    <li className="TaskItem">
      <div className="checkbox">
        <TdCheck checked={false} />
      </div>
      <div className="content">{content}</div>
      <div className="menu">
        <Icon className="icon" icon={faEllipsisH} />
      </div>
    </li>
  )
}

export default TaskItem
