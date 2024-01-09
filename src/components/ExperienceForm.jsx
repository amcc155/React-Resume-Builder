
const ExperienceForm = ({handleInput}) => {

  return (
    <>
    <h1> Experience </h1>
      <form>
        <label htmlFor="title"> Title: </label>
        <input
          type="text"
          name="title"
          data-section="experience"
          data-sectionindex = {0}
          onChange={handleInput}
        />

        <label htmlFor="company"> Company: </label>
        <input
        type="text"
        name = 'company'
        data-section = 'experience'
        data-sectionindex = {0}
        onChange = {handleInput}
        />

<label htmlFor="duration"> Duration: </label>
        <input
        type="text"
        name = 'duration'
        data-section = 'experience'
        data-sectionindex = {0}
        onChange = {handleInput}
        />

<label htmlFor="description"> Description: </label>
        <input
        type="text"
        name = 'description'
        data-section = 'experience'
        data-sectionindex = {0}
        data-arrayindex = {0}
        onChange = {handleInput}
        id = 'description0'
        />
         <input
        type="text"
        name = 'description'
        data-section = 'experience'
        data-sectionindex = {0}
        data-arrayindex = {1}
        onChange = {handleInput}
        id = 'description1'
        />
         <input
        type="text"
        name = 'description'
        data-section = 'experience'
        data-sectionindex = {0}
        data-arrayindex = {2}
        onChange = {handleInput}
        id = 'description2'
        />
      </form>
    </>
  );
};
export default ExperienceForm