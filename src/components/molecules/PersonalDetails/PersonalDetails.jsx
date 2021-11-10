import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
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
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function PersonalDetails() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [defaultAvtar, setDefaultAvtar] = React.useState(
    './defaultProfile.jpg'
  );
  const { profile } = useContext(ResumeContext);

  const showEditionalDetails = () => {
    setChecked(prev => !prev);
  };

  return (
    <Box mb={4}>
      <Box mb={2} contenteditable='true'>
        <Typography variant='h6'>
          <strong>Personal Details</strong>
        </Typography>
      </Box>
      <Collapse Collapse in={checked} collapsedSize={230}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id='personalDetails_cardName'
              name='job_title'
              label='Wanted Job Title'
              fullWidth
              autoComplete='cc-name'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display='flex' alignItems='center'>
              <Avatar
                variant='square'
                alt='Remy Sharp'
                src={profile && profile ? profile : defaultAvtar}
                className={classes.large}
                style={{ background: '#f2f5fa' }}
              />
              <Box ml={2}>
                <Button variant='text' component='label' color='primary'>
                  Upload File
                  <input type='file' name='profile' hidden />
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='first_name'
              name='first_name'
              label='First Name'
              fullWidth
              autoComplete='cc-exp'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='last_name'
              name='last_name'
              label='Last Name'
              fullWidth
              autoComplete='cc-csc'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='cc-exp'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='phone'
              name='phone'
              label='Phone'
              fullWidth
              autoComplete='cc-csc'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='country'
              name='country'
              label='Country'
              fullWidth
              autoComplete='cc-exp'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='city'
              name='city'
              label='City'
              fullWidth
              autoComplete='cc-csc'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='address'
              name='address'
              label='Address'
              fullWidth
              autoComplete='cc-exp'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='postal_code'
              name='postal_code'
              label='Postal Code'
              fullWidth
              autoComplete='cc-csc'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='nationality'
              name='nationality'
              label='Nationality'
              fullWidth
              autoComplete='cc-csc'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='place_of_birth'
              name='place_of_birth'
              label='Place of Birth'
              fullWidth
              autoComplete='cc-exp'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='dob'
              name='dob'
              label='Date of Birth'
              fullWidth
              autoComplete='cc-csc'
              variant='filled'
              data-test-id='personal_details'
            />
          </Grid>
        </Grid>
      </Collapse>
      <Button color='primary' onClick={showEditionalDetails}>
        Edit Editiional Details
      </Button>
    </Box>
  );
}
