import { TPhoto } from "@/types/photo.type";
import axios from "axios";

const getPhoto = async (): Promise<TPhoto[]> => {
    const { data } = await axios.get(
        "https://api.unsplash.com/photos?client_id=lJszmEw7a_PX8DyCemXqpawrP-82qQZHbqQL-f5pQVs"
    );
    return data;
};

export { getPhoto };
