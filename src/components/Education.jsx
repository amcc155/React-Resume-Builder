const Education = ({ data }) => {
  return (
    <>
      <h3>Education</h3>
      <div>
        {data.education.map((education, index) => (
          <div className="resumeSection" id="education" key={index}>
            <div className="leftSide">
              <p>{education.school}</p>
              <p>{education.major}</p>
              <p> Minor: {education.minor}</p>
            </div>
            <div className="rightSide">
              <p id="startDate"> {education.startDate}</p>
              <p className="gpa"> GPA: {education.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
