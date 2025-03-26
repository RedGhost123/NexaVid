"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const PromptInput = ({ onGenerate }: { onGenerate: (prompt: string) => void }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Describe Your AI Video
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter text prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ mt: 2, backgroundColor: "#fff", borderRadius: 1 }}
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => onGenerate(prompt)}>
        Generate Video
      </Button>
    </Box>
  );
};

export default PromptInput;
