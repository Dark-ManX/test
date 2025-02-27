"use client";

import { JobsContainer } from "@/features/jobs";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <p>Jobs page</p>
      </Head>
      <JobsContainer />
    </>
  );
};

export default Page;
