import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../baseUrl";

const axiosSecure = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
