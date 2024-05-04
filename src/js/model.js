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

export const history = [];

export const randomState = async function () {
  try {
    const min = Math.ceil(0);
    const max = Math.floor(49);

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!history.includes(randomNumber)) {
      history.push(randomNumber);
    }

    console.log(history);
    return randomNumber;
  } catch (err) {
    console.log(err);
  }
};
