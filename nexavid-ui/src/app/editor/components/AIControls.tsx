"use client";
import { Box, Typography } from "@mui/material";
import AILipSync from "./AILipSync";

const AIControls = () => {
  const handleLipSyncProcess = (audioFile: File) => {
    console.log("Processing AI Lip-Sync with:", audioFile.name);
    // TODO: Call Backend API Here
  };

  return (
    <Box sx={{ p: 3, border: "1px solid #444", borderRadius: 2, bgcolor: "#121212" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        🎬 AI Tools
      </Typography>

      {/* AI Lip-Sync */}
      <AILipSync onProcess={handleLipSyncProcess} />
    </Box>
  );
};

export default AIControls;
