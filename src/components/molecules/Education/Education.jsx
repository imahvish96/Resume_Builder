import React, { useContext } from 'react';
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

const EducationInfo = ({ index }) => {
  const classes = useStyles();
  const { edu } = useContext(ResumeContext);
  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>
            {edu.school ? edu.school : '(Not Specified)'}
          </Typography>
          &nbsp;
          <Typography variant='subtitle2'>{edu.date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id='school'
                label='School'
                name='school'
                fullWidth
                autoComplete='job-title'
                variant='filled'
                data-index={index}
                data-test-id='education'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='degree'
                label='Degree'
                name='degree'
                fullWidth
                autoComplete='emp'
                variant='filled'
                data-index={index}
                data-test-id='education'
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
                data-test-id='education'
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
                data-test-id='education'
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label='Description'
                fullWidth
                autoComplete='cc-name'
                variant='filled'
                id='filled-multiline-static'
                multiline
                rows={10}
                data-index={index}
                data-test-id='education'
                name='description'
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default function Education() {
  const { edu, setEdu } = useContext(ResumeContext);

  const createNewEmp = () => {
    setEdu([...edu, {}]);
  };

  return (
    <Box mb={5}>
      <Box mb={2}>
        <Typography variant='h6'>
          <strong>Education</strong>
        </Typography>
        <Typography variant='subtitle2'>
          If relevant, include your most recent educational achievements here.
        </Typography>
      </Box>
      {edu.map((item, index) => (
        <EducationInfo index={index} />
      ))}
      <Button color='primary' onClick={createNewEmp}>
        Add Education
      </Button>
    </Box>
  );
}
