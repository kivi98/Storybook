'use client';
import {Box, TextField, Button } from '@mui/material';
import { Xb_Button } from '@/stories/Buttons/Button';
import { Xb_TextField } from '@/stories/TextFields/TextField';
import { darkTheme, lightTheme } from '@/stories/GlobalTheme';
import {ThemeContext} from "@emotion/react";
import React from "react";

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');
const todayStartOfTheDay = today.startOf('day');


export default function Home() {

    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
        <ThemeContext.Provider value={ theme } >
            <Box height={'100vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} bgcolor={theme.palette.primary.main} >
                <Xb_Button
                    label={'Secondary'}
                    category={'secondary'}
                    size={'large'}
                    onClick={toggleDarkMode}
                />
            </Box>
        </ThemeContext.Provider>
    </>
  )
}


{/*    <Xb_TextField label={'Name'} placeholder={'Please Enter your name'} />*/}
{/*    <Button color={'primary'} variant={'outlined'} size={'large'} >Primary</Button>*/}
{/*    <TextField variant={'outlined'}  size={'small'} label={'Name'} placeholder={'Please Enter your name'} />*/}
{/*    <Box gap={2}>*/}
{/*        <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
{/*            <Box display={'flex'} gap={2}>*/}
{/*                <DatePicker*/}
{/*                    // defaultValue={yesterday}*/}
{/*                    // disablePast*/}
{/*                    views={['year', 'month', 'day']}*/}
{/*                    label={'Date'}*/}
{/*                />*/}
{/*                <TimePicker label={'Time'} /*defaultValue={todayStartOfTheDay} disablePast*/ />*/}
{/*                <DateTimePicker*/}
{/*                    label={'Date and Time'}*/}
{/*                    // defaultValue={yesterday}*/}
{/*                    // disablePast*/}
{/*                    views={['year', 'month', 'day', 'hours', 'minutes']}*/}
{/*                />*/}
{/*            </Box>*/}
{/*        </LocalizationProvider>*/}
{/*    </Box>*/}