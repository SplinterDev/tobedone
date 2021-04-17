import React, { useEffect, useState } from 'react'
import './Clock.scss'

const Clock = (): JSX.Element => {
  const [value, setValue] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="Clock">
      {new Intl.DateTimeFormat('en', {
        timeStyle: 'medium',
        hour12: false,
      }).format(value)}
    </div>
  )
}

export default Clock
