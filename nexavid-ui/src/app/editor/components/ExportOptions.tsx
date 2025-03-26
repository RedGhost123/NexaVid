"use client";
import { Box, Button } from "@mui/material";

export default function ExportOptions() {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
      <Button variant="contained" color="success">Export Video</Button>
    </Box>
  );
}
