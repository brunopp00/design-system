import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@design-system-brunopp00/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Agendar</Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
