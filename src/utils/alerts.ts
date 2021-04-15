import { v4 as uuidv4 } from 'uuid'
import { Alert, AlertType } from '../models/types'

export const createAlert = (type: AlertType, message: string): Alert => ({
  type,
  message,
  id: uuidv4(),
})
