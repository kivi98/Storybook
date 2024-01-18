import { createTheme } from '@mui/material/styles';

const Xb_common = () => ({
    palette: {
        primary: {
            main: '#FF7518',
        },
        secondary: {
            main: '#FC9A57',
        },
        success: {
            main: '#4BB543',
        },
        error: {
            main: '#FF0000',
        },
        info: {
            main: '#949494',
        },
        warning: {
            main: '#C7C700',
        },
        common: {
            white: '#FFFFFF',
            black: '#000000',
        }
    }
});

export default Xb_common;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#333333',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FC9A57',
            contrastText: '#FFFFFF',
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
            contrastText: '#000000',
        },
        secondary: {
            main: '#FC9A57',
            contrastText: '#000000',
        },
    },
});
