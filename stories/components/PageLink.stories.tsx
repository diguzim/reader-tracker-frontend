import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import {
  PageLink,
  PageLinkProps
} from 'components'

export default {
  title: 'Components/PageLink',
  component: PageLink,
  decorators: [withNextRouter]
} as Meta

const child = 'Início'

const Template: Story<PageLinkProps> = (args) => (
  <PageLink {...args}>{child}</PageLink>
)

export const Example = Template.bind({})
Example.args = {
  href: '/'
}