import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import Input from './Input';

export default function CustomTimeFormat() {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimeField']}>
        
        <TimeField
          className='rounded-2xl  outline-none'
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="HH:mm"
          size='small'
          variant='standard'
        />
        
      </DemoContainer>
    </LocalizationProvider>
  );
}