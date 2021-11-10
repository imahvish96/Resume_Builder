import React, { createContext, useState } from 'react';
export const ResumeContext = createContext();
export const ResumeProvider = ResumeContext.Provider;

const Context = props => {
  const [about, setAbout] = useState({});
  const [exp, setExp] = useState([{}]);
  const [edu, setEdu] = useState([{}]);
  const [social, setSocial] = useState([{}]);
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState();

  const onFormChange = e => {
    if (!e.target.offsetParent && e.target.name === 'profile') {
      let reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) setProfile(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setAbout({ ...about, [e.target.name]: e.target.value });
    } else {
      let category =
        e.target.offsetParent.parentNode.getAttribute('data-test-id');
      let id = e.target.offsetParent.parentNode.getAttribute('data-index');
      switch (category) {
        case 'personal_details':
        case 'professional_Summery':
          setAbout({ ...about, [e.target.name]: e.target.value });
          break;
        case 'employment_History':
          let arr = [...exp];
          arr[id][e.target.name] = e.target.value;
          setExp(arr);
          break;
        case 'education':
          let eduArr = [...edu];
          eduArr[id][e.target.name] = e.target.value;
          setEdu(eduArr);
          break;
        case 'social_Link':
          let socialArr = [...social];
          socialArr[id][e.target.name] = e.target.value;
          setSocial(socialArr);
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
        setExp,
        setSocial,
        setEdu,
      }}>
      {props.children}
    </ResumeProvider>
  );
};

export default Context;
