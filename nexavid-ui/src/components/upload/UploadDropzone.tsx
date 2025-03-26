"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Button } from "@mui/material";

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB

const UploadDropzone = ({ onFileUpload }: { onFileUpload: (file: File) => void }) => {
  const [error, setError] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/mp4": [],
      "video/quicktime": [], // MOV
      "video/x-msvideo": [], // AVI
    },
    maxFiles: 1,
    onDrop: (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];

      if (uploadedFile.size > MAX_FILE_SIZE) {
        setError("File size exceeds 500MB limit.");
        return;
      }

      setError(null);
      onFileUpload(uploadedFile);
    },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{ border: "2px dashed #fff", p: 4, textAlign: "center", borderRadius: 2, cursor: "pointer", backgroundColor: "#1e1e1e" }}
    >
      <input {...getInputProps()} />
      <Typography variant="h6">Drag & Drop your video file here</Typography>
      <Typography variant="body2" sx={{ color: "gray" }}>(MP4, MOV, AVI | Max 500MB)</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Select File</Button>
      {error && <Typography variant="body2" sx={{ color: "red", mt: 1 }}>{error}</Typography>}
    </Box>
  );
};

export default UploadDropzone;
