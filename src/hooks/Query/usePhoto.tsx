import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPhoto, getPhotoViaId } from "@/services/photo.service";
import { photoKeys } from "./query-key-factory";

const useGetListPhoto = () => {
    return useQuery({
        queryKey: photoKeys.list(),
        queryFn: getPhoto,
    });
};

const useGetDetailPhoto = () => {
    const [id, setId] = useState<string | undefined>();
    return {
        ...useQuery({
            queryKey: photoKeys.id(id as string),
            queryFn: () => getPhotoViaId(id as string),
            enabled: !!id,
        }),
        setId,
    };
};

export { useGetListPhoto, useGetDetailPhoto };
