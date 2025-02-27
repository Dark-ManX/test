"use client";

import { BASE_URL } from "@/configs/axios/default";
import { useLiked } from "@/features/common/hooks/useLiked";
import { JobCard } from "@/features/common/job-card/JobCard";
import { fetcher } from "@/utils/fetcher";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export const JobDetails = () => {
  const params = useSearchParams();

  const { data: job, isLoading } = useSWR(
    `${BASE_URL}/job-details?job_id=${params.get("job_id")}`,
    fetcher
  );

  const { liked, handleLiked } = useLiked();

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <JobCard
      size="large"
      data={job.data[0]}
      liked={liked}
      handleLiked={handleLiked}
    />
  );
};
