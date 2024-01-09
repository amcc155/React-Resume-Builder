const Header = (props) => {
  const { data } = props; // Destructuring the 'name' prop from props
  console.log("Received data in Header:", data);
  return (
    <>
      <div className="header">
        <h1>{data.personalInfo.name}</h1>
        <div className="info">
          <p>{data.personalInfo.email} | </p>
          <p>{data.personalInfo.phone}</p>
          
        </div>
        <hr/>
      </div>
    </>
  );
};

export default Header;
