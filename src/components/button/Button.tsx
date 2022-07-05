import React, { HTMLAttributes, ReactNode } from 'react'
import StyledButton from './Button.style'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props}) => 
    <StyledButton {...props}>
        { children }
    </StyledButton>

Button.displayName = 'Button'

Button.defaultProps = {
    disabled: false
}

export default Button
export { ButtonProps }