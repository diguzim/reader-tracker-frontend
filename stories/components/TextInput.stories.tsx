import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextInput, TextInputProps } from 'components'

export default {
  title: 'Components/TextInput',
  component: TextInput
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Example = Template.bind({})
Example.args = {
  name: "login",
  label: "Login"
}
