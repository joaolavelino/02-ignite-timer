import { differenceInSeconds } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { ClockFaceContainer, Separator } from './styles'

const ClockFace: React.FC = ({}) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  const { activeCycle, activeCycleId, finishCycle } = useContext(CyclesContext)

  const totalTaskSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalTaskSeconds - elapsedSeconds : 0

  const minutesLeft = Math.floor(currentSeconds / 60)
  const secondsLeft = currentSeconds % 60
  const minutesString = String(minutesLeft).padStart(2, '0')
  const secondsString = String(secondsLeft).padStart(2, '0')

  // UPDATES THE ELAPSED SECONDS STATE
  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondDifferential = differenceInSeconds(
          new Date(),
          activeCycle.startedDate
        )

        if (secondDifferential >= activeCycle.minutesAmount * 60) {
          finishCycle()

          clearInterval(interval)
        } else {
          setElapsedSeconds(secondDifferential)
        }
      }, 1000)
    }

    // essa função de retorno é algo que aconteça quando o use effect for ativado novamente
    return () => {
      clearInterval(interval)
      setElapsedSeconds(0)
    }
  }, [activeCycle, activeCycleId, finishCycle])

  useEffect(() => {
    if (activeCycle)
      document.title = `${minutesString}:${secondsString} - ${activeCycle?.taskName}`
    else document.title = 'Ignite Timer'
  }, [minutesString, secondsString, activeCycle])

  return (
    <ClockFaceContainer>
      <span>{minutesString[0]}</span>
      <span>{minutesString[1]}</span>
      <Separator>:</Separator>
      <span>{secondsString[0]}</span>
      <span>{secondsString[1]}</span>
    </ClockFaceContainer>
  )
}

export default ClockFace
