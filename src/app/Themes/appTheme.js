import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF7518',
            bg: '#333333',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff0000',
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FF7518',
            bg: '#ffffff',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff0000',
        },
    },
});