import React from 'react';
import  BasicButtons  from './BasicButton';


export default {
  
  title: 'MUI/Buttons',
  component: BasicButtons,
  // decorators: [story => <Center>{story()}</Center>]
  argTypes: { onClick: { action: 'clicked'} }
  
};

// export const MUIButton = () => <BasicButtons variant='primary'>Primary</BasicButtons>


const Template = (args) => <BasicButtons {...args} />;

 export const Text = Template.bind({})
 Text.args = {
  variant: "text",
  children: "Text",
  disabled: false,
  size:"medium",
  color: "success"
}
export const Contained = Template.bind({})
Contained.args = {
 variant: "contained",
 children: "Contained",
 disabled: false,
 size:"medium",
 color: "success",
 
 
}
export const Outlined = Template.bind({})
Outlined.args = {
 variant: "outlined",
 children: "Outlined",
 disabled: false,
 size:"medium",
 color: "success"
}

export const ConsoleAddon = Template.bind({})
ConsoleAddon.args = {
 variant: "contained",
 children: "Console Addon",
 disabled: false,
 size:"medium",
 onClick: ()=> {
     return console.log("button Clicked");
 }
 }

 



// export const LongPrimary = Template.bind({})

// LongPrimary.args = {
//  ...PrimaryA,
//   children: "Long primary A"
// }
