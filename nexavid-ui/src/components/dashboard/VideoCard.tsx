"use client";

import { useRouter } from "next/navigation";  // Import Next.js router
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  createdAt: string;
}

const VideoCard = ({ title, thumbnail, createdAt }: VideoCardProps) => {
  const router = useRouter(); // Initialize Next.js router

  return (
    <Card sx={{ width: "100%", borderRadius: 2, mb: 2, backgroundColor: "#1e1e1e", color: "#fff" }}>
      {/* Video Thumbnail */}
      <CardMedia component="img" height="160" image={thumbnail} alt={title} />

      {/* Video Details */}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="gray">
          Created: {createdAt}
        </Typography>

        {/* Edit Video Button */}
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => router.push("/editor")} // Navigate to AI Video Editor
          >
            Edit Video
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
