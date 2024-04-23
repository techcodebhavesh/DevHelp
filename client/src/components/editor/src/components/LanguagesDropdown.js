import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange, language }) => {
  console.log({language});
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
       styles={customStyles}
      value={language?.label}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
