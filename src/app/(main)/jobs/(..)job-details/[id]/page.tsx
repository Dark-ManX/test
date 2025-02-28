"use client";

import Modal from "@/features/common/modal/Modal";
import { JobDetails } from "@/features/job-details";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const router = useRouter();

  const onClose = () => {
    setIsOpen(false);
    router.back();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <JobDetails />
    </Modal>
  );
};

export default Page;
