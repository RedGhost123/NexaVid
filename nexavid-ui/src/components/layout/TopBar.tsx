"use client";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const TopBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#121212" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          NexaVid Dashboard
        </Typography>
        <Box>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ ml: 2, bgcolor: "#ff6f61" }}>V</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
