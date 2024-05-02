import * as model from "./model.js";
import View from "./view.js";

const controlStates = async function () {
  try {
    // Loading Data from API
    await model.statesApi();

    // Rendering Data
    View.render(model.informations.data);
  } catch (err) {
    console.log(err);
  }
};

controlStates();
