import axios from "../axios";

function getAllCities(query) {
  return axios()
    .get("/suggestion/cities", {
      params: {
        query: query,
      },
    })
    .then(handleResponse);
}

export const citiesApi = {
  getAllCities,
};

function handleResponse(response) {
  if (response.status === 200) {
    return response.data;
  }
}
