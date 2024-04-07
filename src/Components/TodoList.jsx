import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listdata, setListdata] = useState([]);

  function changeHandler(e) {
    setActivity(e.target.value);
  }

  function taskHandler() {
    if (activity === "") {
      alert("Task cannot be empty");
      return;
    }
    setListdata((prevListdata) => {
      return [...prevListdata, activity];
    });
    setActivity("");
  }
  function removeHandler(i) {
      const updateList = listdata.filter((data, id) => {
        return id !== i;
      });
    setListdata(updateList);
    }
    function removeAllHandler() {
        setListdata([]);
    }

  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          required
          type="text"
          placeholder="What to do Today?"
          onChange={changeHandler}
          value={activity}
        />
        <button onClick={taskHandler}>Add</button>
        <p className="list-heading">Here Is Your List</p>
        {listdata.length !== 0 &&
          listdata.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button
                      onClick={() => {
                        removeHandler(i);
                      }}
                    >
                      Remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {listdata.length > 0 && <button onClick={removeAllHandler}>Remove All</button>}
      </div>
    </>
  );
};

export default TodoList;
