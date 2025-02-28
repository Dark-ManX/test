import { JobDetails } from "@/features/job-details";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <p>Job details</p>
      </Head>
      <JobDetails />
    </>
  );
};

export default Page;
