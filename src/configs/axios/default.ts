import axios from "axios";

export const BASE_URL = "https://jsearch.p.rapidapi.com";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["x-rapidapi-host"] =
  process.env.NEXT_PUBLIC_HOST_HEADER;
axios.defaults.headers.common["x-rapidapi-key"] =
  process.env.NEXT_PUBLIC_API_KEY;
