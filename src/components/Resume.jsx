import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

const Resume = ({ data, experienceData, projectsData}) => {
  return (
    <div className="resume">
      <Header data={data} />
      <Education data={data} />
      <Experience experienceData={experienceData} />
      <Projects projectsData = {projectsData}/>
    </div>
  );
};
export default Resume;
