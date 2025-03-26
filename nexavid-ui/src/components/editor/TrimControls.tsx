"use client";
import { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";

const TrimControls = ({ onTrimChange }: { onTrimChange: (start: number, end: number) => void }) => {
  const [range, setRange] = useState<number[]>([0, 100]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setRange(newValue);
      onTrimChange(newValue[0], newValue[1]);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Trim Video</Typography>
      <Slider
        value={range}
        onChange={handleChange}
        min={0}
        max={100}
        step={1}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default TrimControls;
