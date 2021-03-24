import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { MainWrapper } from 'layouts'

export default {
  title: 'Layouts/MainWrapper',
  component: MainWrapper
} as Meta

const Template: Story = (args) => <MainWrapper {...args} />

export const Example = Template.bind({})
Example.args = {}
