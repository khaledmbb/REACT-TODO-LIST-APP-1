import React, { memo } from "react";
import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import { MdDone, MdRemoveDone } from "react-icons/md";

const SettingTasks = ({ tasks, deleteTask, updateTask, doneTask }) => {
  return (
    <div className="tasks-wrapper">
      {tasks.length ? (
        <ul>
          {tasks.map(({ id, title, status }, idx) => (
            <li key={idx + 1}>
              <div
                className="text"
                style={status ? { textDecoration: "line-through" } : {}}
              >
                <span>{idx + 1}</span> {title}
              </div>
              <div className="control-icons">
                <ul>
                  <li onClick={() => doneTask(idx + 1)}>
                    {status ? <MdDone className="done" /> : <MdRemoveDone />}
                  </li>
                  {status ? null : (
                    <li
                      onClick={() =>
                        updateTask({
                          id: idx + 1,
                          title: title,
                          status: status,
                        })
                      }
                    >
                      {<TbEdit />}
                    </li>
                  )}
                  <li onClick={() => deleteTask(idx + 1)}>{<BsTrash />}</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No Tasks Here...</p>
        </div>
      )}
    </div>
  );
};

export default memo(SettingTasks);
