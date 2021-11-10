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
import StickyHeader from '../../molecules/Header/StickyHeader';
import Collapse from '@material-ui/core/Collapse';

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
}));

export default function ProfessionalSummery() {
  return (
    <Box mb={5}>
      <Box mb={2}>
        <Typography variant='h6'>
          <strong>Professional Summery</strong>
        </Typography>
        <Typography variant='subtitle2'>
          Include 2-3 clear sentences about your overall experience
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              label='Description'
              fullWidth
              autoComplete='cc-name'
              variant='filled'
              name='description'
              id='filled-multiline-static'
              multiline
              rows={5}
              data-test-id='professional_Summery'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
