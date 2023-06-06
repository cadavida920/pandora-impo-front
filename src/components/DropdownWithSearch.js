import React, { useEffect, useState } from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const DropdownWithSearch = ({ options, current, handleOptionUpdated, title = "Selecciona una opción" }) => {
  
  const [value, setValue] = useState(current ? current.name : title);
  const [selectedOption, setSelectedOption] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) => {
        if (value === title) {
          return true;
        } else {
          return option.name.toLowerCase().includes(value.toLowerCase());
        }
      })
    );
  }, [value]);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (eventKey, event) => {
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
    <Dropdown onSelect={handleSelect} className="dropdown-button">
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedOption}
        as={InputGroup.Prepend}
        variant="secondary"
        className="dropdown-button"
        onClick={handleDropdownClick}>
        <FormControl
          value={value === title ? undefined : value}
          onChange={handleSearch}
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon1"
        />
        {filteredOptions.map((option, index) => (
          <Dropdown.Item
            key={option.id}
            eventKey={option.id}
            tabIndex={option.id}
            onClick={handleClick}>
            {option.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

export default DropdownWithSearch;
