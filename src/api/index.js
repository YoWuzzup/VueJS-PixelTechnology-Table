import axios from "axios";

export const fetchPatients = async (data) => {
  try {
    let query;

    if (data) {
      let newData = data.includes(" ") ? data.split(" ").join("") : data;
      query = `?${newData}`;
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
