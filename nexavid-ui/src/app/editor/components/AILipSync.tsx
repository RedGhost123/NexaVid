"use client";
import { useState } from "react";
import { Box, Button, Typography, LinearProgress } from "@mui/material";

const AILipSync = ({ onProcess }: { onProcess: (audioFile: File) => void }) => {
  const [audio, setAudio] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAudio(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!audio) return;
    setUploading(true);

    // Simulate upload & processing delay
    setTimeout(() => {
      setUploading(false);
      onProcess(audio);
    }, 2000);
  };

  return (
    <Box sx={{ p: 3, border: "1px solid #444", borderRadius: 2, bgcolor: "#1e1e1e" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        🎤 AI Lip-Sync (Upload Audio)
      </Typography>
      <input type="file" accept="audio/*" onChange={handleFileChange} hidden id="audio-upload" />
      <label htmlFor="audio-upload">
        <Button variant="contained" component="span">
          Select Audio File
        </Button>
      </label>
      {audio && <Typography sx={{ mt: 1 }}>{audio.name}</Typography>}

      {uploading && <LinearProgress sx={{ mt: 2 }} />}
      {audio && !uploading && (
        <Button onClick={handleUpload} variant="contained" color="secondary" sx={{ mt: 2 }}>
          Process Lip-Sync
        </Button>
      )}
    </Box>
  );
};

export default AILipSync;
