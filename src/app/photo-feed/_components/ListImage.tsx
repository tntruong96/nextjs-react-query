"use client";

import { useGetListPhoto } from "@/hooks/Query/usePhoto";
import Image from "next/image";
import React from "react";

const ListImage = () => {
    const { data, isLoading } = useGetListPhoto();

    if (isLoading) return <div>Loading</div>;
    return (
        <div className="grid grid-cols-4 gap-4">
            {data?.map(photo => (
                <Image
                    width={400}
                    height={400}
                    src={photo?.urls?.regular}
                    alt={photo?.user?.name}
                />
            ))}
        </div>
    );
};

export default ListImage;
