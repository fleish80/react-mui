import React, {useState} from 'react';
import styles from './mui-select.module.scss';
import {Box, MenuItem, TextField, Typography} from '@mui/material';

/* eslint-disable-next-line */
export interface MuiSelectProps {
}

export const MuiSelect = (props: MuiSelectProps) => {

  const [country, setCountry] = useState('');
  const handleChangeSingle = (event: React.ChangeEvent<HTMLInputElement>) => setCountry(event.target.value)


  const [countries, setCountries] = useState<string[]>([]);

  const handleChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (typeof value !== 'string') {
      setCountries(value);
    }
  }

  return (
    <React.Fragment>
      <h1>MuiSelect</h1>
      <Box width="250px">
        <TextField label="Select country" select value={country} onChange={handleChangeSingle} fullWidth>
          <MenuItem value="IS">Israel</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
      <Typography variant="body1">Selected Country:</Typography>
      {country}


      <Box width="250px">
        <TextField label="Select country" select value={countries} onChange={handleChangeMultiple} fullWidth
                   SelectProps={{multiple: true}}>
          <MenuItem value="IS">Israel</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
      <Typography variant="body1">Selected Countries:</Typography>
      <ul>
        {countries.map((country) => <li>{country}</li>)}
      </ul>
    </React.Fragment>
  );
}

export default MuiSelect;
