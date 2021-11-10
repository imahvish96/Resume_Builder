import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StickyHeader from '../Header/StickyHeader';
import Collapse from '@material-ui/core/Collapse';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ResumeContext } from '../../../Context';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(2, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Employment({ index }) {
  const classes = useStyles();
  const { exp } = useContext(ResumeContext);

  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>
            {exp.job_title ? exp.job_title : '(Not Specified)'}
          </Typography>
          &nbsp;
          <Typography variant='subtitle2'>{exp.date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id='jobTitle'
                label='Job Title'
                name='job_title'
                fullWidth
                autoComplete='job-title'
                variant='filled'
                data-index={index}
                data-test-id='employment_History'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='employer'
                name='employer'
                label='Employer'
                fullWidth
                autoComplete='emp'
                variant='filled'
                data-index={index}
                data-test-id='employment_History'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='year'
                label='Year'
                name='date'
                fullWidth
                autoComplete='cc-csc'
                variant='filled'
                data-index={index}
                data-test-id='employment_History'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='city'
                label='City'
                name='city'
                fullWidth
                autoComplete='cc-exp'
                variant='filled'
                data-index={index}
                data-test-id='employment_History'
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label='Description'
                name='description'
                fullWidth
                autoComplete='cc-name'
                variant='filled'
                id='filled-multiline-static'
                multiline
                rows={5}
                data-index={index}
                data-test-id='employment_History'
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default function EmploymentHistory() {
  const { exp, setExp } = useContext(ResumeContext);
  const createNewEmp = () => {
    setExp([...exp, {}]);
  };

  return (
    <Box mb={5}>
      <Box mb={2}>
        <Typography variant='h6'>
          <strong>Employment History</strong>
        </Typography>
        <Typography variant='subtitle2'>
          Include Your last 10 years of relevant experience and dates in this
          section. List your most recent position first.
        </Typography>
      </Box>
      {exp.map((item, index) => (
        <Employment index={index} />
      ))}
      <Button color='primary' onClick={createNewEmp}>
        Add Employment
      </Button>
    </Box>
  );
}
