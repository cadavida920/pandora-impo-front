import React, { useEffect, useState } from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import { MdKeyboardArrowDown } from 'react-icons/md';

const DropdownWithSearch = ({ options, currentKey, handleOptionUpdated, title = "Selecciona una opción" }) => {
  const [value, setValue] = useState(currentKey);
  const [selectedOption, setSelectedOption] = useState(currentKey);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) => {
        if (value === "") {
          return true;
        } else if (value !== "") {
          return option.name.toLowerCase().includes(value.toLowerCase());
        } else if (currentKey === "") {
          return true;
        }
      })
    );
  }, [currentKey, value]);

  useEffect(() => {
    if (currentKey === "") {
      setSelectedOption("");
    }
  },[currentKey]);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (eventKey, event) => {
    setValue(event.target.innerText)
    setSelectedOption(event.target.innerText);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const id = event.target.tabIndex;
    handleOptionUpdated(id);
  };

  const handleDropdownClick = (event) => {
    event.preventDefault();
  };

  return (
    <Dropdown onSelect={handleSelect} className="dropdown-button custom-dropdown">
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedOption}
        as={InputGroup.Prepend}
        className="dropdown-button custom-dropdown"
        onClick={handleDropdownClick}>
        <FormControl
          value={value}
          onChange={handleSearch}
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon1"
        />
        {filteredOptions.map((option, index) => (
          <Dropdown.Item
            key={index}
            eventKey={option.id}
            tabIndex={option.id}
            onClick={handleClick}
            >
            {option.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

export default DropdownWithSearch;
