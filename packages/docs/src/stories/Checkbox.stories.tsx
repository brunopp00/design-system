import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  Checkbox,
  CheckboxProps,
} from '@design-system-brunopp00react'

export default {
  title: 'Form/Chackbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
