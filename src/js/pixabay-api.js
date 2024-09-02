const URL = 'https://pixabay.com/api/';
const API_KEY = '43780591-6ab37bb22e1af39025cb54e89';
export function fetchPhoto(valuePhoto) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: valuePhoto,
        safesearch: true,
        image_type: 'photo',
        orientation: 'horizontal',
    });
    return fetch(`${URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Sorry, something went wrong with the request!");
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0 || valuePhoto === "") {
                throw new Error("Sorry, there are no images matching your search query. Please try again!");
            }
            return data;
        });
}
