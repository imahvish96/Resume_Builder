import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();
export const ResumeProvider = ResumeContext.Provider;

const Context = props => {
  const [about, setAbout] = useState({}); // about: {[e.target.name]: value,  }
  const [exp, setExp] = useState({});
  const [edu, setEdu] = useState({});
  const [skills, setSkills] = useState({});
  const [social, setSocial] = useState({});

  const onFormChange = e => {
    let category =
      e.target.offsetParent.parentNode.getAttribute('data-test-id');
    switch (category) {
      case 'personal_details':
      case 'professional_Summery':
        setAbout({ ...about, [e.target.name]: e.target.value });
        break;
      case 'employment_History':
        console.log(category);
        setExp({ ...exp, [e.target.name]: e.target.value });
        break;
      case 'education':
        setEdu({ ...edu, [e.target.name]: e.target.value });
        break;
      case 'social_Link':
        setSocial({ ...social, [e.target.name]: e.target.value });
        break;
      case 'skills':
        setSkills({ ...skills, [e.target.name]: e.target.value });
        break;
      default:
        console.log('noting found!!');
    }
  };

  return (
    <ResumeProvider value={{ about, edu, exp, skills, social, onFormChange }}>
      {props.children}
    </ResumeProvider>
  );
};

export default Context;
