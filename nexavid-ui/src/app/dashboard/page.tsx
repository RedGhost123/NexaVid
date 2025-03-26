"use client";
import { Container, Grid, Typography } from "@mui/material";
import VideoCard from "@components/dashboard/VideoCard";
import StatsCard from "@components/dashboard/StatsCard";
import QuickActions from "@components/dashboard/QuickActions";

const sampleVideos = [
  { title: "AI Generated Ad", thumbnail: "/thumbnails/video1.jpg", createdAt: "March 24, 2025" },
  { title: "AI Short Film", thumbnail: "/thumbnails/video2.jpg", createdAt: "March 22, 2025" },
];

export default function Dashboard() {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold">
        Dashboard
      </Typography>

      <QuickActions />

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={6} sm={3}>
          <StatsCard title="Videos Processed" value="27" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <StatsCard title="AI Credits Left" value="120" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <StatsCard title="Storage Used" value="5.2GB" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <StatsCard title="Subscribers" value="1,240" />
        </Grid>
      </Grid>

      {/* Recent AI-Generated Videos */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Recent AI Videos
      </Typography>
      <Grid container spacing={2}>
        {sampleVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <VideoCard {...video} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
