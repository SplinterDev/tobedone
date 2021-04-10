import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './TdCheck.scss'

interface Props {
  checked: boolean
  size?: number
}

const TdCheck = ({ checked, size = 1 }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <div
      className="TdCheck"
      onClick={() => setIsChecked((prev) => !prev)}
      style={{ fontSize: `${size - 0.3}rem` }}
    >
      {isChecked && (
        <Icon style={{ fontSize: `${size - 0.3}rem` }} icon={faCheck} />
      )}
    </div>
  )
}

export default TdCheck
