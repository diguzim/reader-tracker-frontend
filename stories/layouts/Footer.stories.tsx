import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Footer } from 'layouts'

export default {
  title: 'Layouts/Footer',
  component: Footer
} as Meta

const Template: Story = (args) => <Footer {...args} />

export const Example = Template.bind({})
Example.args = {
  primary: true,
  label: 'Button',
}
