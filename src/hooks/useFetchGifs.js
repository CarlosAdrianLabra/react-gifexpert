import { useEffect, useState } from "react";
import { getGifts2 } from "../helpers/Getgifs2";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifts2( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
 

    return {
        images,
        isLoading
    }


}
