import PersonalDetails from "./PersonalDetails";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";

function Bar({ handleInput }) {
  const [educationForm, addEducationForm] = useState([
    <EducationForm key={0} handleInput={handleInput} index={0} />,
  ]);
  //fuction that will respond to add another education button
  const handleAddEducationForm = () => {
    const index = educationForm.length;
    const newEducationForm = [
      ...educationForm,
      <EducationForm key={index} handleInput={handleInput} index={index} />,
    ];
    addEducationForm(newEducationForm);
  };

  return (
    <div className="sideBar">
      <PersonalDetails handleInput={handleInput} />

      {educationForm.map((forms, index) => (
        <div key={index}> {forms} </div>
      ))}
         
     {educationForm.length <= 3 && (
        <button onClick={handleAddEducationForm}>Add</button>
      )}

      <ExperienceForm handleInput={handleInput} />
    </div>
  );
}
export default Bar;
