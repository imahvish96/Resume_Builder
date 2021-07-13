import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StickyHeader from '../../molecules/Header/StickyHeader';
import PersonalDetails from '../../molecules/PersonalDetails/PersonalDetails';

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
        </form>
      </div>
    </>
  );
};

export default ResumeDetails;
