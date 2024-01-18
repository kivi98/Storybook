import React from 'react';
import { Button } from "@mui/material";
import Xb_common  from '../GlobalTheme';

const Xb_button = Xb_common();
interface ButtonProps {
    category: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    label: string;
    size: 'small' | 'medium' | 'large';
    onClick?: () => void;
}



const colorMappings = {
    primary: {
        backgroundColor: Xb_button.palette.primary.main,
        borderColor: Xb_button.palette.primary.main,
        color: Xb_button.palette.common.white,
    },
    secondary: {
        backgroundColor: 'transparent',
        borderColor: Xb_button.palette.secondary.main,
        color: Xb_button.palette.primary.main,
    },
    success: {
        backgroundColor: Xb_button.palette.success.main,
        borderColor: Xb_button.palette.success.main,
        color: Xb_button.palette.common.white,
    },
    error: {
        backgroundColor: Xb_button.palette.error.main,
        borderColor: Xb_button.palette.error.main,
        color: Xb_button.palette.common.white,
    },
    info: {
        backgroundColor: Xb_button.palette.info.main,
        borderColor: Xb_button.palette.info.main,
        color: Xb_button.palette.common.white,
    },
    warning: {
        backgroundColor: Xb_button.palette.warning.main,
        borderColor: Xb_button.palette.warning.main,
        color: Xb_button.palette.common.white,
    },
};

function darken(color: string) {
    if (color=== 'transparent') {
        return 'blur(5px)';
    }else {
        const trimmedHex = color.slice(1).trim();
        const [r, g, b] = [
            parseInt(trimmedHex.slice(0, 2), 16),
            parseInt(trimmedHex.slice(2, 4), 16),
            parseInt(trimmedHex.slice(4, 6), 16),
        ];
        const darkenedRgb = [Math.floor(r * 0.9), Math.floor(g * 0.9), Math.floor(b * 0.9)];
        return `#${darkenedRgb.map(component => component.toString(16).padStart(2, '0')).join('')}`;
    }
}
export const Xb_Button = ({
                              category,
                              label,
                              onClick,
                              size = 'medium',
                          }: ButtonProps) => {
    const { backgroundColor, borderColor, color } = colorMappings[category];
    const hoverColor = darken(backgroundColor);
    let hoverBorderColor = darken(borderColor);
    if (category === 'secondary') {
        hoverBorderColor = '#FF7518';
    }
    return (
        <Button
            variant={'outlined' || 'contained' || 'text'}
            onClick={onClick}
            sx={{
                textTransform: 'none',
                backgroundColor,
                borderColor,
                color,
                boxShadow: '1px 1px 5px px rgba(0,0,0,0.2)',
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
