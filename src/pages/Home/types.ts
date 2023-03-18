import * as zod from 'zod'
import { newCycleFormValidationSchema } from './components/NewCycleForm/validation'

export interface Cycle {
  id: string
  taskName: string
  minutesAmount: number
  startedDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}
