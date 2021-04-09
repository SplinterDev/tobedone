import React from 'react'
import './TaskItem.scss'

interface Props {
  content: string
}

const TaskItem = ({ content }: Props): JSX.Element => {
  return <li className="TaskItem">{content}</li>
}

export default TaskItem
