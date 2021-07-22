import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  summery: {
    fontSize: '11px',
  },
}));

export default function EducationView() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.heading} mb={1}>
        <Typography>
          <strong style={{ fontSize: '13px' }}>Education</strong>
        </Typography>
        <Divider />
      </Box>

      <Box className={classes.summery} mb={1}>
        <Box>
          <Typography variant='title' style={{ fontSize: '10px' }}>
            <strong>Bachelor Arts</strong>
          </Typography>
        </Box>
        <Typography variant='subtitle' style={{ fontSize: '9px' }}>
          Delhi University, Delhi | 2017-2013
        </Typography>
      </Box>

      <Box className={classes.summery} mb={1}>
        <Box>
          <Typography variant='title' style={{ fontSize: '10px' }}>
            <strong>Communication Web Design</strong>
          </Typography>
        </Box>
        <Typography variant='subtitle' style={{ fontSize: '9px' }}>
          Arena Animatin | 2017-2013
        </Typography>
      </Box>
    </div>
  );
}
