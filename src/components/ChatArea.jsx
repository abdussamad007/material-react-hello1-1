import React from 'react';
import { Box } from '@mui/material';

export default function ChatArea({ children }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
}
