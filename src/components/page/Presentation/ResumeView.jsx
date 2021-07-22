import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResumeHeader from '../../atoms/ResumeHeader';
import ResumeFooter from '../../atoms/ResumeFooter';
import Template1 from '../../Template/Template_1';
import mockData from '../../../resume';

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
    background: 'transparent',
    width: '60%',
    margin: '0px auto',
    height: '84vh',
    borderRadius: '8px ',
    overflow: 'auto',
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [state, setState] = React.useState([1]);
  const [data, setData] = React.useState(mockData);
  const [about, setAbout] = React.useState(null);
  const [education, setEducation] = React.useState(null);

  useEffect(() => {
    const view = document.getElementById('content');
    let viewHeight = view.offsetHeight;
    let currentHeight = 0;
    let count = 1;
    if (viewHeight >= 540) {
      setState(prevState => [...prevState, count + 1]);
    }
    getBasicInfo();
  }, []);

  const getBasicInfo = () => {
    let basicInfo = [];
    let edu = [];
    data.forEach(ele => {
      if (ele.about) {
        basicInfo.push(ele.about);
      }
      if (ele.education) {
        edu.push(ele.education);
      }
    });
    setAbout(basicInfo);
  };

  console.log(about);

  return (
    <div item xs={false} sm={4} md={7} className={classes.image}>
      <ResumeHeader />
      <div className={classes.resumeWrapper}>
        {state.map(sheet => (
          <Template1 about={about} />
        ))}
      </div>
      <ResumeFooter />
    </div>
  );
}
