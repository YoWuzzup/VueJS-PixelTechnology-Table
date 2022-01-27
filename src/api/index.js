import axios from "axios";

export const fetchPatients = async (data) => {
  try {
    let query;
    let age = data.chosenAge || null;

    if (data) {
      query = `?${age ? "age=" + age : ""}`;
    } else {
      query = "";
    }

    return axios.get(`https://cerber.pixel.com.pl/api/patients${query}`);
  } catch (er) {
    console.log(er);
  }
};

export const fetchMedicine = async () => {
  try {
    return axios.get(`https://cerber.pixel.com.pl/api/medicine`);
  } catch (error) {
    console.log(error);
  }
};
