import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import {
  NavigationMenu,
  NavigationMenuProps,
} from '../components/NavigationMenu'

export default {
  title: 'Example/NavigationMenu',
  component: NavigationMenu,
} as Meta

const Template: Story<NavigationMenuProps> = (args) => (
  <NavigationMenu {...args} />
)

export const Mobile = Template.bind({})
