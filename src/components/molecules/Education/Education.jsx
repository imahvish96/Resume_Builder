import React from 'react';
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

export default function Education() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const showEditionalDetails = () => {
    setChecked(prev => !prev);
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
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography className={classes.heading}>(Not Specified)</Typography>
            <Typography variant='subtitle2'>Jul 2021 - Jul 2021</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id='cardName'
                  label='Name on card'
                  fullWidth
                  autoComplete='cc-name'
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id='expDate'
                  label='Expiry date'
                  fullWidth
                  autoComplete='cc-exp'
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id='cvv'
                  label='CVV'
                  fullWidth
                  autoComplete='cc-csc'
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id='expDate'
                  label='Expiry date'
                  fullWidth
                  autoComplete='cc-exp'
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  label='Name on card'
                  fullWidth
                  autoComplete='cc-name'
                  variant='filled'
                  id='filled-multiline-static'
                  multiline
                  rows={10}
                  defaultValue='The quick brown fox jump over the little lazy dog. Committed to utilizing my skills to further the mission of a company. Adept in various social media platforms and office technology programs. Bringing forth a motivated attitude and a variety of powerful skills. Adept in general accounting and finance transactions. Dedicated Customer Service Representative dedicated to providing quality care for ultimate customer satisfaction.'
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Button color='primary' onClick={showEditionalDetails}>
        Add Education
      </Button>
    </Box>
  );
}
