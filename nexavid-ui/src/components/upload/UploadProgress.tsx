"use client";
import { LinearProgress, Box, Typography } from "@mui/material";

const UploadProgress = ({ progress }: { progress: number }) => {
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Typography variant="body2">Uploading: {progress}%</Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
    </Box>
  );
};

export default UploadProgress;
