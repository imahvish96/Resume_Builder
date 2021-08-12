import React, { useContext } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResumeContext } from '../../../Context';

const useStyles = makeStyles(theme => ({
  summery: {
    fontSize: '11px',
  },
}));

export default function EducationView() {
  const classes = useStyles();
  const { edu } = useContext(ResumeContext);
  const { school, degree, date, city, description } = edu;
  // console.log(edu);
  return (
    <div>
      {edu && edu.school ? (
        <>
          <Box className={classes.heading} mb={1}>
            <Typography>
              <strong style={{ fontSize: '13px' }}>Education</strong>
            </Typography>
            <Divider />
          </Box>

          <Box className={classes.summery} mb={1}>
            <Box>
              <Typography variant='title' style={{ fontSize: '10px' }}>
                <strong>{degree}</strong>
              </Typography>
            </Box>
            <Typography variant='subtitle' style={{ fontSize: '9px' }}>
              {school}, {city} {date}
            </Typography>
          </Box>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
