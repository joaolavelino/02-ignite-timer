import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, MinutesInput, TaskInput } from './styles'
import { newCycleFormValidationSchema } from './validation'

export type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

const NewCycleForm: React.FC = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">{`Ich werde an`}</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Aufgabennamen eingeben"
        list="task-suggestions"
        {...register('taskName')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projekt 1" />
        <option value="Projekt 2" />
        <option value="Projekt 3" />
        <option value="Projekt 4" />
      </datalist>
      <label htmlFor="minutesAmount">{`für`}</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
        step={5}
        max={30}
        min={5}
        disabled={!!activeCycle}
      />
      <span>minutes arbeiten</span>
    </FormContainer>
  )
}

export default NewCycleForm
