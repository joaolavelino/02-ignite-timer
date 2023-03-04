import React from 'react'
import { ButtonContainer, variantOptions } from './styles'

interface ButtonProps {
  children: React.ReactNode
  variant?: variantOptions
  full?: boolean
  clickFn: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  full = false,
  clickFn,
}) => {
  return (
    <ButtonContainer variant={variant} onClick={() => clickFn()} full={full}>
      {children}
    </ButtonContainer>
  )
}

export default Button
