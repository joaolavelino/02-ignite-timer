import styled, { css } from 'styled-components'

export type variantOptions = 'solid' | 'outline' | 'discrete'

export interface ButtonContainerProps {
  variant: variantOptions
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ variant, theme }) => css`
    background-color: ${variant === 'solid'
      ? theme['green-300']
      : 'transparent'};
    border: ${`2px solid ${
      variant !== 'discrete' ? theme['green-300'] : 'transparent'
    }`};
    color: ${variant === 'solid' ? 'white' : theme['green-300']};
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${variant !== 'discrete' && theme['green-500']};
      color: white;
      border-color: ${theme['green-500']};
    }
  `}
`
