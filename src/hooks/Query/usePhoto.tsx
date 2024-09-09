import { useQuery } from "@tanstack/react-query";
import { getPhoto } from "@/services/photo.service";
import { photoKeys } from "./query-key-factory";

const useGetListPhoto = () => {
    return useQuery({
        queryKey: photoKeys.list(),
        queryFn: getPhoto,
    });
};

export { useGetListPhoto };
