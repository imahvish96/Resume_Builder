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

const Social = ({ index }) => {
  const classes = useStyles();
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>(Not Specified)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id='Label'
                label='Label'
                fullWidth
                autoComplete='cc-name'
                variant='filled'
                data-test-id='social_Link'
                data-index={index}
                name='label'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='links'
                label='Links'
                fullWidth
                autoComplete='cc-exp'
                variant='filled'
                data-test-id='social_Link'
                data-index={index}
                name='links'
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default function Education() {
  const { social, setSocial } = useContext(ResumeContext);
  const addNewLink = () => {
    setSocial([...social, {}]);
  };
  return (
    <Box mb={5}>
      <Box mb={2}>
        <Typography variant='h6'>
          <strong>Websites &amp; Social Links</strong>
        </Typography>
        <Typography variant='subtitle2'>
          You can add links to websites you wants hiring managers to see!
          Prehaps it will be a link to your portfolio, Linkdin profile or
          personal webiste
        </Typography>
      </Box>
      {social.map((item, index) => (
        <Social index={index} />
      ))}
      <Button color='primary' onClick={addNewLink}>
        Add Link
      </Button>
    </Box>
  );
}
