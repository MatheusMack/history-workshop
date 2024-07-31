import React from 'react';
import { Toolbar, IconButton, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CustomTypography from '@/components/atoms/Text/CustomTypography';
import SearchBar from '@/components/atoms/SearchBar/SearchBar';

const SearchAppBar: React.FC = () => (
  <AppBar position="static">
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <CustomTypography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Seminário PPGH/UFBA
      </CustomTypography>
      <SearchBar />
    </Toolbar>
  </AppBar>
);

export default SearchAppBar;
