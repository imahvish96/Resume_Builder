import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ChipInput from '../../atoms/ChipInput/ChipInput';

export default function Education() {
  return (
    <Box mb={5}>
      <Box mb={1}>
        <Typography variant='h6'>
          <strong>Skills</strong>
        </Typography>
      </Box>
      <Box>
        <ChipInput />
      </Box>
    </Box>
  );
}
