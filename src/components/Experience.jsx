const Experience = ({experienceData}) =>{
    return(
       
        <div>
            <h3> Experience </h3>
        {experienceData.map((experience) => (
            <>
            <li key={experience.title}> {experience.title} </li>
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