import React, { useContext, useState, useEffect } from "react";

export const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-vqgrteziyzc.ws-eu69.gitpod.io/api/tasks/"
    );
    const data = await response.json();
    setTaskList(data.content);
  };

  const createTask = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-vqgrteziyzc.ws-eu69.gitpod.io/api/task/",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ label: task }),
      }
    );
    if (response.ok) {
      getTaskList();
    }
  };

  const deleteTaskById = async (id) => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-vqgrteziyzc.ws-eu69.gitpod.io/api/task/" +
        id,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      getTaskList();
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Boiler plate</h1>
      <input
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createTask();
        }}
      >
        ADD
      </button>
      {taskList.map((t) => {
        return (
          <div className="d-flex justify-content-center">
            <p key={t.id}>{t.label}</p>
            <button
              onClick={() => {
                deleteTaskById(t.id);
              }}
              className="btn btn-danger text-white ms-2"
            >
              {" "}
              x{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};
