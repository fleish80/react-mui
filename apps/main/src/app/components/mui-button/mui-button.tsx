import React from 'react';
import styles from './mui-button.module.scss';
import {Button, IconButton, Stack} from '@mui/material';
import {Send} from '@mui/icons-material';

/* eslint-disable-next-line */
export interface MuiButtonProps {
}

export const MuiButton = (props: MuiButtonProps) => {
  return (
    <React.Fragment>
      <h1>MuiButton</h1>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="text" href="https://google.com">Link</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success">Success</Button>
        </Stack>

        <Stack spacing={2} direction="row" display="block">
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<Send/>}>Send</Button>
          <Button variant="contained" endIcon={<Send/>}>Send</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <IconButton aria-label="send"><Send/></IconButton>
          <IconButton aria-label="send" color="success" size="small"><Send /></IconButton>
          <IconButton aria-label="send" color="warning" size="large"><Send/></IconButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">Button</Button>
          <Button variant="contained" color="primary" disableElevation>Disable Elevation</Button>
          <Button variant="contained" color="primary" disableRipple>Disable Ripple</Button>
          <Button variant="contained" color="primary" onClick={() => alert('click')}>Alert click</Button>
        </Stack>

        </Stack>
    </React.Fragment>
  );
}

export default MuiButton;
