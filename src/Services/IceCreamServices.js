import axios from "axios";

const API_BASE_URL = "http://localhost:8080/icecream";

const getIceCreamList = async () => {
  const API_URL = `${API_BASE_URL}/list`;
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching ice cream list:", error);
    throw error;
  }
};

export default getIceCreamList;
