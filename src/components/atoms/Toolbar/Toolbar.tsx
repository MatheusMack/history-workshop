import React from 'react';
import { Toolbar as MUIToolbar, ToolbarProps } from '@mui/material';

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return <MUIToolbar {...props} />;
};

export default Toolbar;
