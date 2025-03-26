"use client";
import { Card, CardContent, Typography } from "@mui/material";

interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <Card sx={{ textAlign: "center", padding: 2, borderRadius: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
