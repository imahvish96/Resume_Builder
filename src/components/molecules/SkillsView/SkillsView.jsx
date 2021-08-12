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

export default function SkillsView() {
  const classes = useStyles();
  const { skills } = useContext(ResumeContext);
  console.log(skills);
  return (
    <>
      {skills && skills.length > 0 && (
        <div className={classes.about}>
          <div className={classes.aboutTitle}>
            <span>SKILLS</span>
          </div>
          <div className={classes.aboutme}>
            {skills &&
              skills.map(skill => <span>{skill} &nbsp; | &nbsp;</span>)}
          </div>
        </div>
      )}
    </>
  );
}
