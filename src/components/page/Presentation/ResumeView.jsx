import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResumeHeader from '../../atoms/ResumeHeader';
import ResumeFooter from '../../atoms/ResumeFooter';
import Template1 from '../../Template/Template_1';
import mockData from '../../../resume';

const useStyles = makeStyles(theme => ({
  image: {
    backgroundColor: '#7a8599',
    height: '100vh',
    position: 'fixed',
    right: '0px',
    width: '50%',
  },
  resumeWrapper: {
    background: 'transparent',
    width: '60%',
    margin: '0px auto',
    height: '84vh',
    borderRadius: '8px ',
    overflow: 'auto',
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const [state, setState] = React.useState([1]);
  const [data, setData] = React.useState(mockData);

  return (
    <div item xs={false} sm={4} md={7} className={classes.image}>
      <ResumeHeader />
      <div className={classes.resumeWrapper}>
        {state.map(sheet => (
          <Template1 />
        ))}
      </div>
      <ResumeFooter />
    </div>
  );
}
