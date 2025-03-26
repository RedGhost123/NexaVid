"use client";
import { Box, Grid, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Timeline from "./components/Timeline";
import AIControls from "./components/AIControls";
import ExportOptions from "./components/ExportOptions";

export default function Editor() {
  return (
    <Box sx={{ p: 3, backgroundColor: "#121212", height: "100vh", color: "#fff" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        AI Video Editor
      </Typography>

      <Grid container spacing={2}>
        {/* Left Side: Video Player */}
        <Grid item xs={8}>
          <VideoPlayer />
        </Grid>

        {/* Right Side: AI Editing Tools */}
        <Grid item xs={4}>
          <AIControls />
        </Grid>
      </Grid>

      {/* Timeline & Export */}
      <Timeline />
      <ExportOptions />
    </Box>
  );
}
