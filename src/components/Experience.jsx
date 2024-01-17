const Experience = ({experienceData}) =>{
    return(
       
        <div>
            <h3> Experience </h3>
        {experienceData.map((experience) => (
            <>
            <div className="title" key={experience.title}> {experience.title} </div>
            <p key = {experience.company} > {experience.company} </p>
            <ul>
            {experience.description.map((description) =>(
              <li key = {description.name} > {description} </li>
              
            ))}
            </ul>
            
           </>
          
        ))}
        </div>
    )
}
export default Experience