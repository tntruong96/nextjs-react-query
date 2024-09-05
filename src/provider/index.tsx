"use client";

import {
    matchQuery,
    MutationCache,
    QueryClient,
    QueryClientProvider,
    QueryKey,
} from "@tanstack/react-query";
import axios from "axios";
import { FC, PropsWithChildren, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends PropsWithChildren {}

// Define a default query function that will receive the query key
const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
    const { data } = await axios.get(`https://dummyjson.com/${queryKey[0]}`);
    return data;
};

const CustomProvider: FC<IProps> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        queryFn: defaultQueryFn,
                    },
                },
                mutationCache: new MutationCache({
                    onSuccess(data, variables, context, mutation) {
                        queryClient.invalidateQueries({
                            predicate: query =>
                                // invalidate all matching tags at once
                                // or everything if no meta is provided
                                mutation.meta?.invalidates?.some(queryKey =>
                                    matchQuery({ queryKey }, query)
                                ) ?? true,
                        });
                    },
                }),
            })
    );
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default CustomProvider;
