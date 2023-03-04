import styled, { css } from 'styled-components'

export type variantOptions = 'solid' | 'outline' | 'discrete'

export interface ButtonContainerProps {
  variant: variantOptions
  full: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ variant, theme, full }) => css`
  display: flex;
  align-items: center;
  gap: 1rem;
    background-color: ${
      variant === 'solid' ? theme['green-500'] : 'transparent'
    };
    border: ${`2px solid ${
      variant !== 'discrete' ? theme['green-500'] : 'transparent'
    }`};
    color: ${variant === 'solid' ? 'white' : theme['green-500']};
    width:${full && '100%'}
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${variant !== 'discrete' && theme['green-700']};
      color: white;
      border-color: ${theme['green-700']};
    }
  `}
`
