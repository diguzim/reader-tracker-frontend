import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from 'components'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Texto</Button>

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}

export const Secondary = Template.bind({})
Secondary.args = { }

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
