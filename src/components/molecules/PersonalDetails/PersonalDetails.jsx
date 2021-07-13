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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  labelRoot: {
    fontSize: 30,
    color: 'red',
    '&$labelFocused': {
      color: 'purple',
    },
  },
  detailsHolder: {
    overflow: 'hidden',
    height: '230px',
    transition: '0.3s',
  },
  hidenDetails: {
    height: 'auto',
    transition: '0.3s',
  },
}));

export default function PersonalDetails() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const showEditionalDetails = () => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <Box mb={2}>
        <Typography variant='h6'>
          <strong>Payment method</strong>
        </Typography>
      </Box>
      <Collapse Collapse in={checked} collapsedSize={230}>
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
            <Button variant='contained' component='label'>
              Upload File
              <input type='file' hidden />
            </Button>
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
        </Grid>
      </Collapse>
      <Button color='primary' onClick={showEditionalDetails}>
        Edit Editiional Details
      </Button>
    </div>
  );
}
