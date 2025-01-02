import { citiesApi } from "@/const/api/cities.api";

export const citiesService = {
  getAllCities,
};

function getAllCities(search) {
  return citiesApi.getAllCities(search);
}
