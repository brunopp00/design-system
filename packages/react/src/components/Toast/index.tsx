import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  return (
    <ToastContainer>
      <ToastRoot>
        <ToastTitle title="teste" />
        <ToastDescription />
      </ToastRoot>
    </ToastContainer>
  )
}
