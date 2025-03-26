"use client";
import { useState } from "react";
import { Box, Container, Typography, Button, CircularProgress } from "@mui/material";
import PromptInput from "@components/ai/PromptInput";
import AvatarSelector from "@components/ai/AvatarSelector";
import LivePreview from "@components/ai/LivePreview";

export default function GenerateAI() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    setErrorMessage(null);
    setVideoUrl(null);

    try {
      const response = await fetch("https://your-backend.com/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, avatar }),
      });

      if (!response.ok) {
        throw new Error("AI generation failed. Please try again.");
      }

      const data = await response.json();
      setVideoUrl(data.videoUrl); // Get actual AI-generated video URL

    } catch (error) {
      setErrorMessage("❌ Failed to generate AI video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold">
        AI Video Generator
      </Typography>

      <PromptInput onGenerate={handleGenerate} />
      <AvatarSelector onSelect={setAvatar} />
      
      {loading && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress />
          <Typography>Generating AI Video...</Typography>
        </Box>
      )}

      {errorMessage && <Typography color="error" sx={{ mt: 2 }}>{errorMessage}</Typography>}

      <LivePreview videoUrl={videoUrl} />

      {videoUrl && (
        <Button 
          variant="contained" 
          color="success" 
          sx={{ mt: 3, width: "100%" }} 
          href={videoUrl} 
          target="_blank"
        >
          Watch AI Video
        </Button>
      )}
    </Container>
  );
}
