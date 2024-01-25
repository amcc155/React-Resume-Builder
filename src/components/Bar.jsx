import PersonalDetails from "./PersonalDetails";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectForm from "./ProjectForm";
import { useState } from "react";

function Bar({ handleInput, setData, data}) {
  const [forms, setForm] = useState({
    education: [<EducationForm key={0} handleInput={handleInput} index={0} />],
    experience: [
      <ExperienceForm key={0} handleInput={handleInput} index={0} />,
    ],
    projects: [
      <ProjectForm key = {0} handleInput={handleInput} index = {0} />
    ]
  });

  const handleForm = (formType) => {
    const form = forms[formType]
    const index = form.length;
    const newForm = formType === "education" ? (
      <EducationForm key={index} handleInput={handleInput} index={index} />
    ) : formType === "experience" ? (
      <ExperienceForm key={index} handleInput={handleInput} index={index} />
    ) : formType === 'projects' ?(
      <ProjectForm key = {index} handleInput={handleInput} index={index} />
    ) :null;
  

    setForm({ ...forms, [formType]: [...form, newForm] });
  };

  const deleteForm = (formType, index) => {
    //delete the specified form from the state
    const form = forms[formType]
    const updatedForm = form.filter((f,i) => i !== index)
    console.log(updatedForm);
    setForm({...forms, [formType]: updatedForm})
    //delete the data that the form created
    const updatedData = { ...data };
    updatedData[formType] = updatedData[formType].filter((item, i) => i !== index); 
    setData(updatedData);
  }

  return (
    <div className="sideBar">
      <PersonalDetails handleInput={handleInput} />

      {forms.education.map((form, index) => (
        <>
        <div key={index}> {form} </div>
        <button onClick={() => deleteForm('education', index)} > delete </button>
        </>
        
      ))}
      {forms.education.length < 3 && (
        <button onClick={() => handleForm('education')}>Add Education</button>
      )}

      {forms.experience.map((form, index) => (
        <div key={index}> {form} </div>
      ))}
      {forms.experience.length < 3 && (
        <button onClick={() => handleForm('experience')}>Add Experience</button>
      )}

      {forms.projects.map((form,index) => (
        <div key = {index} > {form} </div>
              ))}

        {forms.projects.length < 3 && (
          <button onClick={()=> handleForm('projects')} > Add Project </button>
        )}
    </div>
  );
}

export default Bar;
