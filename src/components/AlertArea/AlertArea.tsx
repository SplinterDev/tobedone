import React, { useEffect, useState } from 'react'
import './AlertArea.scss'
import { v4 as uuidv4 } from 'uuid'

type AlertType = {
  type: 'success' | 'alert' | 'error'
  message: string
  id: string
}

const AlertArea = (): JSX.Element => {
  const [alerts, setAlerts] = useState<AlertType[]>([])

  const createAlert = (
    type: 'success' | 'alert' | 'error',
    message: string,
  ) => {
    const id = uuidv4()
    const newAlert = { type, message, id }
    setAlerts((prevAlerts) => [...prevAlerts, newAlert])
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((item) => item.id !== id))
    }, 5000)
  }

  useEffect(() => {
    createAlert('success', 'it worked!!!')
  }, [])

  return (
    <div className="AlertArea">
      {alerts.map((alert) => (
        <div className={alert.type} key={alert.id}>
          {alert.message}
        </div>
      ))}
    </div>
  )
}

export default AlertArea
