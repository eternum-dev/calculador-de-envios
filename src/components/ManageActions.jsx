import PropTypes from "prop-types";
import { CustomButton } from "./";
import "./manageActions.css";
import { manageActionsData } from "../data";

/**
 * ManageActions component for managing actions like adding and updating items.
 *
 * @component
 * @example
 *
 *  return (
 *   <ManageActions addItem={addItem} updateItem={updateItem} />
 *  )
 * @param {object} props            - The component's props.
 * @param {Function} props.addItem  Function to add a new item row to the table state.
 * @param {Function} props.saveChanges Function to save the current state changes to the database.
 * @returns {JSX.Element} React component for managing actions.
 */

export const ManageActions = ({ addItem, saveChanges }) => {
  const { addButton, saveButton } = manageActionsData;

  return (
    <div className="manageActions">
      <CustomButton maxSize={addButton.size} onClick={addItem}>
        {addButton.text}
      </CustomButton>
      <CustomButton onClick={saveChanges}>{saveButton.text}</CustomButton>
    </div>
  );
};

ManageActions.propTypes = {
  addItem: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
};
