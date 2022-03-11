const input1 = document.querySelector("#pwd1");
const input2 = document.querySelector("#pwd2");
const button = document.querySelector("#togglebutton");
const field = document.querySelector(".box");

// Show Password
button.addEventListener("click", showPassword);

function showPassword() {
  if (input1.type === "password") {
    input1.type = "text";
    input2.type = "text";
    button.textContent = "Hide Password";
  } else {
    input1.type = "password";
    input2.type = "password";
    button.textContent = "Show Password";
  }
}

field.addEventListener("input", function () {
  const checkfields = document.querySelectorAll("span");
  if (checkEqual()) {
    checkLowerCase();
    checkUpperCase();
    checkNumbers();
    checklength();
  } else {
    checkfields.forEach((field) => (field.textContent = "❌"));
  }
});

function checkEqual() {
  const equal = document.querySelector("#check-equal");
  if (input1.value === input2.value && input1.value !== "") {
    equal.textContent = "✅";
    return true;
  } else {
    equal.textContent = "❌";
    return false;
  }
}

function checkLowerCase() {
  const lowercase = document.querySelector("#check-lowercase");
  if (/[a-z]/.test(input1.value)) {
    lowercase.textContent = "✅";
  }
}

function checkUpperCase() {
  const uppercase = document.querySelector("#check-uppercase");
  if (/[A-Z]/.test(input1.value)) {
    uppercase.textContent = "✅";
  }
}

function checkNumbers() {
  const numbers = document.querySelector("#check-numbers");
  if (/[0-9]/.test(input1.value)) {
    numbers.textContent = "✅";
  }
}

function checklength() {
  const length = document.querySelector("#check-10character");
  if (input1.value.length >= 10) {
    length.textContent = "✅";
  }
}
