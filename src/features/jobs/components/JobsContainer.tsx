"use client";

import { BASE_URL } from "@/configs/axios/default";
import { fetcher } from "@/utils/fetcher";
import { SyntheticEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "../hooks/useDebounce";
import { JobsList } from "./JobsList";

export const JobsContainer = () => {
  const [value, setValue] = useState<string>("");
  const [jobs, setJobs] = useState([]);

  const query = useDebounce(value, 500);
  const url = `${BASE_URL}/search?query=${query}`;

  const {
    data: fetchedJobs,
    error,
    isLoading,
  } = useSWR(value ? url : null, fetcher);

  const handleChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("user") as string)?.desiredJob);
    if (fetchedJobs) setJobs(fetchedJobs.data);
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

      {isLoading ? <p>Loading</p> : <JobsList data={jobs} />}
    </>
  );
};
