"use client";

import { Job } from "@/features/jobs/types";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  size?: "small" | "large";
  data: {
    job_id: string;
    employer_logo?: string;
    employer_name: string;
    job_city: string;
    job_country: string;
    job_description: string;
  };
  liked: Job[];
  handleLiked: (arg: Job) => void;
}

export const JobCard = ({
  size = "small",
  data,
  liked,
  handleLiked,
}: Props) => {
  const {
    job_id,
    employer_logo,
    employer_name,
    job_city,
    job_country,
    job_description,
  } = data;

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(!liked?.find((el) => el.job_id === data.job_id));
  }, [liked.length]);

  return (
    <div className="border border-gray-200 rounded-xl p-3 pb-3 overflow-hidden">
      <div className="flex gap-2 w-full">
        {/* eslint-disable-next-line */}
        <img
          src={employer_logo || "/imgs/default-img.jpg"}
          alt={employer_name}
          width={100}
          height={100}
        />

        <div>
          <h3>{employer_name}</h3>
          <p>City: {job_city + ", " + job_country}</p>
        </div>
      </div>

      <p className={`${size === "small" && "max-h-[170px]"} overflow-hidden`}>
        {job_description}
      </p>

      <div className="flex gap-2 w-full justify-center">
        <button onClick={() => handleLiked(data)}>
          {!isLiked ? "Like" : "Remove from liked"}
        </button>

        <Link href={`/job-details/${job_id}`}>Details</Link>
      </div>
    </div>
  );
};
