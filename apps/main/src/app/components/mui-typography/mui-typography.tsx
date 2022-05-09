import styles from './mui-typography.module.scss';
import {Typography} from '@mui/material';
import React from 'react';

/* eslint-disable-next-line */
export interface MuiTypographyProps {
}

export const MuiTypography = (props: MuiTypographyProps) => {
  return (
    <React.Fragment>
      <h1>MuiTypography</h1>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h4" gutterBottom>h4 Heading with margin on bottom</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, corporis deserunt dolore eaque enim explicabo magnam maxime nostrum nulla odit possimus rerum sapiente sequi sit ullam vel veniam voluptates voluptatibus!</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus architecto aut distinctio, facere facilis impedit incidunt ipsa labore molestiae neque nesciunt officia possimus quasi sint, sit suscipit ut velit?</Typography>
      <Typography variant="h6" component="h1">h1 Heading, but h6 variant</Typography>
    </React.Fragment>
  );
};

export default MuiTypography;
