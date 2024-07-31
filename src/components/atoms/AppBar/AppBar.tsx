import React from 'react';
import { AppBar as MUIAppBar, AppBarProps } from '@mui/material';

const AppBar: React.FC<AppBarProps> = (props) => {
  return <MUIAppBar {...props} />;
};

export default AppBar;
