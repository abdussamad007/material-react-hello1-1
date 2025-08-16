import React from 'react';
import { Box } from '@mui/material';
import AppBarHeader from '../components/AppBarHeader';
import SidebarDrawer from '../components/SidebarDrawer';
import ChatArea from '../components/ChatArea';
import ChatInput from '../components/ChatInput';

export default function ChatLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleSend = (msg) => {
    setMessages((prev) => [...prev, { text: msg, sender: 'user' }]);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBarHeader onMenuClick={handleDrawerToggle} />
      <SidebarDrawer mobileOpen={mobileOpen} onClose={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          mt: 8, // space for AppBar
        }}
      >
        <ChatArea>
          {messages.map((m, i) => (
            <Box
              key={i}
              sx={{
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                bgcolor: m.sender === 'user' ? 'primary.main' : 'grey.300',
                color: m.sender === 'user' ? 'white' : 'black',
                p: 1.5,
                borderRadius: 2,
                maxWidth: '70%',
                mb: 1,
              }}
            >
              {m.text}
            </Box>
          ))}
        </ChatArea>
        <ChatInput onSend={handleSend} />
      </Box>
    </Box>
  );
}
