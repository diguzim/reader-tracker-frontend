import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router';

import { AccountMenu } from 'layouts'

export default {
  title: 'Layouts/AccountMenu',
  component: AccountMenu,
  decorators: [withNextRouter]
} as Meta

const Template: Story = (args) => <AccountMenu {...args} />

export const Example = Template.bind({})
Example.args = {}
