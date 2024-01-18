
import { useState } from "react";
const Projects = ({ projectsData, data, setData}) => {
  const [hover, setHover] = useState(false);

  
  const deleteClick = (formType, index) => {
    const updatedSection = { ...data };
    updatedSection[formType] = updatedSection[formType].filter(
      (s, i) => i != index
      
    );
    setData(updatedSection);
  };

  return (
    <>
      <h3> Projects </h3>
      <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{ border: hover ? "1px solid yellow" : "none" }}>
        {projectsData.map((project, index) => (
          <div className="resumeSection" id="projectsSection">
            <h4>{project.title}</h4>
            <p className="projectSkills">{project.skills}</p>
            {hover &&(
              <button onClick={() => deleteClick('projects', index)}> Delete Section </button>
            )}
            {project.description ? (
              <ul>
                {project.description.map((description, index) => (
                  <li key={index}> {description} </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};
export default Projects;
