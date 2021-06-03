import { Story, Meta } from '@storybook/react'
import { TextWithIcon, TextWithIconProps } from './../../components/common'
import './textWithIcon.scss'

export default {
  title: 'Common/TextWithIcon',
  component: TextWithIcon
} as Meta

const Template: Story<TextWithIconProps> = (props) => <TextWithIcon {...props} />

export const Default = Template.bind({})
Default.args = {
  text: 'Enter',
  iconClassName: 'icon-enter'
}

export const OtherIcon = Template.bind({})
OtherIcon.args = {
  text: 'Enter',
  iconClassName: 'icon-command'
}

export const MoreText = Template.bind({})
MoreText.args = {
  text: 'sdsadd ookdokaokd kdos kod aokdsadk askdo dkasodksoakda kdodk dksaodaodkao dkadkasodkwkokw okod wkowk odwakkwao dkwdk',
  iconClassName: 'icon-command'
}


// Rules Cascade CSS
export const MoreIcon = Template.bind({})
MoreIcon.args = {
  text: 'Enter',
  iconClassName: 'icon-command icon-enter'
}


export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  text: 'Enter',
  iconClassName: ''
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  text: 'Enter',
  iconClassName: 'icon-enter',
  classNames: 'test-text-with-icon'
}








