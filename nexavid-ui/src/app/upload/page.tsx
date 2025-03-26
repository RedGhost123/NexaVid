"use client";
import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import UploadForm from "@components/upload/UploadForm";
import UploadProgress from "@components/upload/UploadProgress";

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (file: File) => {
    console.log("Uploading file:", file);
    setUploading(true);
    setProgress(0);

    const fakeUpload = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fakeUpload);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold">
        Upload AI Video
      </Typography>

      <UploadForm onFileUpload={handleFileUpload} />

      {uploading && <UploadProgress progress={progress} />}

      {!uploading && progress === 100 && (
        <Button variant="contained" color="success" fullWidth>
          Process with AI
        </Button>
      )}
    </Container>
  );
}
