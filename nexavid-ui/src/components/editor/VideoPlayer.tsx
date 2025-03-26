"use client";
import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoUrl]);

  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h5">Video Preview</Typography>
      <Box component="video" ref={videoRef} controls width="80%" sx={{ mt: 3, borderRadius: 2 }}>
        <source src={videoUrl} type="video/mp4" />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
