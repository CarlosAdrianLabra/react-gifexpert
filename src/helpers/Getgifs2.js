export const getGifts2 = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=E2Igl7vfcgKi3sQ4fQszIKoTbvIvuqtU&q=${ category }&limit=10`;
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}