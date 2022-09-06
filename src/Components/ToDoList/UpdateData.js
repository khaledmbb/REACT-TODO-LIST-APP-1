import React, { useEffect, useRef } from "react";

const UpdateData = ({ updateData, changeTask, handleSubmit, cancelFun }) => {
  const updateInput = useRef();
  useEffect(() => {
    updateInput.current.focus();
  }, [updateData]);
  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <input
        ref={updateInput}
        type="text"
        value={updateData.title}
        onChange={(e) => changeTask(e.target.value)}
        placeholder="Type Your New Task"
      />
      <button type="submit">Update Task</button>
      <button onClick={cancelFun} className="cancel">
        Cancel
      </button>
    </form>
  );
};

export default UpdateData;
