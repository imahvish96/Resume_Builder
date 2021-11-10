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
  const { exp } = useContext(ResumeContext);

  return (
    <div>
      {exp[0].job_title && (
        <Box className={classes.heading} mb={1}>
          <Typography variant='h5'>
            <strong style={{ fontSize: '13px' }}>Work Exprience</strong>
          </Typography>
          <Divider />
        </Box>
      )}
      {exp.map(({ job_title, date, description, employer, city }) => (
        <div>
          <Box className={classes.summery} mb={2}>
            <Box>
              <Typography variant='title' style={{ fontSize: '10px' }}>
                <span className='item'>
                  <strong>{job_title && `${job_title}, `}</strong>
                  <strong>{employer && `${employer}, `}</strong>
                  <strong>{city}</strong>
                </span>
              </Typography>
            </Box>
            <Typography variant='subtitle' style={{ fontSize: '9px' }}>
              {date}
            </Typography>
            <Box style={{ marginTop: '2px' }}>
              <Typography variant='body1' style={{ fontSize: '9px' }}>
                {description}
              </Typography>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
}
