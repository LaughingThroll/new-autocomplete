import { Story, Meta } from '@storybook/react'
import { DropdownContent, DropdownContentProps  } from '../../components/common'
import './dropdownContent.scss'

export default {
  title: 'Common/DropdownContent',
  component: DropdownContent
  
} as Meta

const Template: Story<DropdownContentProps> = (props: DropdownContentProps) => <DropdownContent {...props} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello World'
}

export const DefaultMoreText = Template.bind({})
DefaultMoreText.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis? Voluptate aperiam, quasi molestias debitis laudantium quo minus ad mollitia deleniti placeat quam error, libero repudiandae ratione itaque voluptatibus voluptatum blanditiis. Soluta quos nisi ipsa beatae corporis nam explicabo vero quaerat quam omnis recusandae ut eveniet magnam quas sint accusantium, distinctio voluptatum ex ducimus perspiciatis impedit. Aliquam, fugiat inventore veritatis reiciendis, vitae neque non sit ipsa atque similique dicta aspernatur tempore qui architecto, blanditiis quam dolore nisi minima nemo porro praesentium nostrum quos. Perferendis assumenda praesentium, nobis quas reiciendis odio iste aliquid repellat alias veritatis voluptatum inventore dicta. Iusto, ut!'
}

export const ShowMore = Template.bind({})
ShowMore.args = {
  text: 'Show More (300)',
  showMore: true
}


export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis? Voluptate aperiam, quasi molestias debitis laudantium quo minus ad mollitia deleniti placeat quam error, libero repudiandae ratione itaque voluptatibus voluptatum blanditiis. Soluta quos nisi ipsa beatae corporis nam explicabo vero quaerat quam omnis recusandae ut eveniet magnam quas sint accusantium, distinctio voluptatum ex ducimus perspiciatis impedit. Aliquam, fugiat inventore veritatis reiciendis, vitae neque non sit ipsa atque similique dicta aspernatur tempore qui architecto, blanditiis quam dolore nisi minima nemo porro praesentium nostrum quos. Perferendis assumenda praesentium, nobis quas reiciendis odio iste aliquid repellat alias veritatis voluptatum inventore dicta. Iusto, ut!',
  classNames: 'test-class'
}
