"use client";
import { Slider, Box, Typography } from "@mui/material";

export default function Timeline() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="body1">Video Timeline</Typography>
      <Slider defaultValue={0} min={0} max={100} sx={{ color: "#00ff99" }} />
    </Box>
  );
}
