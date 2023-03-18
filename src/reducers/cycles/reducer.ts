import { CyclesState } from '../../contexts/CyclesContext'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export const reducerFunction = (state: CyclesState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
      break
    case ActionTypes.FINISH_CURRENT_CYCLE:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() }
      //     } else return cycle
      //   }),
      //   activeCycleId: null,
      // }
      {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })
        if (currentCycleIndex < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].finishedDate = new Date()
        })
      }
      break
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else return cycle
      //   }),
      //   activeCycleId: null,
      // }

      {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })
        if (currentCycleIndex < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].interruptedDate = new Date()
        })
      }
      break

    default:
      return state
      break
  }
}
