"use client";

import { useGetPostDetail } from "@/hooks/Query/usePost";
import { notFound } from "next/navigation";
import React from "react";

const PostDetail = ({ params }: { params: { postId: string } }) => {
    const { error } = useGetPostDetail(params.postId);
    if (error) {
        notFound();
    }
    return <div>detail</div>;
};

export default PostDetail;
