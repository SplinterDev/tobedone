import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './TdCheck.scss'

interface Props {
  checked: boolean
  size?: number
  onClick?: () => void
}

const TdCheck = ({ checked, size = 1, onClick }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleClick = () => {
    setIsChecked((prev) => !prev)
    onClick && onClick()
  }

  return (
    <div
      className="TdCheck"
      onClick={handleClick}
      style={{ fontSize: `${size - 0.3}rem` }}
    >
      {isChecked && (
        <Icon style={{ fontSize: `${size - 0.3}rem` }} icon={faCheck} />
      )}
    </div>
  )
}

export default TdCheck
