import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import { MainNavigation } from 'layouts'

export default {
  title: 'Layouts/MainNavigation',
  component: MainNavigation,
  decorators: [withNextRouter]
} as Meta

const Template: Story = (args) => <MainNavigation {...args} />

export const Example = Template.bind({})
Example.args = {}
