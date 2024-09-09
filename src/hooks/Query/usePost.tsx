import { useQuery } from "@tanstack/react-query";
import { IPostsResponse } from "@/types/posts.type";
import { postsKeys } from "./query-key-factory";

const useGetPosts = () => {
    return useQuery<IPostsResponse>({
        queryKey: postsKeys.all,
    });
};

const useGetPostDetail = (id: string) => {
    return useQuery({
        queryKey: postsKeys.detail(id),
    });
};

export { useGetPosts, useGetPostDetail };
