import React, {ChangeEvent, useState} from 'react';
import {Box, FormControlLabel, Switch} from '@mui/material';

/* eslint-disable-next-line */
export interface MuiSwitchProps {}

export function MuiSwitch() {

  const [checked, setChecked] = useState(false);

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  return (
    <React.Fragment>
      <h1>MuiSwitch</h1>
      {checked.toString()}
      <Box>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handlerChange}/>}
          label="Dark mode"/>
      </Box>

    </React.Fragment>
  );
}

export default MuiSwitch;
