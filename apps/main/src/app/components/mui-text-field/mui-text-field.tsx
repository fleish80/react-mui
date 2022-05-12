import React, {useState} from 'react';
import styles from './mui-text-field.module.scss';
import {InputAdornment, Stack, TextField} from '@mui/material';

/* eslint-disable-next-line */
export interface MuiTextFieldProps {
}

export const MuiTextField = (props: MuiTextFieldProps) => {

  const [value, setValue] = useState('');

  return (
    <React.Fragment>
      <h1>MuiTextField</h1>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label='Name' variant="outlined"/>
          <TextField label='Name' variant="filled"/>
          <TextField label='Name' variant="standard"/>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label='Outlined Small Secondary' size="small" color="secondary"/>
          <TextField label='Filled Small Success' variant="filled" size="small" color="success"/>
          <TextField label='Standard Small Info' variant="standard" size="small" color="info"/>
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label='Required' required error/>
          <TextField label='Password' type="password" required helperText="Do not share your password"/>
          <TextField label='Disabled' disabled/>
          <TextField label='Readonly' InputProps={{readOnly: true}}/>
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label='Amount' InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}/>
          <TextField label='Weight' InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}/>
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label='From Input' required value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : ''}/>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default MuiTextField;
