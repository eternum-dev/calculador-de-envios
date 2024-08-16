import { useState } from "react";
import PropTypes from "prop-types";
import "./displayInput.css";

export const DisplayInput = ({ value }) => {
  const [isEditing, setisEditing] = useState(false);
  const [currentValue, setcurrentValue] = useState(value);

  const handleEditInput = (event) => {
    event.preventDefault();
    setisEditing((prev) => !prev);
  };

  return (
    <div className="displayinput">
      {isEditing ? (
        <input
          className="displayinput__inp"
          type="text"
          size={10}
          value={currentValue}
          onChange={(event) => setcurrentValue(event.target.value)}
        ></input>
      ) : (
        <span className="displayinput__readinp">{currentValue}</span>
      )}
      <button
        className={`displayinput__btn ${
          !isEditing && "displayinput__btn--editing"
        }`}
        onClick={handleEditInput}
      >
        {isEditing ? "Guardar" : "Editar"}
      </button>
    </div>
  );
};

DisplayInput.propTypes = {
  value: PropTypes.string.isRequired,
};
