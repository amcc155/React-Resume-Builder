import { useState } from "react";
import Bar from "./components/Bar";
import mockData from "./assets/data";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [data, setData] = useState(mockData);

  /* re-usable function to manipulate data for each input */
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { section, sectionindex, arrayindex } = e.target.dataset;
    const updatedData = { ...data };
    //if the object at a certain index does not exist, make one
    if (!updatedData[section][sectionindex]) {
      updatedData[section][sectionindex] = {};
    }

    //if it the object value is list, specify the index in the array it is going to,
    if (arrayindex) {
      updatedData[section][sectionindex][name][arrayindex] = value;
      setData(updatedData);
     
      
    } else if (sectionindex) {
      // if there is more than one object, specify the index of the object
      updatedData[section][sectionindex][name] = value;
      setData(updatedData);
    } else {
      updatedData[section][name] = value;
      setData(updatedData);
    }

    console.log(data)
  };

  return (
    <main>
      <Bar data={data} setData={setData} handleInput={handleInput} />

      <Resume
        data={data}
        experienceData={data.experience}
        projectsData={data.projects}
        setData={setData}
      />
    </main>
  );
}
export default App;
