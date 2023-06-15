// variables
const checkFlight = document.querySelector("#checkFlight");
const inputFlight = document.querySelector("#inputFlight");
function checkCheckbox() {
  if (checkFlight.checked) {
    inputFlight.classList.add("show");
  } else {
    inputFlight.classList.remove("show");
  }
}
