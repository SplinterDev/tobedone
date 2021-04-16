import { v4 as uuidv4 } from 'uuid'
import { Alert } from '../models/types'

export const createAlert = (message: string): Alert => ({
  message,
  id: uuidv4(),
})
