import React, { useState } from "react";
import FormComponent from "./FormComponent";
import FilterComponent from "./FilterComponent";
import Child from "./Child";

const Parent = () => {
  const [filterData, setFilterData] = useState(null);
  console.log(filterData);

  // Function to receive form data and pass it to the filter component
  const handleFormSubmit = (data) => {
    setFilterData(data);
  };

  const handleDataReceived = (data) => {
    console.log("Received data from Child:", data);
  };

  return (
    <div>
      <Child sendDataToParent={handleDataReceived}></Child>
      {/* <h1>React Hook Form with Filtering</h1>
      <FormComponent onSubmitForm={handleFormSubmit} />
      <FilterComponent filterCriteria={filterData} /> */}
    </div>
  );
};

export default Parent;
