import styled, { css } from 'styled-components'

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
export const ClockFaceContainer = styled.div`
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
