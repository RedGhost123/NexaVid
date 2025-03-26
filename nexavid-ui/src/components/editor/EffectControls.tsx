"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const effects = ["AI Upscale", "Color Correction", "Cinematic Look", "Slow Motion"];

const EffectControls = ({ onEffectApply }: { onEffectApply: (effect: string) => void }) => {
  const [selectedEffect, setSelectedEffect] = useState("");

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Apply AI Effects</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {effects.map((effect) => (
          <Button
            key={effect}
            variant={selectedEffect === effect ? "contained" : "outlined"}
            onClick={() => {
              setSelectedEffect(effect);
              onEffectApply(effect);
            }}
          >
            {effect}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default EffectControls;
