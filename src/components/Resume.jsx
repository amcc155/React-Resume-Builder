// add feature where you can delete on hover, take index from
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";


const Resume = ({ data, experienceData, projectsData, setData}) => {
 
  return (
    <div className="resume">
      <Header
        data={data}
    
        
      />
      <Education
        data={data}
      
        
      />
      <Experience
        experienceData={experienceData} 
        data = {data}
        setData = {setData}
      />
      <Projects
        projectsData={projectsData}
        data={data}
        setData = {setData}
     
      />
    </div>
  );
};
export default Resume;
