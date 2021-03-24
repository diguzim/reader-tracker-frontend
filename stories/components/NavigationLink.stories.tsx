import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router';

import {
  NavigationLink,
  NavigationLinkProps,
} from 'components/NavigationLink'

export default {
  title: 'Components/NavigationLink',
  component: NavigationLink,
  decorators: [withNextRouter]
} as Meta

const child = "Início"

const Template: Story<NavigationLinkProps> = (args) => (
  <NavigationLink {...args}>{child}</NavigationLink>
)

export const CurrentPage = Template.bind({})
CurrentPage.args = {
  href: '/'
}

export const NotCurrentPage = Template.bind({})
NotCurrentPage.args = {
  href: '/notCurrentPage'
}
