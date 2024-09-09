import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: {
        default: "Posts Pages",
        absolute: "Posts Pages",
    },
    description: "List of the posts",
};

const PostsLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <h1>Layout Posts</h1>
            {children}
        </>
    );
};

export default PostsLayout;
