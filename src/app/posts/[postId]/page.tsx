// "use client";

import { Metadata } from "next";
import { FC } from "react";

interface Props {
    params: {
        postId: string;
    };
}
/* If child component  has metadata it will overwrite the metadata of it's parent component */

/* create a function with name generateMetadata to create Dynamic Metadata */
export const generateMetadata = async (params: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Product ID is ${params.params.postId}`);
        }, 100);
    });

    return {
        title: `${title}`,
        description: "fdsf",
    };
};

const PostDetail: FC<Props> = () => {
    // const { error } = useGetPostDetail(params.postId);
    // if (error) {
    //     notFound();
    // }
    return <div>detail</div>;
};

export default PostDetail;
