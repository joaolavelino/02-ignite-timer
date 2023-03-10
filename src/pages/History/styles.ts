import styled, { css } from 'styled-components'

export const HistoryContainer = styled.main`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3.5rem;

    h1 {
      font-size: 1.5rem;
    }
  `}
`
export const HistoryList = styled.main`
  ${({ theme }) => css`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;

      th {
        background-color: ${theme['gray-600']};
        padding: 1rem;
        text-align: left;
        color: ${theme['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
          border-top-left-radius: 8px;
          padding-left: 1.5rem;
        }
        &:last-child {
          border-top-right-radius: 8px;
          padding-right: 1.5rem;
        }
      }

      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 8px;
        }
        td:last-child {
          border-bottom-right-radius: 8px;
        }
      }

      td {
        background-color: ${theme['gray-700']};
        border-top: 4px solid ${theme['gray-800']};
        padding: 1rem;
        text-align: left;
        color: ${theme['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
          padding-left: 1.5rem;
          width: 50%;
        }
        &:last-child {
          padding-right: 1.5rem;
        }
      }
    }
  `}
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
  gray: 'gray-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  ${({ theme, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${theme[STATUS_COLORS[statusColor]]};
    }
  `}
`
