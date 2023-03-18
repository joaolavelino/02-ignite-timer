import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import React, { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext'
import ClockFace from './components/ClockFace'
import NewCycleForm, { NewCycleFormData } from './components/NewCycleForm'
import { newCycleFormValidationSchema } from './components/NewCycleForm/validation'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { Cycle } from './types'

export const Home: React.FC = () => {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { taskName: '', minutesAmount: 0 },
  })

  const { handleSubmit, reset, watch } = newCycleForm
  const { activeCycle, createCycle, interruptCycle } = useContext(CyclesContext)

  const taskName = watch('taskName')

  const isSubmitDisabled = () => {
    return !taskName
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    createCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <p>{activeCycle && activeCycle.taskName}</p>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          {!activeCycle ? (
            <NewCycleForm />
          ) : (
            <h3>Sie arbeiten gerade an {activeCycle.taskName}</h3>
          )}
        </FormProvider>
        <ClockFace />
        {activeCycle ? (
          <StopCountdownButton onClick={interruptCycle} type="button">
            <HandPalm weight="bold" height={24} /> Unterbrechen
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled()}>
            <Play weight="bold" height={24} /> Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
