'use client';
import { Box } from '@mui/material';
import { Xb_Button } from '@/stories/Buttons/Button';
import { Xb_TextField } from '@/stories/TextFields/TextField';
export default function Home() {
  return (
    <>
        <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <Xb_Button
                label={'Secondary'}
                category={'error'}
                size={'large'}
            />
            <Xb_TextField label={'Name'} placeholder={'Please Enter your name'} />
        </Box>
    </>
  )
}
