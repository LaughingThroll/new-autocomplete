import React, { ChangeEvent } from 'react';
import { Story, Meta } from '@storybook/react';

import { Field, FieldProps } from './../../../components/common';
import './field.scss'

export default {
  title: 'Common/Field',
  component: Field,
  argTypes: { value: { control: { disable: true } } }
} as Meta;

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const Default = Template.bind({})
Default.args = {
  // onChange: (e: ChangeEvent<HTMLInputElement>) => {}
}


export const WithValue = Template.bind({})
WithValue.args = {
  icon: true,
  value: 'Hello everyone'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: true
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  icon: true,
  placeholder: 'Hello everyone'
}


export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
  icon: true,
  placeholder: 'Hello everyone',
  classNames: 'test-field'
}


export const WithOtherIcon = Template.bind({})
WithOtherIcon.args = {
  icon: true,
  placeholder: 'Hello everyone',
  classNames: 'test-field test-field--icon'
}