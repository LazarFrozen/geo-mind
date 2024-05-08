import * as model from "./model.js";
import GenerateStatesView from "./generateStatesView.js";
import StatesView from "./statesView.js";

const controlStates = async function () {
  try {
    // Loading spinner
    GenerateStatesView.renderSpinner();

    // Loading random number
    const randomNumber = await model.randomState();

    // Sending random number
    GenerateStatesView.acceptRandomNumber(randomNumber);

    // Loading Data from API
    await model.statesApi();

    // Rendering Data
    GenerateStatesView.render(model.informations.data);

    // Loading abbreviation
    const abbreviation = GenerateStatesView.abbreviation(
      model.informations.data,
      randomNumber
    );

    // Sending abbreviation
    StatesView.setAbbreviation(abbreviation);

    // Sending set
    StatesView.acceptSet(model.guessedStates);
  } catch (err) {
    GenerateStatesView.renderError(`${err}`);
  }
};

const restartGame = function () {
  // Clear the guessed states set
  model.guessedStates.clear();

  // Clear all guessed state styles
  const guessedElements = document.querySelectorAll(".states-shape.guessed");
  guessedElements.forEach((el) => {
    el.style.fill = "";
    el.classList.remove("guessed");
  });

  // Reset accuracy
  StatesView.correctGuesses = 0;
  StatesView.incorrectGuesses = 0;
  StatesView.calculateAccuracy();

  // Start a new game
  controlStates();
};

const initialization = function () {
  GenerateStatesView.startingHandler(restartGame);
  StatesView.stateHandler(controlStates);
  StatesView.hoverEffectHandler(controlStates);
  StatesView.mouseLeaveHandler(controlStates);
};
initialization();
