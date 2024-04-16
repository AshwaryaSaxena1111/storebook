import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ backgroundColor, label, type }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch', alignItems:'center' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type={type} label={label} /> {/* Set the type prop */}
    </Box>
  );
}