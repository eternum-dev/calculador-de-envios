export const updateBranchesField = (newValue, inputFiel, setstate, index) => {
  setstate((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, [inputFiel]: newValue } : item
    )
  );
};

export const updateCoordBranches = (
  newValue,
  inputFiel,
  setstate,
  index,
  currentItem
) => {
  setstate((prev) =>
    prev.map((item, i) =>
      i === index
        ? {
            ...item,
            [currentItem]: { ...item[currentItem], [inputFiel]: newValue },
          }
        : item
    )
  );
};

export const deleteBranchByIndex = (indexToDelete, setBranches) => {
  setBranches((prev) => prev.filter((_, index) => index !== indexToDelete));
};