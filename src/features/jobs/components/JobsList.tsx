import { useLiked } from "@/features/common/hooks/useLiked";
import { JobCard } from "@/features/common/job-card/JobCard";
import { Job } from "../types";

interface Props {
  data: Job[];
}

export const JobsList = ({ data }: Props) => {
  console.log(data);
  const { liked, handleLiked } = useLiked();

  return (
    <>
      {!data?.length ? (
        <p>There no jobs</p>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {data?.map((el) => (
            <>hello</>
            // <JobCard
            //   key={el.job_id}
            //   data={el}
            //   liked={liked}
            //   handleLiked={handleLiked}
            // />
          ))}
        </div>
      )}
    </>
  );
};
