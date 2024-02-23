import axios from 'axios';
export async function fetchImages(keyWord, currentPage) {
    const API_KEY = '42389697-3421d6cd291bd0189edc17b09';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = {
        key: API_KEY,
        q: keyWord,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: currentPage,
    };    
    const url = `${BASE_URL}${END_POINT}`;
    const response = await axios.get(url, { params })
    return response.data;
}