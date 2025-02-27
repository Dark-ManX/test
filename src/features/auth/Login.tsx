"use client";

import { SyntheticEvent } from "react";

export const Login = () => {
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { elements } = e.target as HTMLFormElement;
    console.log(elements);
  };
  return (
    <div className="border border-gray-500 rounded-lg max-w-[700px] mx-auto p-6">
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <label className="mr-4">
          Name
          <input type="text" name="name" className="ml-4" />
        </label>
        <label className="mr-4">
          Password
          <input type="password" name="password" className="ml-4" />
        </label>
        <button type="submit" className="outlined outline-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};
