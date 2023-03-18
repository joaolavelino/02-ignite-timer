import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Cycle } from '../pages/Home/types'
import {
  createNewCycleAction,
  finishCycleAction,
  interruptCycleAction,
} from '../reducers/cycles/actions'
import { reducerFunction } from '../reducers/cycles/reducer'

interface CyclesContextData {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  finishCycle: () => void
  cycles: Cycle[]
  createCycle: (data: NewCycleData) => void
  interruptCycle: () => void
}

interface NewCycleData {
  taskName: string
  minutesAmount: number
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

const initialState: CyclesState = {
  cycles: [],
  activeCycleId: null,
}

export function CyclesContextProvider(props: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    reducerFunction,
    initialState,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-tymer:cyclesState-1.0.0'
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return initialState
      }
    }
  )

  //update local storage
  useEffect(() => {
    const cyclesJson = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-tymer:cyclesState-1.0.0', cyclesJson)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const createCycle = (data: NewCycleData) => {
    const id = String(new Date().getTime()) //the id is the value of miliseconds,
    const newCycle: Cycle = {
      id,
      taskName: data.taskName,
      minutesAmount: data.minutesAmount,
      startedDate: new Date(),
    }
    dispatch(createNewCycleAction(newCycle))
  }

  function interruptCycle() {
    dispatch(interruptCycleAction())
  }

  function finishCycle() {
    dispatch(finishCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        finishCycle,
        cycles,
        createCycle,
        interruptCycle,
      }}
    >
      {props.children}
    </CyclesContext.Provider>
  )
}
