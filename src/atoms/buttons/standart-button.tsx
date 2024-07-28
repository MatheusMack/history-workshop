import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonsProps {
  spacing: number;
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  text: string;
  variant: "text" | "outlined" | "contained";
}

const BasicButtons: React.FC<BasicButtonsProps> = ({ spacing, direction = "row", text = "Default Text", variant = "text" }) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Button variant={variant}>{text}</Button>
    </Stack>
  );
}

export default BasicButtons;
