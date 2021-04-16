import React from 'react'
import './TdKeyIcon.scss'

interface Props {
  keyName: string
}

const TdKeyIcon = ({ keyName }: Props): JSX.Element => {
  return (
    <div className="TdKeyIcon">
      <div className="container">{keyName}</div>
    </div>
  )
}

export default TdKeyIcon
