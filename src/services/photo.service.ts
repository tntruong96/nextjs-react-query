import { TPhoto } from "@/types/photo.type";
import axios from "axios";

const URL = "https://api.unsplash.com/";

const getPhoto = async (): Promise<TPhoto[]> => {
    const { data } = await axios.get(
        `${URL}photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
    );
    return data;
};

const getPhotoViaId = async (id: string): Promise<TPhoto> => {
    const { data } = await axios.get(
        `${URL}photos/${id}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
    );
    return data;
};

export { getPhoto, getPhotoViaId };
