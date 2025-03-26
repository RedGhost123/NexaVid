"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";

const LivePreview = ({ videoUrl }: { videoUrl: string | null }) => {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h5" fontWeight="bold">
        Live AI Video Preview
      </Typography>
      {videoUrl ? (
        <Box component="video" controls width="80%" sx={{ mt: 3, borderRadius: 2 }}>
          <source src={videoUrl} type="video/mp4" />
        </Box>
      ) : (
        <CircularProgress sx={{ mt: 3 }} />
      )}
    </Box>
  );
};

export default LivePreview;
