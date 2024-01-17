const ProjectForm = ({ handleInput, index }) => {
  return (
    <>
      <h1> Projects </h1>
      <form>
        <label htmlfor="title"> Title: </label>
        <input
          type="text"
          name="title"
          data-section="projects"
          data-sectionindex={index}
          onChange={handleInput}
        />

        <label htmlFor="skills"> Skills Used: </label>
        <input
          type="text"
          name="skills"
          data-section="projects"
          data-sectionindex={index}
          onChange={handleInput}
        />

        <label htmlFor="description"> Description: </label>
        <input
          type="text"
          name="description"
          data-section="projects"
          data-sectionindex={index}
          data-arrayindex={0}
          onChange={handleInput}
        />

        <input
          type="text"
          name="description"
          data-section="projects"
          data-sectionindex={index}
          data-arrayindex={1}
          onChange={handleInput}
        />

        <input
          type="text"
          name="description"
          data-section="projects"
          data-sectionindex={index}
          data-arrayindex={2}
          onChange={handleInput}
        />
      </form>
    </>
  );
};
export default ProjectForm;
