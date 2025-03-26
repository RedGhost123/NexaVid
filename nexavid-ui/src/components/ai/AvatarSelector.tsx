"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const avatars = ["Avatar 1", "Avatar 2", "Avatar 3", "Avatar 4"];

const AvatarSelector = ({ onSelect }: { onSelect: (avatar: string) => void }) => {
  const [selected, setSelected] = useState("");

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Choose an AI Avatar
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {avatars.map((avatar) => (
          <Button
            key={avatar}
            variant={selected === avatar ? "contained" : "outlined"}
            onClick={() => {
              setSelected(avatar);
              onSelect(avatar);
            }}
          >
            {avatar}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default AvatarSelector;
