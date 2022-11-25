const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.querySelector(".input__email");

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

input.addEventListener("click", onInput);

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

const btnReg = document.querySelector(".button-input__registration");
const btnInput = document.querySelector(".button-input__entrance");

btnReg.addEventListener("click", () => {
  document.querySelector(".input").style.display = "none";
  document.querySelector(".register").style.display = "flex";
});
btnInput.addEventListener("click", () => {
  document.querySelector(".register").style.display = "none";
  document.querySelector(".input").style.display = "flex";
});

// window.onclick = (e) => {
//   if (e.target == modalOverlay) {
//     modalOverlay.style.display = "none";
//   }
// };
