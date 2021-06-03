import { Story, Meta } from '@storybook/react'
import { Label, LabelProps  } from '../../components/common'
import './label.scss'

export default {
  title: 'Common/Label',
  component: Label  
} as Meta

const Template: Story<LabelProps> = (props: LabelProps) => <Label {...props} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello'
} 

export const DefaultMoreText = Template.bind({})
DefaultMoreText.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem expedita modi deserunt facere atque accusantium rerum dolores odit corporis aliquid eum vero, maxime, architecto sequi mollitia, enim tenetur culpa non saepe possimus dolore ipsum. Atque, ratione, totam dolorem, porro necessitatibus quisquam quaerat nemo quo ipsum dolorum excepturi magnam? Eaque blanditiis in hic laborum nisi neque corporis aliquid non quibusdam pariatur quod ratione, possimus dolor voluptatibus nostrum fugiat nulla voluptate sit, libero voluptatem nam perspiciatis consequuntur? Ex saepe omnis, eum dicta voluptates voluptas doloremque, provident fugiat voluptatibus dolore libero autem eius similique error eveniet! Neque velit itaque tempora assumenda labore.'
} 

export const Active = Template.bind({})
Active.args = {
  text: 'Hello',
  active: true
}

export const WithCustomClassNames = Template.bind({})
WithCustomClassNames.args = {
  text: 'Hello',
  classNames: 'test-class'
}

export const WithCustomClassNamesActive = Template.bind({})
WithCustomClassNamesActive.args = {
  text: 'Hello',
  classNames: 'test-class',
  active: true
}



