import React, { useContext, useState } from 'react'
import { Alert } from '../models/types'
import { ContextSetterType, ContextType } from './providers'

const AlertsContext = React.createContext<ContextType<Alert[]>>({ value: [] })

export const useAlertsContext = (): [
  Alert[],
  ContextSetterType<Alert[]> | undefined,
] => {
  const alerts = useContext(AlertsContext)
  return [alerts.value, alerts.update]
}
export const useAlerts = (): Alert[] => {
  const alerts = useContext(AlertsContext)
  return alerts.value
}

type Props = {
  children: React.ReactNode
}

const AlertsProvider = ({ children }: Props): JSX.Element => {
  const [alerts, setAlerts] = useState<Alert[]>([])

  return (
    <AlertsContext.Provider value={{ value: alerts, update: setAlerts }}>
      {children}
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
