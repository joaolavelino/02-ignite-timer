import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.5rem;
    }
  `}
`
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

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${theme['gray-100']};

    span {
      background-color: ${theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 8px;
    }
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const StartCountdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: ${theme['green-500']};
    color: ${theme['gray-100']};
    transition: 200ms;
    &:hover {
      background-color: ${theme['green-700']};
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      pointer-events: none;
    }
  `}
`
