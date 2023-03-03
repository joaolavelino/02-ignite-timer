import React from 'react'
import { ButtonContainer, variantOptions } from './styles'

interface ButtonProps {
  children: React.ReactNode
  variant: variantOptions
  clickFn: () => void
}

const Button: React.FC<ButtonProps> = ({ children, variant, clickFn }) => {
  return (
    <ButtonContainer variant={variant} onClick={() => clickFn()}>
      {children}
    </ButtonContainer>
  )
}

export default Button
