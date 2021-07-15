import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  resumeHeader: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveIcon: {
    width: '33.3%',
  },
  change: {
    width: '33.3%',
  },
}));

export default function ResumeHeader() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.resumeHeader}>
        <div className={classes.header}>
          <div className={classes.saveIcon}>
            <i class='fas fa-cloud-download-alt'></i> Save
          </div>
          <div className={classes.change}>
            <i class='fas fa-chevron-left'></i> 1/1 &nbsp;
            <i class='fas fa-chevron-right'></i>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
