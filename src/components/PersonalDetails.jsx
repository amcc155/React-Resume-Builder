const personalDetailsForm = ({ handleInput }) => {
  return (
    <>
      <h1> Personal Details </h1>
      <form>
        <label for="name">Name </label>
        <input
          type="text"
          data-section="personalInfo"
          name="name"
          onChange={handleInput}
        />
        <label for="email">Email </label>
        <input
          type="email"
          data-section="personalInfo"
          name="email"
          onChange={handleInput}
        />
        <label for="phone">Phone</label>
        <input
          type="tel"
          data-section="personalInfo"
          name="phone"
          onChange={handleInput}
        />

        <button> Submit </button>
      </form>
    </>
  );
};
export default personalDetailsForm;
