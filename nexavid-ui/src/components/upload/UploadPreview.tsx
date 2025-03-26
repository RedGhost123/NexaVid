"use client";
import { Box, Typography } from "@mui/material";

const UploadPreview = ({ file }: { file: File | null }) => {
  if (!file) return null;

  return (
    <Box sx={{ mt: 2, p: 2, border: "1px solid #444", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ color: "#00ff99" }}>{file.name}</Typography>
      <Typography variant="body2" sx={{ color: "gray" }}>{(file.size / 1024 / 1024).toFixed(2)} MB</Typography>
    </Box>
  );
};

export default UploadPreview;
