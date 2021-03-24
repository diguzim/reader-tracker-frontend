import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import {
  NavigationAnchor,
  NavigationAnchorProps,
} from 'components/NavigationAnchor'

export default {
  title: 'Components/NavigationAnchor',
  component: NavigationAnchor,
} as Meta

const child = "Início"

const Template: Story<NavigationAnchorProps> = (args) => (
  <NavigationAnchor {...args}>{child}</NavigationAnchor>
)

export const CurrentPage = Template.bind({})
CurrentPage.args = {
  isCurrentPage: true
}

export const NotCurrentPage = Template.bind({})
NotCurrentPage.args = {
  isCurrentPage: false
}
