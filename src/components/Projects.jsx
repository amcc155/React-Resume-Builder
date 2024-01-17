const Projects = ({ projectsData }) => {
  return (
    <>
      <h3> Projects </h3>
      <div>
        {projectsData.map((project) => (
          <div className="resumeSection" id="projectsSection">
            <h4>{project.title}</h4>
            <p className="projectSkills">{project.skills}</p>
            
            {project.description? (
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
