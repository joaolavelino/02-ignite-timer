import React from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'

export const History: React.FC = () => {
  return (
    <HistoryContainer>
      <h1>Your task history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Preparar orçamento Cada Casa</td>
              <td>20 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Preparar orçamento Cada Casa</td>
              <td>20 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Preparar orçamento Cada Casa</td>
              <td>20 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Preparar orçamento Cada Casa</td>
              <td>20 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Preparar orçamento Cada Casa</td>
              <td>20 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Preparar orçamento Cada Casa</td>
              <td>20 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
