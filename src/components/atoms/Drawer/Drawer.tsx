import React from 'react';
import { Drawer as MUIDrawer, DrawerProps } from '@mui/material';

const Drawer: React.FC<DrawerProps> = (props) => {
  return <MUIDrawer {...props} />;
};

export default Drawer;
