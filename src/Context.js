import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();
export const ResumeProvider = ResumeContext.Provider;

const Context = props => {
  const [about, setAbout] = useState({});
  const [exp, setExp] = useState({});
  const [edu, setEdu] = useState({});
  const [skills, setSkills] = useState([]);
  const [social, setSocial] = useState({});
  const [profile, setProfile] = useState();

  const onFormChange = e => {
    if (!e.target.offsetParent && e.target.name === 'profile') {
      console.log(e.target.files[0]);
      let reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) setProfile(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setAbout({ ...about, [e.target.name]: e.target.value });
    } else {
      let category =
        e.target.offsetParent.parentNode.getAttribute('data-test-id');
      switch (category) {
        case 'personal_details':
        case 'professional_Summery':
          setAbout({ ...about, [e.target.name]: e.target.value });
          break;
        case 'employment_History':
          setExp({ ...exp, [e.target.name]: e.target.value });
          break;
        case 'education':
          setEdu({ ...edu, [e.target.name]: e.target.value });
          break;
        case 'social_Link':
          setSocial({ ...social, [e.target.name]: e.target.value });
          break;
        default:
          console.log('noting found!!');
      }
    }
  };
  return (
    <ResumeProvider
      value={{
        about,
        edu,
        exp,
        skills,
        social,
        onFormChange,
        setSkills,
        profile,
      }}>
      {props.children}
    </ResumeProvider>
  );
};

export default Context;
