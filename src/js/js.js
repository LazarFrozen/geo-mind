const content = document.querySelector(".state-content");
const button = document.querySelector(".button");

const asd = function () {
  content.innerHTML = "";
  const mora = `
          <div class="state-flag">
            <img class="flag-size" src="${usStates[0].flag}" />
          </div>
          <div class="state-informations">
            <div class="state-style">
              <div class="state-name">
                <img src="img/country.png" class="state-svg-size" />
                <p class="text-center">Country: ${usStates[0].country}</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/capital.png" class="state-svg-size" />
                <p class="text-center">Capital: ${usStates[0].capital}</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/population.png" class="state-svg-size" />
                <p class="text-center">Population: ${usStates[0].population}</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/created.png" class="state-svg-size" />
                <p class="text-center">Admission: ${usStates[0].admission}</p>
              </div>
            </div>
          </div>
  `;

  content.insertAdjacentHTML("afterbegin", mora);
};

button.addEventListener("click", function () {
  asd();
});

const url = "https://us-states1.p.rapidapi.com/posts";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3037400f4fmsh6d52eb9d8927a41p13253fjsn42c0b6798534",
    "X-RapidAPI-Host": "us-states1.p.rapidapi.com",
  },
};

const mora = async function () {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
mora();
