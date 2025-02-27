export const BASE_URL = "https://jsearch.p.rapidapi.com";

export const createOptions = (query: string) => ({
  method: "GET",
  url: `${BASE_URL}/search`,
  params: {
    query,
    page: "1",
    num_pages: "1",
    country: "us",
    date_posted: "all",
  },
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_HOST_HEADER,
  },
});
