import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { BulletList, BulletListProps } from 'components'

const list = [
  'First item',
  'Second item',
  'Third item'
]

export default {
  title: 'Components/BulletList',
  component: BulletList
} as Meta

const Template: Story<BulletListProps> = (args) => <BulletList {...args} />

export const Example = Template.bind({})
Example.args = {
  list
}