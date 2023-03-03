import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    max-width: 74rem;
    width: 80%;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    background-color: ${theme['gray-800']};
    border-radius: 8px;
  `}
`
