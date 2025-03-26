"use client";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadIcon from "@mui/icons-material/CloudUpload";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, height: "100vh", backgroundColor: "#1e1e1e", color: "#fff", p: 2 }}>
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
          { text: "Upload", icon: <UploadIcon />, link: "/upload" },
          { text: "Generate", icon: <VideoLibraryIcon />, link: "/generate" },
          { text: "Settings", icon: <SettingsIcon />, link: "/settings" },
        ].map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
