import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  profileWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    border: '1px solid #fff',
    width: '100px',
    height: '100px',
    borderRadius: '100%',
  },
}));

export default function IntrestsView() {
  const classes = useStyles();
  return (
    <Box className={classes.profileWrapper}>
      <div className={classes.profile}></div>
    </Box>
  );
}
