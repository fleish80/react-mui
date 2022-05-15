import {Box, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from '@mui/material';
import React, {useState} from 'react';
import styles from './mui-radio-button.module.scss';

/* eslint-disable-next-line */
export interface MuiRadioButtonProps {
}

export function MuiRadioButton(props: MuiRadioButtonProps) {

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }



  return (
    <React.Fragment>
      <h1>MuiRadioButton</h1>
      <Typography variant="body1">Select experience:</Typography>
      {value}
      <Box>
        <FormLabel id="job-experience-group">
        </FormLabel>
        <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group" onChange={handleChange}>
          <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
          <FormControlLabel control={<Radio/>} label="3-15" value="3-5"/>
          <FormControlLabel control={<Radio/>} label="6-10" value="6-10"/>
        </RadioGroup>
      </Box>
    </React.Fragment>
  );
}

export default MuiRadioButton;
