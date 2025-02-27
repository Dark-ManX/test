"use client";

import { useLiked } from "@/features/common/hooks/useLiked";
import { LikedList } from "./LikedList";

export const LikedContainer = () => {
  const { liked, handleLiked } = useLiked();

  return (
    <div>
      <LikedList list={liked} handleLiked={handleLiked} />
    </div>
  );
};
