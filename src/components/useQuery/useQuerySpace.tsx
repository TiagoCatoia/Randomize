import axios from "axios";
import { generateRandomDate } from "../utils/generateRandomDate";

export const useQuerySpace = async () => {
  try {
    const VITE_NASA_TOKEN = import.meta.env.VITE_NASA_TOKEN;

    const randomDate = generateRandomDate();
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${VITE_NASA_TOKEN}&date=${randomDate}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch space data");
  }
};
