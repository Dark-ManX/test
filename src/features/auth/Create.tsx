"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

interface FormState {
  name: string;
  desiredJob: string;
  about: string;
}

const initialValue: FormState = {
  name: "",
  desiredJob: "",
  about: "",
};

export const Create = () => {
  const router = useRouter();

  const [formState, setFormState] = useState(initialValue);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(formState));
    }
    router.push("/jobs");
  };

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border border-gray-500 rounded-lg max-w-[700px] mx-auto p-6">
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <label className="mr-4">
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md p-2"
          />
        </label>
        <label className="mr-4">
          Desired job
          <input
            type="text"
            name="desiredJob"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md p-2"
          />
        </label>
        <label className="mr-4">
          About me
          <textarea
            name="about"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md p-2"
          />
        </label>
        <button type="submit" className="outlined outline-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};
