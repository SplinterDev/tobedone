import React, { useEffect, useState } from 'react'
import './AlertArea.scss'
import { Alert } from '../../models/types'
import { useAlertsContext } from '../../providers/AlertsProvider'
import { AnimatePresence, motion } from 'framer-motion'

const AlertArea = (): JSX.Element => {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [alertsContext, setAlertsContext] = useAlertsContext()

  useEffect(() => {
    const oldIds = alerts.map((elem) => elem.id)
    const newIds = alertsContext
      .map((elem) => elem.id)
      .filter((elem) => !oldIds.includes(elem))

    if (!newIds.length) return

    // add alert to local queue
    setAlerts((oldAlerts) => [...oldAlerts, ...alertsContext])
    // remove from global queue
    setAlertsContext &&
      setAlertsContext((oldQueue) =>
        oldQueue.filter((elem) => !newIds.includes(elem.id)),
      )

    newIds.map((id) => {
      setTimeout(() => {
        setAlerts((oldQueue) => oldQueue.filter((elem) => elem.id !== id))
      }, 5000)
    })
  }, [alertsContext])

  return (
    <div className="AlertArea">
      <AnimatePresence>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 25, opacity: 0 }}
          >
            {alert.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default AlertArea
