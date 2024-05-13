// Storing data from API
export const informations = {
  data: {},
};

// fetching API
export const statesApi = async function () {
  try {
    const response = await fetch("https://api.npoint.io/401b50c1408637aadf7a");
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
    throw new Error("Can not load state data");
  }
};

export const guessedStates = new Set();

// Generating random number for a state
export const randomState = async function () {
  try {
    const min = Math.ceil(0);
    const max = Math.floor(49);

    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (guessedStates.has(randomNumber));

    guessedStates.add(randomNumber);
    return randomNumber;
  } catch (err) {
    throw new Error("Can not load random state");
  }
};
