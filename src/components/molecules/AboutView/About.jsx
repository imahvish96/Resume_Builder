import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  summery: {
    fontSize: '11px',
  },
}));

export default function IntrestsView() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.heading} mb={1}>
        <Typography>
          <strong style={{ fontSize: '13px' }}>About Me</strong>
        </Typography>
        <Divider />
      </Box>

      <Box className={classes.summery} mb={2}>
        <Box style={{ marginTop: '2px' }}>
          <Typography variant='body1' style={{ fontSize: '9px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
