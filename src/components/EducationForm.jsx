const educationForm = ({handleInput, index, data}) => {
  
  return (
    <>
      <h1> Education Info </h1>
      <form>
        
        <label for="school"> School: {index} </label>
        <input
          data-sectionIndex = {index}
          type="text"
          data-section="education"
          name="school"
          onChange={handleInput}
      
        />

        <label for="major">Major: </label>
        <input
          data-sectionindex = {index}
          type="text"
          data-section="education"
          name="major"
          onChange={handleInput}
        />

        <label for = "minor">Minor: </label>
        <input
        data-sectionIndex = {index}
        type = 'text'
        data-section = "education"
        name = "minor"
        onChange = {handleInput}
        />
        <label for="gpa"> GPA: </label>
        <input
          data-sectionIndex = {index}
          type="number"
          step="0.01"
          id="gpa"
          name="gpa"
          data-section="education"
          onChange={handleInput}
        />
        <label for="startDate">Start Date: </label>
        <input
        data-sectionIndex = {index}
          type="date"
          id="startDate"
          name="startDate"
          data-section="education"
          onChange={handleInput}
        />
      </form>
      
    </>
  );
};
export default educationForm;
