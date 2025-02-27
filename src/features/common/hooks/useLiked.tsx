"use client";

import { Job } from "@/features/jobs/types";
import { useEffect, useState } from "react";

export const useLiked = () => {
  const [liked, setLiked] = useState<Job[]>([]);

  const handleLiked = (data: Job) => {
    setLiked((prev) => {
      const present = prev.some((el) => el.job_id === data.job_id);
      if (present) {
        return prev.filter((item) => item.job_id !== data.job_id);
      }
      return [...prev, data];
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLiked(JSON.parse(localStorage.getItem("likedJobs") as string));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && liked.length) {
      localStorage.setItem("likedJobs", JSON.stringify(liked));
    }
    //eslint-disable-next-line
  }, [liked.length]);

  return { liked, handleLiked };
};
