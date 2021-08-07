import React, { useContext } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResumeContext } from '../../../Context';

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
  const {
    about: { first_name, last_name, job_title },
  } = useContext(ResumeContext);
  return (
    <div>
      {(first_name || last_name || job_title) && (
        <Box className={classes.userName}>
          <h1>{first_name}</h1>
          <h4>{last_name}</h4>
          <span>{job_title}</span>
        </Box>
      )}
    </div>
  );
}
