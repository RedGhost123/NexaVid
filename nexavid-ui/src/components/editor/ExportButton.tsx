"use client";
import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";

const ExportButton = ({ onExport }: { onExport: () => void }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleExport = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onExport();
    }, 3000);
  };

  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleExport}
        disabled={isProcessing}
      >
        {isProcessing ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Export Video"}
      </Button>
    </Box>
  );
};

export default ExportButton;
