// src/MyAppBar.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MyAppBar: React.FC = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="my-title">
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
