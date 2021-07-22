import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  about: {
    textAlign: 'center',
    margin: '20px 0',
  },

  aboutTitle: {
    width: '100%',
    '& span': {
      border: '1px solid #fff',
      padding: '2px 15px',
      color: '#fff',
      letterSpacing: '1.5px',
      fontSize: '10px',
    },
  },
  aboutme: {
    fontSize: '8px',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    margin: '10px 0',
    '& p': {
      margin: '0px',
    },
  },
}));

export default function ContactView() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.about}>
        <div className={classes.aboutTitle}>
          <span>CONTACT ME</span>
        </div>
        <div className={classes.aboutme}>
          <div>Address: New York, America</div>
          <div>Phone: +91 9999-88-88</div>
          <div>Email: white009@gmail.com</div>
          <div>Link: www.whitewalker.com</div>
        </div>
      </div>
    </div>
  );
}
