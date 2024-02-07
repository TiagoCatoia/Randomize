import axios from "axios";
import { generateRandomId } from "../utils/generateRandomId";
import { generateRandomDate } from "../utils/generateRandomDate";

export const useQueryApi = async ({
  urlValueApi,
}: {
  urlValueApi?: string;
}) => {
  try {
    let response;
    if (urlValueApi === "plants") {
      const VITE_PERENUAL_TOKEN = import.meta.env.VITE_PERENUAL_TOKEN;
      const randomId = generateRandomId();
      response = await axios.get(
        `https://perenual.com/api/species/details/${randomId}?key=${VITE_PERENUAL_TOKEN}`
      );
    } else if (urlValueApi === "space") {
      const VITE_NASA_TOKEN = import.meta.env.VITE_NASA_TOKEN;
      const randomDate = await generateRandomDate();
      response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${VITE_NASA_TOKEN}&date=${randomDate}`
      );
    } else if (urlValueApi === "recipe") {
      const VITE_SPOONACULAR_TOKEN = import.meta.env.VITE_SPOONACULAR_TOKEN;
      response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${VITE_SPOONACULAR_TOKEN}`
      );
    }
    if (response) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch ${urlValueApi} data`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch ${urlValueApi} data`);
  }
};
