import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
      height: 2rem;
    }

    & nav {
      display: flex;
      gap: 0.5rem;

      a {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme['gray-400']};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        transition: 0.3s;

        &:hover {
          border-bottom: 3px solid ${theme['green-500']};
        }

        &.active {
          color: ${theme['green-500']};
        }
      }
    }
  `}
`
