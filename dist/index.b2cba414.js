const content = document.querySelector(".state-content");
const button = document.querySelector(".button");
const asd = function() {
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
button.addEventListener("click", function() {
    asd();
});

//# sourceMappingURL=index.b2cba414.js.map
