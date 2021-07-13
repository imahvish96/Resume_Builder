import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputCotainer: {
    padding: '30px 0px',
    display: 'flex',
    justifyContent: 'center',
  },
  CustomeTextFeild: {
    fontSize: '25px',
    border: 'none',
    textAlign: 'center',
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
  },
}));

export default function CustomeTextFeild(props) {
  const classes = useStyles();
  return (
    <div className={classes.inputCotainer}>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className={classes.CustomeTextFeild}
        size='50'
      />
    </div>
  );
}
