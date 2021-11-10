import React, { useContext } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResumeContext } from '../../../Context';

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
  const {
    about,
    social: { link, label },
  } = useContext(ResumeContext);
  const { address, email, phone, city, country, postal_code } = about;
  console.log(address);
  return (
    <>
      {about && (
        <div>
          <div className={classes.about}>
            {(address || country || email || phone) && (
              <>
                <div className={classes.aboutTitle}>
                  <span>CONTACT ME</span>
                </div>
                <div className={classes.aboutme}>
                  {(address || country || city) && (
                    <div>
                      Address: {address}, {country}, {city}, {postal_code}
                    </div>
                  )}
                  {phone && <div>Phone: {phone}</div>}
                  {email && <div>Email: {email}</div>}
                  {link && <div>Link: {link}</div>}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
