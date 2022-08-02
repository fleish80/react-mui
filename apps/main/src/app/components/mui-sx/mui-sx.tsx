import React from 'react';
import './mui-sx.scss';
import {Button, Stack} from '@mui/material';

/* eslint-disable-next-line */
export interface MuiSxProps {
}

export const MuiSx = (props: MuiSxProps) => {

  const test = false;

  return (
    <React.Fragment>
      <h1>MuiSx</h1>
      <Stack spacing={2} direction="row">
        <Button sx={[
          {
            width: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500
            },
            border: 5,
            p: 3,
            borderColor: "secondary.main",
            "&.MuiButton-root": {
              height: "200px"
            }
          },
          test && {
            border: 10
          }
        ]} variant="contained">Button 1</Button>
        <Button variant="contained">Button 2</Button>
      </Stack>
    </React.Fragment>
  );
}
