import React, { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import de from 'date-fns/locale/de'
import { formatDistanceToNow } from 'date-fns'

export const History: React.FC = () => {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Deine aufgaben</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Aufgabe</th>
              <th>Dauer</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles?.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.taskName}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startedDate), {
                    addSuffix: true,
                    locale: de,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Komplett</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status statusColor="red">Unterbrochen</Status>
                  )}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status statusColor="yellow">Laufend</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
