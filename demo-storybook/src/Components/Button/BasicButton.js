import  React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function BasicButtons(props) {

    const{variant = 'contained',children , disabled , size, color, onClick, ...rest} = props
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} {...rest} disabled={disabled} size={size} color={color} onClick={onClick}>{children}</Button>
    </Stack>
  );
}
export default BasicButtons