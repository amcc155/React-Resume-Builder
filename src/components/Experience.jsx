import { useState } from "react";
const Experience = ({ experienceData, data, setData}) => {

  const [hover, setHover] = useState(false);

  const deleteClick = (formType, index) => {
    const updatedSection = { ...data };
    updatedSection[formType] = updatedSection[formType].filter(
      (s, i) => i !== index
    );
    setData(updatedSection);
  };

  return (
    <div>
      <h3> Experience </h3>
      {experienceData.map((experience, index) => (
        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{ border: hover ? "1px solid yellow" : "none" }}
        >
          <div className="title" key={experience.title}>
        
            {experience.title}
          </div>
          <p key={experience.company}> {experience.company} </p>

          {hover && (
            <button onClick={() => deleteClick("experience", index)}>
              
              Delete Section
            </button>
          )}
          <ul>
            {experience.description.map((description) => (
              <li key={description.name}> {description} </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Experience;
