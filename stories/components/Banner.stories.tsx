import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Banner, BannerProps } from 'components'

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<BannerProps> = (args) => <Banner {...args}>Texto</Banner>

export const Example = Template.bind({})
Example.args = { }
