import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StickyHeader from '../../molecules/Header/StickyHeader';
import PersonalDetails from '../../molecules/PersonalDetails/PersonalDetails';
import ProfessionalSummery from '../../molecules/ProfessionalSummery/ProfessionalSummery';
import EmploymentHistory from '../../molecules/EmploymentHistory/Employment';
import Education from '../../molecules/Education/Education';
import SocialLinks from '../../molecules/SocialLinks/SocialLInks';
import Skills from '../../molecules/Skills/Skills';
import data from '../../../resume';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(2, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const ResumeDetails = () => {
  const classes = useStyles();
  return (
    <>
      <StickyHeader />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <PersonalDetails />
          <ProfessionalSummery />
          <EmploymentHistory />
          <Education />
          <SocialLinks />
          <Skills />
        </form>
      </div>
    </>
  );
};

export default ResumeDetails;
