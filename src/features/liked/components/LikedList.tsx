import { JobCard } from "@/features/common/job-card/JobCard";
import { Job } from "@/features/jobs/types";

interface Props {
  list: Job[];
  handleLiked: (arg: Job) => void;
}

export const LikedList = ({ list, handleLiked }: Props) => {
  return (
    <>
      {!list.length ? (
        <p>There no jobs</p>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {list.map((el) => {
            return (
              <JobCard
                key={el.job_id}
                data={el}
                liked={list}
                handleLiked={handleLiked}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
