import * as zod from 'zod'

export const newCycleFormValidationSchema = zod.object({
  taskName: zod.string().min(1, 'Enter a task name'),
  minutesAmount: zod
    .number()
    .min(1, 'The tesk must have at least 1 minutes')
    .max(60, 'Max task lenght is 60 minutes'),
})
