import React from "react";
import { Chip } from "@mui/material";

// defines a TypeScript type for a component's props
interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  // dynamically displays a label and color based on the count value
  return <Chip label={count} color={count > 0 ? "primary" : "default"} />;
};

export default Badge;
