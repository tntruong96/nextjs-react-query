"use client";

import Link from "next/link";
import { useGetPosts } from "@/hooks/Query/usePost";
import React, { useEffect, useState } from "react";
import { IPostsResponse } from "../../types/posts.type";

const Posts = () => {
    const { data } = useGetPosts();
    const [posts, setPosts] = useState<IPostsResponse | undefined>(undefined);

    useEffect(() => {
        setPosts(data);
    }, [data]);

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts?.posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
