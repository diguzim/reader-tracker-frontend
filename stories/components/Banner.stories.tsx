import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Banner, BannerProps, BannerTypes } from 'components'

const bigLoremText = `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.

Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. `

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const onCloseClick = () => {
  alert('Go Go Closing!')
}

const Template: Story<BannerProps> = (args) => <Banner {...args}>{bigLoremText}</Banner>

export const Dismissable = Template.bind({})
Dismissable.args = { 
  dismissable: true,
  onClose: onCloseClick
}

export const Undismissable = Template.bind({})
Undismissable.args = { 
  dismissable: false
}

export const Neutral = Template.bind({})
Neutral.args = {}

export const Error = Template.bind({})
Error.args = {
  type: BannerTypes.Error
}

export const Caution = Template.bind({})
Caution.args = {
  type: BannerTypes.Caution
}

export const Info = Template.bind({})
Info.args = {
  type: BannerTypes.Info
}

export const Success = Template.bind({})
Success.args = {
  type: BannerTypes.Success
}