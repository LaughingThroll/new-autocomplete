import { Story, Meta } from '@storybook/react'
import { DropdownContentUser, DropdownContentUserProps  } from '../../components'
import image from './../assets/user.jpg'
import imageWebp from './../assets/user.webp'
import './dropdownContentUser.scss'

export default {
  title: 'Dropdown/DropdownContentUser',
  component: DropdownContentUser  
} as Meta

const Template: Story<DropdownContentUserProps> = (props: DropdownContentUserProps) => <DropdownContentUser {...props} />

export const Default = Template.bind({})
Default.args = {
  name: 'Jack London',
  src: image,
  alt: 'photo Jack London'   
}

export const BigName = Template.bind({})
BigName.args = {
  name: 'Jack London sad a dasd sad dadsa d sadas dasdsadasdasdsadsadsada dasd asdadasdasdassad sadas das asd asdas dasdasdasdasas dad asda dasdas ddsa dsadsadsad asd asdsadassa dsadas dsad sadas dasdsadasdasd asada sasdasdasdsadsadasdsadadsaasdasdasdadasdasdadasdsasadasddas d dsd sadsadasdkwjnwjdwjdnjdnwjdnwjdnjw njwn dwnd nwdnwjandjw njwdjnw',
  src: image,
  alt: 'photo Jack London'   
}

export const IncorrectPath = Template.bind({})
IncorrectPath.args = {
  name: 'Jack London',
  src: `${image}ss`,
  alt: 'photo Jack London'   
}

export const WebpImage = Template.bind({})
WebpImage.args = {
  name: 'Jack London',
  src: imageWebp,
  alt: 'photo Jack London'   
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  name: 'Jack London',
  src: imageWebp,
  alt: 'photo Jack London',   
  classNames: 'custom-class'
}