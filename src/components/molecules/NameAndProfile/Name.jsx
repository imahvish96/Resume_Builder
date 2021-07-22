import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  userName: {
    textAlign: 'center',
    color: '#fff',
    '& h1': {
      fontSize: '23px',
      margin: '10px 0 0px',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '100',
    },
    '& h4': {
      fontSize: '25px',
      margin: '-10px 0px 0px',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '900',
    },
    '& span': {
      fontSize: '9px',
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
    },
  },
}));

export default function IntrestsView() {
  const classes = useStyles();
  return (
    <Box className={classes.userName}>
      <h1>WHITE</h1>
      <h4>WALKER</h4>
      <span>WEB DEVELOPER</span>
    </Box>
  );
}
