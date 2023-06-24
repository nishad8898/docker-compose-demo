import axios from "axios";

export const getAllTask = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_KEY}/task`);
    return data.data;
  } catch (error) {
    throw error.message;
  }
};

export const creatTask = async (body) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_KEY}/task`,
      body
    );
    return data.data;
  } catch (error) {
    throw error.message;
  }
};

export const deleteTask = async (id) => {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_KEY}/task/${id}`
    );
    return data.data;
  } catch (error) {
    throw error.message;
  }
};
