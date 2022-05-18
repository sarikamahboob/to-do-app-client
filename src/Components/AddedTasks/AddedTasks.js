import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addedTasks.css";
const AddedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch(`https://hidden-harbor-72108.herokuapp.com/tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [isReload]);

  const handleCompleteTask = (id) => {
    var raw = JSON.stringify({
      status: "completed",
    });

    var requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://hidden-harbor-72108.herokuapp.com/tasks/${id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.success("Yuppii !!! You completed the task");
        setIsReload(!isReload);
      })
      .catch((error) => console.log("error", error));
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete the task?");
    if (proceed) {
      fetch(`https://hidden-harbor-72108.herokuapp.com/tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
          setIsReload(!isReload);
        });
    }
  };
  return (
    <div>
      <h1 className="text-purple-700 font-bold text-center text-xl my-10">
        All Your Tasks
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Complete Task</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className={task.status === "completed" ? "strike" : ""}>
                  {task.name} {task.status}
                </td>
                <td className={task.status === "completed" ? "strike" : ""}>
                  {task.description}
                </td>
                <td>
                  <button
                    onClick={() => handleCompleteTask(task._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddedTasks;
