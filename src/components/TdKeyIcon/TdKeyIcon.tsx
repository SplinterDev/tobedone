import React from 'react'
import './TdKeyIcon.scss'

interface Props {
  keyName: string
  onClick: () => void
}

const TdKeyIcon = ({ keyName, onClick }: Props): JSX.Element => {
  return (
    <div onClick={onClick} className="TdKeyIcon">
      <div className="container">{keyName}</div>
    </div>
  )
}

export default TdKeyIcon
