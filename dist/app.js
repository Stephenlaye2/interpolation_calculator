const y1 = document.getElementById("y1");
const y2 = document.getElementById("y2");
const y3 = document.getElementById("y3");
const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const x3 = document.getElementById("x3");

// Interpolation formula ((y2-y1)/(x2-x1))/((y3-y2)/(x3-x2))

document.querySelector("form").addEventListener("submit", calculate);

function calculate(e) {
  const y2y1 = y2.value - y1.value;
  const y3y2 = y3.value - y2.value;
  const y2y3 = y2.value - y3.value;
  const y3y1 = y3.value - y1.value;
  const x2x1 = x2.value - x1.value;
  const x3x2 = x3.value - x2.value;
  const x1x3 = x1.value - x3.value;
  const x2x3 = x2.value - x3.value;

  // calculate y1 value
  const y1Value = parseFloat(y2.value - (y3y2 * x2x1) / x3x2);

  // Calculate y2 value
  const y2Value = parseFloat((y1.value * x2x3 - y3.value * x2x1) / x1x3);

  // Calculate y3 value
  const y3Value = parseFloat(Number(y2.value) + Number((y2y1 * x3x2) / x2x1));

  // Calculate x1 value
  const x1Value = parseFloat(x2.value - (y2y1 * x3x2) / y3y2);

  // Calculate x2 value
  const x2Value = parseFloat((x3.value * y2y1 - x1.value * y2y3) / y3y1);

  // Calculate x3 value
  const x3Value = parseFloat(Number(x2.value) + Number((y3y2 * x2x1) / y2y1));
  const result = document.querySelector("#intResult");
  if (y1.value === "") {
    result.value = `y1 =${y1Value}`;
  } else if (y2.value === "") {
    result.value = `y2 = ${y2Value}`;
  } else if (y3.value === "") {
    result.value = `y3 = ${y3Value}`;
  } else if (x1.value === "") {
    result.value = `x1 = ${x1Value}`;
  } else if (x2.value === "") {
    result.value = `x2 = ${x2Value}`;
  } else if (x3.value === "") {
    result.value = `x3 = ${x3Value}`;
  }
  if (
    y1.value === "" &&
    y2.value === "" &&
    y3.value === "" &&
    x1.value === "" &&
    x2.value === "" &&
    x3.value === ""
  ) {
    result.value = "";
  }
  e.preventDefault();
}
