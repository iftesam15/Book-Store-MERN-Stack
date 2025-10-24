import React, { useState } from "react";
import FormComponent from "./FormComponent";
import FilterComponent from "./FilterComponent";

const Parent = () => {
  const [filterData, setFilterData] = useState(null);
  console.log(filterData);

  // Function to receive form data and pass it to the filter component
  const handleFormSubmit = (data) => {
    setFilterData(data);
  };

  return (
    <div>
      <h1>React Hook Form with Filtering</h1>
      <FormComponent onSubmitForm={handleFormSubmit} />
      <FilterComponent filterCriteria={filterData} />
    </div>
  );
};

export default Parent;
