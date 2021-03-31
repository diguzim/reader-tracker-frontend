import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import {
  NavigationMenu,
  NavigationMenuProps
} from 'components/NavigationMenu'
import styled from 'styled-components'

export default {
  title: 'Components/NavigationMenu',
  component: NavigationMenu
} as Meta

const Link = styled.a`
  @media only screen and (min-width: 720px) {
    padding: 0 10px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`

const children = [<Link>First Item</Link>, <Link>Second Item</Link>, <Link>Third Item</Link>]

const Template: Story<NavigationMenuProps> = (args) => (
  <NavigationMenu {...args}>{children}</NavigationMenu>
)

export const Example = Template.bind({})
