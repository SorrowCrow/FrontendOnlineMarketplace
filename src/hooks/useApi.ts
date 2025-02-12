import axios from "axios";
import { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL || "ApiUrlNotSet";

const ApiRequests = {
  signin: {
    method: "POST",
    path: "/api/auth/login",
  },
  signup: {
    method: "POST",
    path: "/api/auth/signup",
  },
  listings: {
    method: "GET",
    path: "/api/listings/page",
  },
};

type UserInput = {
  signin: {
    email: string;
    password: string;
  };
  signup: {
    email: string;
    password: string;
    name: string;
    surname: string;
  };
  listings: {
    page?: string;
    size?: string;
    ascending?: boolean;
    sortBy?: string;
  };
};

const useApi = () => {
  const [data, setData] = useState<any>();

  const [loading, setLoading] = useState(false);

  async function loadData(
    request: "signup",
    body: UserInput["signup"]
  ): Promise<void>;

  async function loadData(
    request: "signin",
    body: UserInput["signin"]
  ): Promise<void>;

  async function loadData(
    request: "listings",
    body: undefined,
    params: UserInput["listings"]
  ): Promise<void>;

  async function loadData(
    request: keyof typeof ApiRequests,
    body?: UserInput[keyof UserInput],
    params?: UserInput[keyof UserInput]
  ): Promise<void> {
    setLoading(true);

    axios({
      baseURL: apiUrl,
      url: ApiRequests[request].path,
      method: ApiRequests[request].method,
      data: body,
      params,
    })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  return { data, loading, loadData };
};

export default useApi;
