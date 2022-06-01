import React, {useState} from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography} from '@mui/material';
import {Bookmark} from '@mui/icons-material';

/* eslint-disable-next-line */
export interface MuiCheckboxProps {
}

export function MuiCheckbox() {

  const [acceptConditions, setAcceptConditions] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptConditions(event.target.checked);
  }

  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter(skill => skill !== event.target.value));
    }
  }

  return (
    <React.Fragment>
      <h1>MuiCheckbox</h1>
      <Typography variant="body1">Accepted conditions:</Typography>
      {acceptConditions.toString()}
      <Box>
        <FormControlLabel control={<Checkbox checked={acceptConditions} onChange={handleChange}/>}
                          label="I accept terms and conditions"/>
      </Box>
      <Box>
        <Checkbox icon={<Bookmark/>} checkedIcon={<Bookmark/>} checked={acceptConditions} onChange={handleChange}/>
      </Box>

      <Typography variant="body1">Skills:</Typography>
      <ul>
        {skills.map(skill => <li>{skill}</li>)}
      </ul>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange}/>}
                              label="HTML" value="html" checked={skills.includes('html')} />
            <FormControlLabel control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}/>}
                              label="CSS" value="css" checked={skills.includes('css')} />
            <FormControlLabel control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange}/>}
                              label="JavaScript" value="javascript" checked={skills.includes('javascript')} />
          </FormGroup>
        </FormControl>
      </Box>
    </React.Fragment>
  );
}

export default MuiCheckbox;
