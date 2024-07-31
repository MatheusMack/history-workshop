import React from 'react';
import SearchAppBar from '@/components/molecules/SearchAppBar/SearchAppBar';
import Box from '@/components/atoms/Box/Box';
import Drawer from '@/components/atoms/Drawer/Drawer';

const SearchDrawerAppBar: React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <SearchAppBar />
    <Drawer
      variant="temporary"
      open={false} // Implementar a lógica para abrir/fechar
      onClose={() => {}} // Implementar a lógica para abrir/fechar
    >
      {/* Conteúdo do Drawer */}
    </Drawer>
  </Box>
);

export default SearchDrawerAppBar;
