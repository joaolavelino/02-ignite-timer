import { Play } from 'phosphor-react'
import React from 'react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  taskName: zod.string().min(1, 'Enter a task name'),
  minutesAmount: zod
    .number()
    .min(5, 'The tesk must have at least 5 minutes')
    .max(60, 'Max task lenght is 60 minutes'),
})

// interface NewCycleFormData {
//   taskName: string
//   minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home: React.FC = () => {
  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { taskName: '', minutesAmount: 0 },
  })

  const taskName = watch('taskName')

  const isSubmitDisabled = () => {
    return !taskName
  }

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    console.log(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">{`I'm working on`}</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="insert task name"
            list="task-suggestions"
            {...register('taskName')}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>
          <label htmlFor="minutesAmount">{`for`}</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
            step={5}
            max={30}
            min={5}
          />
          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled()}>
          <Play weight="bold" height={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
