import React from 'react';
import './style.css';
import CustomeTextFeild from '../../atoms/CustomeTextFeild';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  progressHolder: {
    width: '100%',
    background: '#eee',
    height: '4px',
  },
  progress: {
    background: 'orange',
    width: '10%',
    height: '100%',
    borderRadius: '0 10px 10px 0',
  },
}));

const StickyHeader = () => {
  const classes = useStyles();
  return (
    <header>
      <CustomeTextFeild type='text' placeholder='Untitled' />
      <div className={classes.progressHolder}>
        <div className={classes.progress}></div>
      </div>
    </header>
  );
};

export default StickyHeader;
