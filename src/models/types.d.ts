export type TaskType = {
  id: string
  description: string
  done: boolean
}

export type AlertType = 'success' | 'alert' | 'error'
export type Alert = {
  type: AlertType
  message: string
  id: string
}
