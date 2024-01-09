const Education = ({ data }) => {
    return (
      <>
        <h3>Education</h3>
        <div>
          {data.education.map((education, index) => (
            <div key={index}>
              <p>{education.school}</p>
              <p>{education.major}</p>
              <p className="gpa">{education.gpa}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Education;
  