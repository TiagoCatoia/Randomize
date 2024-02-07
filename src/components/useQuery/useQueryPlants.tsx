import axios from "axios";
import { generateRandomId } from "../utils/generateRandomId";

export const useQueryPlants = async () => {
  try {
    const VITE_PERENUAL_TOKEN = import.meta.env.VITE_PERENUAL_TOKEN;

    const randomId = generateRandomId();
    const response = await axios.get(
      `https://perenual.com/api/species/details/${randomId}?key=${VITE_PERENUAL_TOKEN}`
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch plant data");
  }
};
