import react from 'react';
import { TextField } from "@mui/material";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: react.ChangeEvent<HTMLInputElement>) => void;
}

export const Xb_TextField = ({
  label,
  placeholder,
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField
      variant={'outlined'}
      size={'small'}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main',
            },
        }
        }
      }
    />
  );
};

