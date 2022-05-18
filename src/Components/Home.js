import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    const name = data.name;
    const description = data.description;

    const url = `https://hidden-harbor-72108.herokuapp.com/tasks`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        status: "",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        event.target.reset();
      });
    console.log(data);
  };
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="flex justify-center items-center lg:max-h-screen ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-purple-50 p-12 rounded-lg "
        >
          <h1 className="text-purple-700 font-bold text-center text-xl">
            Add Your Daily Tasks
          </h1>
          <div className="form-control w-96 max-w-xs ">
            <label className="label">
              <span className="label-text">Task Name</span>
            </label>
            <input
              type="text"
              placeholder="Task Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Task Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Task Description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Task Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary w-full max-w-xs "
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
      <Link to="/addedtasks">
        <button className="btn btn-primary mt-10">See Your Tasks</button>
      </Link>
    </div>
  );
};

export default Home;
