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

const BaseCountdownButton = styled.button`
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
    color: ${theme['gray-100']};
    transition: 200ms;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background-color: ${theme['green-500']};
    &:hover {
      background-color: ${theme['green-700']};
    }
    &:disabled {
      &:hover {
        background-color: ${theme['green-500']};
      }
    }
  `}
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background-color: ${theme['red-500']};
    &:hover {
      background-color: ${theme['red-700']};
    }
    &:disabled {
      &:hover {
        background-color: ${theme['red-500']};
      }
    }
  `}
`
