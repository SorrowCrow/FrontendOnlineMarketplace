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
  createListing: {
    method: "POST",
    path: "/api/listings",
  },
  getUser: {
    method: "GET",
    path: "/api/user",
  },
  updateUser: {
    method: "PUT",
    path: "/api/user",
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
  createListing: {
    type: string;
    title: string;
    description: string;
    price: number;
    priceUnit: string;
    location: string;
    userID: number;
    categoryID: number;
  };
  updateUser: {
    email: string;
    name: string;
    surname: string;
  };
};

const useApi = () => {
  const [data, setData] = useState<any>();

  const [loading, setLoading] = useState(false);

  async function loadData(
    request: "updateUser",
    body: UserInput["updateUser"]
  ): Promise<void>;

  async function loadData(request: "getUser"): Promise<void>;

  async function loadData(
    request: "createListing",
    body: UserInput["createListing"]
  ): Promise<void>;

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

    fetch(
      apiUrl +
        ApiRequests[request].path +
        (params
          ? "?" +
            new URLSearchParams(JSON.parse(JSON.stringify(params))).toString()
          : ""),
      {
        method: ApiRequests[request].method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then(function (response) {
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }

  return { data, loading, loadData };
};

export default useApi;
