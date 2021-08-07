import React, { useContext, useState } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResumeContext } from '../../../Context';
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
    overflow: 'hidden',
  },
}));

export default function IntrestsView() {
  const classes = useStyles();
  const [defaultProfile, seDefaultProfile] = useState();
  const { profile } = useContext(ResumeContext);
  return (
    <>
      {profile && (
        <Box className={classes.profileWrapper}>
          <div className={classes.profile}>
            <img
              src={profile}
              alt='profile'
              width='100%'
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </Box>
      )}
    </>
  );
}
