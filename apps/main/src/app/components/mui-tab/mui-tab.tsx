import React, {useState} from 'react';
import {Box, Tab} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {Favorite} from '@mui/icons-material';

/* eslint-disable-next-line */
export interface MuiTabProps {
}

export function MuiTab(props: MuiTabProps) {

  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <h1>MuiTab</h1>
      <Box>
        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: 'divider', width: '300px'}}>
            <TabList aria-label="Tabs example" onChange={handleChange} textColor='secondary' indicatorColor='secondary'
                     centered variant='scrollable' scrollButtons='auto'>
              <Tab label="Tab One" value="1" icon={<Favorite/>} iconPosition='start'/>
              <Tab label="Tab Two" value="2" disabled/>
              <Tab label="Tab Three" value="3"/>
              <Tab label="Tab Four" value="4"/>
              <Tab label="Tab Five" value="5"/>
            </TabList>
          </Box>
          <TabPanel value="1">Panel one</TabPanel>
          <TabPanel value="2">Panel two</TabPanel>
          <TabPanel value="3">Panel three</TabPanel>
          <TabPanel value="4">Panel Four</TabPanel>
          <TabPanel value="5">Panel Five</TabPanel>
        </TabContext>
      </Box>
    </React.Fragment>
  );
}

export default MuiTab;
