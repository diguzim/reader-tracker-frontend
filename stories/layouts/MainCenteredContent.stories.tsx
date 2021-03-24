import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { MainCenteredContent } from 'layouts'

export default {
  title: 'Layouts/MainCenteredContent',
  component: MainCenteredContent
} as Meta

const Template: Story = (args) => <MainCenteredContent {...args} />

export const Example = Template.bind({})
Example.args = {}
