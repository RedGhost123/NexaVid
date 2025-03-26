"use client";
import { Box, Button } from "@mui/material";

const QuickActions = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <Button variant="contained" color="primary" fullWidth>
        Upload Video
      </Button>
      <Button variant="contained" color="secondary" fullWidth>
        Create New AI Video
      </Button>
    </Box>
  );
};

export default QuickActions;
