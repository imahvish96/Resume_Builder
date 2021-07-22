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
        <Typography variant='h5'>
          <strong style={{ fontSize: '13px' }}>Work Exprience</strong>
        </Typography>
        <Divider />
      </Box>

      <Box className={classes.summery} mb={2}>
        <Box>
          <Typography variant='title' style={{ fontSize: '10px' }}>
            <strong>Bachelor Arts</strong>
          </Typography>
        </Box>
        <Typography variant='subtitle' style={{ fontSize: '9px' }}>
          2017-2013
        </Typography>
        <Box style={{ marginTop: '2px' }}>
          <Typography variant='body1' style={{ fontSize: '9px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.summery} mb={2}>
        <Box>
          <Typography variant='title' style={{ fontSize: '10px' }}>
            <strong>Communication Web Design</strong>
          </Typography>
        </Box>
        <Typography variant='subtitle'>2017-2013</Typography>
        <Box style={{ marginTop: '2px' }}>
          <Typography variant='body1' style={{ fontSize: '9px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.summery} mb={1}>
        <Box>
          <Typography variant='title' style={{ fontSize: '10px' }}>
            <strong>Communication Web Design</strong>
          </Typography>
        </Box>
        <Typography variant='subtitle'>2017-2013</Typography>
        <Box style={{ marginTop: '2px' }}>
          <Typography variant='body1' style={{ fontSize: '9px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.summery} mb={1}>
        <Box>
          <Typography variant='title' style={{ fontSize: '10px' }}>
            <strong>Communication Web Design</strong>
          </Typography>
        </Box>
        <Typography variant='subtitle'>2017-2013</Typography>
        <Box style={{ marginTop: '2px' }}>
          <Typography variant='body1' style={{ fontSize: '9px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
