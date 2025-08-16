import React from 'react';
import { Drawer, Box, Typography } from '@mui/material';

const drawerWidth = 260;

export default function SidebarDrawer({ mobileOpen, onClose }) {
  const drawerContent = (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Menu</Typography>
      {/* Add sidebar items here */}
    </Box>
  );

  return (
    <>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
