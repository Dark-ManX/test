import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

export const apiPath =
  "https://run.mocky.io/v3/2828e4a8-329b-4159-a141-5a548a840e8b";

export const loginObserver = {
  next: (x: AxiosResponse<any, any>) => {
    toast.success("Login success");
    axios.defaults.headers.common["Authorization"] = x?.data.token;
  },
  error: (err: any) => toast.error(err.message),
  complete: () => console.log("Observer got a complete notification"),
};
