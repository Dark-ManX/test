"use client";

import Modal from "@/features/common/modal/Modal";
import { JobDetails } from "@/features/job-details";
import Head from "next/head";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <JobDetails />
    </Modal>
  );
};

export default Page;
