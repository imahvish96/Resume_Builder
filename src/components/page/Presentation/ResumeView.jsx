import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'fixed',
    right: '0px',
    width: '50%',
  },
  resumeWrapper: {
    background: '#fff',
    width: '60%',
    margin: '50px auto',
    height: '84vh',
    borderRadius: '8px ',
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div item xs={false} sm={4} md={7} className={classes.image}>
      <div className={classes.resumeWrapper} />
    </div>
  );
}
