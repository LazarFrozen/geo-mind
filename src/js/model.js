import { url, options } from "./config.js";

export const informations = {
  data: {},
};

export const statesApi = async function () {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);

    informations.data = result.map((data) => ({
      id: data._id,
      country: data.country,
      abbreviation: data.abbreviation,
      capital: data.capital,
      population: data.population,
      admission: data.admission,
      flag: data.flag,
    }));
  } catch (err) {
    console.log(err);
  }
};

statesApi();
