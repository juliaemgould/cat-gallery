const apiKey = "161624c6-8991-4c93-b778-5c689d3262cb";
const headers = { "x-api-key": apiKey };
const userId = "jgould";

/**
 * Returns a promise which resolves with an array of image objects.
 * Image objects have an id, and url property. `id` is the image's id,
 * and `url` is the image's url.
 */
export async function fetchPictures({
  page = 0,
  imageType = "gif,jpg,png"
} = {}) {
  const url = `https://api.thecatapi.com/v1/images/search?size=small&limit=12&page=${page}&mime_types=${imageType}&order=desc`;
  return await fetch(url, { headers }).then((res) => res.json());
}

/**
 * Uncomment code below and open the console to see a sample API response**/

/**(async function () {
  const data = await fetchPictures();
  console.log(data);
})(); */
/**
 * Adds an image to the user's favorites by id.
 */
export async function addToFavorites({ imageId }) {
  const data = {
    image_id: imageId,
    sub_id: userId
  };
  const url = `https://api.thecatapi.com/v1/favourites`;
  return await fetch(url, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

/*(async function () {
  const data = await addToFavorites({
    imageId: "YwfiMNq9z"
  });
  console.log(data);
})();**/

//Added Function check for favorite
/*export async function itemIsFavorite(favouriteId) {
  const url = `https://api.thecatapi.com/v1/favourites?sub_id=jgould&favourite_id=${favouriteId}`;
  return await fetch(url, { headers }).then((res) => res.json());
}*/



/*A*dded Function to delete favorites 
Delete is getting a 405. I'm unsure how to resolve

export async function deleteFavorites(favouriteId) {
  const url = `https://api.thecatapi.com/v1/favourites?favourite_id=${favouriteId}`;
  return await fetch(url, {method: "DELETE",headers: {
    ...headers,
    "Content-Type": "application/json"
  }});
}

(async function () {
  const data = await deleteFavorites(2093445);
  console.log(data);
})();

**/

/**
 * Returns a promise which resolves with an array of the user's
 * favorite images.
 */
export async function getMyFavorites({ page =0  } = {}) {
  const url = `https://api.thecatapi.com/v1/favourites?&page=${page}&sub_id=${userId}&order=desc`;
  return await fetch(url, { headers }).then((res) => res.json());
}

(async function () {
  const data = await getMyFavorites();
  console.log(data);
})();
