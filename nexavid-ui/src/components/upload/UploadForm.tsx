"use client";
import { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import UploadDropzone from "./UploadDropzone";
import UploadProgress from "./UploadProgress";
import UploadPreview from "./UploadPreview";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setUploadError(null);
    setSuccessMessage(null);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://your-backend.com/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed. Please try again.");
      }

      // Simulate Progress Bar
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 20;
        setProgress(progressValue);
        if (progressValue >= 100) clearInterval(interval);
      }, 200);

      setTimeout(() => {
        setUploading(false);
        setSuccessMessage("✅ Upload Successful!");
      }, 1500);

    } catch (error) {
      setUploading(false);
      setUploadError("❌ Failed to upload video. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 3, border: "1px solid #444", borderRadius: 2 }}>
      <UploadDropzone onFileUpload={setFile} />
      <UploadPreview file={file} />
      {progress > 0 && <UploadProgress progress={progress} />}
      {uploadError && <Typography color="error" sx={{ mt: 2 }}>{uploadError}</Typography>}
      {successMessage && <Typography color="success" sx={{ mt: 2 }}>{successMessage}</Typography>}
      
      {file && (
        <Button 
          variant="contained" 
          color="success" 
          sx={{ mt: 2, width: "100%" }} 
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Upload Now"}
        </Button>
      )}
    </Box>
  );
};

export default UploadForm;
