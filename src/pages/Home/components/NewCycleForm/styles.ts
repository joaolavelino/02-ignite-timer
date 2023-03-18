import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    color: ${theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
  `}
`

const BaseInput = styled.input`
  ${({ theme }) => css`
    height: 2.5rem;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid ${theme['gray-500']};
    font-weight: 400;
    font-size: inherit;
    padding: 0 0.5rem;
    color: ${theme['gray-100']};

    &::placeholder {
      color: ${theme['gray-500']};
    }
    &:focus {
      box-shadow: none;
      border-color: ${theme['green-500']};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  ${() =>
    css`
      flex: 1;
      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }
    `}
`

export const MinutesInput = styled(BaseInput)`
  ${() =>
    css`
      width: 4rem;
    `}
`
