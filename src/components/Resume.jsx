import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";

const Resume = ({ data, experienceData }) => {
  return (
    <div className="resume">
      <Header data={data} />
      <Education data={data} />
      <Experience experienceData={experienceData} />
    </div>
  );
};
export default Resume;
