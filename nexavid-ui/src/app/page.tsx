"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" fontWeight="bold">
            AI-Powered Video Generation
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, color: "gray" }}>
            Create ultra-realistic AI videos with NexaVid
          </Typography>
          <Link href="/dashboard">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 4 }}
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </Box>

      {/* Demo Video */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          See NexaVid in Action
        </Typography>
        <Box component="video" controls width="80%" sx={{ mt: 3, borderRadius: 2 }}>
          <source src="/demo.mp4" type="video/mp4" />
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Key Features
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
          🎥 AI-Powered Video Generation  
          🗣️ Realistic Lip-Sync & Voice Cloning  
          🌍 High-Quality 4K Video Output  
          🧑‍🎨 AI-Driven Avatars & Custom Animations  
        </Typography>
      </Box>
    </Container>
  );
}
