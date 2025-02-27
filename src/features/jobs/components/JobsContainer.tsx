"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import { BASE_URL } from "@/configs/axios/default";
import useSWR from "swr";
import { JobsList } from "./JobsList";
import { useDebounce } from "../hooks/useDebounce";
import { fetcher } from "@/utils/fetcher";

export const JobsContainer = () => {
  const [value, setValue] = useState<string>("");
  const [jobs, setJobs] = useState([]);

  const query = useDebounce(value, 500);

  const {
    data: fetchedJobs,
    error,
    isLoading,
  } = useSWR(`${BASE_URL}/search?query=${query}`, fetcher);

  const handleChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  useEffect(() => {
    setJobs(JSON.parse(localStorage.getItem("user") as string).desiredJob);
  }, []);

  useEffect(() => {
    if (fetchedJobs) setJobs(fetchedJobs.data);

    if (error) console.log(error);
    // eslint-disable-next-line
  }, [isLoading]);

  return (
    <>
      <h2 className="font-bold text-lg">Find jobs</h2>
      <input
        type="text"
        name="job"
        value={value}
        onChange={handleChange}
        className="border rounded-[6px] border-gray-600 p-2 min-w-[35%]"
      />

      {isLoading ? <p>Loading</p> : <JobsList data={fetchedJobs?.data} />}
    </>
  );
};
