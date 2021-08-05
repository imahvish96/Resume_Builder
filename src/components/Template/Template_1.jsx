import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import About from '../molecules/AboutView/About';
import Name from '../molecules/NameAndProfile/Name';
import Profile from '../molecules/Profile/Profile';
import Education from '../molecules/EducationView/EducationView';
import Employment from '../molecules/EmploymentView/EmploymentView';
import Contact from '../molecules/ContactView/ContactView';
import Intrests from '../molecules/IntrestsView/IntrestsView';
import Skills from '../molecules/SkillsView/SkillsView';
import { ResumeContext } from '../../Context';
import './Style.css';

const useStyles = makeStyles(theme => ({
  sidebar: {
    width: '35%',
    height: '640px',
    background: '#302d31',
    boxSizing: 'border-box',
    padding: '40px 10px',
  },
  main: {
    width: '65%',
    background: '#fff',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
  },
}));

export default function Template_1(props) {
  const classes = useStyles();
  const { about } = useContext(ResumeContext);

  return (
    <div style={{ display: 'flex', margin: '0px 0 10px' }} id='content'>
      <Box className={classes.sidebar}>
        <Profile />
        {about.first_name && (
          <>
            <Name />
            <Divider
              style={{
                background: '#eee',
                margin: '4px auto',
                width: '20px',
              }}
            />
          </>
        )}
        <Contact />
        <Intrests />
        <Skills />
      </Box>
      <Box className={classes.main}>
        <About />
        <Education />
        <Employment />
      </Box>
    </div>
  );
}
