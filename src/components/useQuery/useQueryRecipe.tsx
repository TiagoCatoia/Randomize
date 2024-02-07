import axios from "axios";

export const useQueryRecipe = async () => {
  try {
    const VITE_SPOONACULAR_TOKEN = import.meta.env.VITE_SPOONACULAR_TOKEN;

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${VITE_SPOONACULAR_TOKEN}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recipe data");
  }
};
