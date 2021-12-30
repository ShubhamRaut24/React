import React from 'react';
import  Button  from './Button';
import Center from '../Decorator/Center';

export default {
  
  title: 'atoms/Button',
  component: Button,
  // decorators: [story => <Center>{story()}</Center>]
};

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Center><Button variant='danger'>Danger</Button></Center>

const Template = (args) => <Button {...args} />;

 export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: "primary",
  children: "New Button with args"
}

export const LongPrimary = Template.bind({})

LongPrimary.args = {
 ...PrimaryA,
  children: "Long primary A"
}
