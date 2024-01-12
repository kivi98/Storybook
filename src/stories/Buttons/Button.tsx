import React from 'react';
import { Button } from "@mui/material";

interface ButtonProps {
  category: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  label: string;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const colorMappings = {
  primary: {
    backgroundColor: '#FF7518',
    borderColor: '#FF7518',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: '#FF7518',
    color: '#FF7518',
  },
  success: {
    backgroundColor: '#4BB543',
    borderColor: '#4BB543',
    color: 'white',
  },
  error: {
      backgroundColor: '#FF0000',
      borderColor: '#FF0000',
      color: 'white',
  },
  info: {
      backgroundColor: '#949494',
      borderColor: '#949494',
      color: 'white',
  },
  warning: {
      backgroundColor: '#C7C700',
      borderColor: '#C7C700',
      color: 'white',
  },
};

function darken(color: string) {
    const trimmedHex = color.slice(1).trim();
    const [r, g, b] = [
        parseInt(trimmedHex.slice(0, 2), 16),
        parseInt(trimmedHex.slice(2, 4), 16),
        parseInt(trimmedHex.slice(4, 6), 16),
    ];
    const darkenedRgb = [Math.floor(r * 0.9), Math.floor(g * 0.9), Math.floor(b * 0.9)];
    return `#${darkenedRgb.map(component => component.toString(16).padStart(2, '0')).join('')}`;
}

export const Xb_Button = ({
    category,
    label,
    onClick,
    size = 'medium',
  }: ButtonProps) => {
  const { backgroundColor, borderColor, color } = colorMappings[category];
  const hoverColor = darken(backgroundColor);
  const hoverBorderColor = darken(borderColor);

  return (
      <Button
          variant={category === 'secondary' ? 'outlined' : 'contained'}
          onClick={onClick}
          sx={{
            textTransform: 'none',
            backgroundColor,
            borderColor,
            color,
            '&:hover': {
              backgroundColor: hoverColor,
              borderColor: hoverBorderColor,
            },
          }}
          size={size}
      >
        {label}
      </Button>
  );
};
