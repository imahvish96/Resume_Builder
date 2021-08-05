import React, { useContext } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResumeContext } from '../../../Context';

const useStyles = makeStyles(theme => ({
  summery: {
    fontSize: '11px',
  },
}));

export default function IntrestsView() {
  const classes = useStyles();
  const { about } = useContext(ResumeContext);
  const { description } = about;
  return (
    <>
      {about && about.description ? (
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
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
