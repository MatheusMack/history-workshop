import React from 'react';
import { Typography as MUITypography, TypographyProps } from '@mui/material';

const CustomTypography: React.FC<TypographyProps> = (props) => {
  return <MUITypography {...props} />;
};

export default CustomTypography;
