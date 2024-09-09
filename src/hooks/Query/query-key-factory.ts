const postsKeys = {
    all: ["posts"] as const,
    lists: () => [...postsKeys.all, "list"] as const,
    list: (filters: string) => [...postsKeys.lists(), { filters }] as const,
    details: () => [...postsKeys.all, "detail"] as const,
    detail: (id: string) =>
        [
            `${postsKeys.details()[0]}/${id}`,
            ...postsKeys.details(),
            id,
        ] as const,
};

const photoKeys = {
    all: ["photo"] as const,
    list: () => [...photoKeys.all, "list"] as const,
    id: (id: string) => [...photoKeys.all, "detail", id] as const,
};

export { postsKeys, photoKeys };
