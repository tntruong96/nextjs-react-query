interface IPosts {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

interface IPostsResponse {
    posts: IPosts[];
    total: number;
    skip: number;
    limit: number;
}

export { type IPostsResponse };
