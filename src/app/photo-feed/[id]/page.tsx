"use client";

import { useGetDetailPhoto } from "@/hooks/Query/usePhoto";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { FC, useEffect } from "react";

type Props = unknown;

const DetailPhotoPage: FC<Props> = () => {
    const { id } = useParams();
    const { data, setId, isLoading } = useGetDetailPhoto();

    useEffect(() => {
        setId(id as string);
    }, []);

    if (isLoading) return <div>Loading</div>;

    return data ? (
        <div>
            <h1>{data?.alt_description}</h1>
            <Image
                width={data.width}
                height={data.height}
                src={data?.urls.regular}
                alt={data?.alt_description as string}
            />
        </div>
    ) : null;
};

export default DetailPhotoPage;
