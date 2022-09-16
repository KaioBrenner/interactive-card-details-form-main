/*Data entry section*/

/*Name section */
function instaName() {
  const name = document.getElementById("name").value;
  let cardName = document.getElementById("cardName");

  cardName.innerHTML = name;

  if (name.length == 0) {
    cardName.innerHTML = "Jane Appleseed";
  }

  /*const form = document.getElementById("form");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    checkName(form);
  });
  */
}
/*Card number section */

function instaNumber() {
  const number = document.getElementById("number").value;
  let cardNumber = document.getElementById("cardNumber");

  cardNumber.innerHTML = number;
  if (number.length == 0) {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  }
  const masks = {
    number(value) {
      console.log(value);
      return value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2");
    },
  };
  document.querySelectorAll("input").forEach(($input) => {
    const field = $input.dataset.js;

    $input.addEventListener(
      "input",
      (e) => {
        e.target.value = masks[field](e.target.value);
      },
      false
    );
  });
}

/*Month section */

function instaMonth() {
  const month = document.getElementById("month").value;
  let cardMonth = document.getElementById("cardMonth");

  cardMonth.innerHTML = month;
  if (month.length == 0) {
    cardMonth.innerHTML = "00";
  }
}
/*Year section */

function instaYear() {
  const year = document.getElementById("year").value;
  let cardYear = document.getElementById("cardYear");

  cardYear.innerHTML = year;
  if (year.length == 0) {
    cardYear.innerHTML = "00";
  }
}
/*Cvc section */

function instaCvc() {
  const cvc = document.getElementById("cvc").value;
  let cardCvc = document.getElementById("cardCvc");

  cardCvc.innerHTML = cvc;
  if (cvc.length == 0) {
    cardCvc.innerHTML = "000";
  }
}

/*End of Data entry section*/

/*Validation Section*/

var nameState = 0;
var numberState = 0;
var monthYearState = 0;
var cvcState = 0;

/*Name validation*/

function checkName() {
  
  const name = document.getElementById("name").value;
  const small = document.getElementsByTagName("small")[0];

  if (name.length == 0) {
    small.style.display = "block";
  } else {
    small.style.display = "none";
  }

}

/*Number validation*/

function checkNumber() {
  const number = document.getElementById("number").value;
  const small = document.getElementsByTagName("small")[1];

  if (number.length < 19) {
    small.style.display = "block";
  } else {
    small.style.display = "none";
  }

}

/*Month and Year validation*/

function checkMonthYear() {
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const small = document.getElementsByTagName("small")[2];

  if (month.length == 2 && year.length == 2) {
    small.style.display = "none";
  } else {
    small.style.display = "block";
  }

}

/*Cvc validation*/

function checkCvc() {
  const cvc = document.getElementById("cvc").value;
  const small = document.getElementsByTagName("small")[3];

  if (cvc.length < 3) {
    small.style.display = "block";
  } else {
    small.style.display = "none";
  }

  return state;
}

/*End of validation section*/

/*Submit section */

function preventSubmit() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function change() {

  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const cvc = document.getElementById("cvc").value;

  const form = document.getElementById("form");
  const completeState = document.getElementById("complete-state");

  var nameState = 0;
  var numberState = 0;
  var monthYearState = 0;
  var cvcState = 0;

  if (name.length >= 12) {
    nameState = 1;
  } else {
    nameState = 0;
  }

  if (number.length == 19) {
    numberState = 1;
  } else {
    numberState = 0;
  }

  if (month.length == 2 && year.length == 2) {
    monthYearState = 1;
  } else {
    monthYearState = 0;
  }

  if (cvc.length == 3) {
    cvcState = 1;
  } else {
    cvcState = 0;
  }

  console.log(nameState)
  console.log(numberState)
  console.log(monthYearState)
  console.log(cvcState)

  if (
    nameState == 1 &&
    numberState == 1 &&
    monthYearState == 1 &&
    cvcState == 1
  ) {
    form.style.display = "none";
    completeState.style.display = "flex";
  }


  /*form.style.display = "none"
    completeState.style.display = "flex"*/
}

function goHome(){
  const form = document.getElementById("form");
  const completeState = document.getElementById("complete-state");

  form.style.display = "flex";
  completeState.style.display = "none";
}






/*const form = document.getElementById("form");
const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    checkName(form);
});

function checkName(form) {
    let name = form.name.value;
  
    let letters = /[aA-zZ]+/;
  
    if (name.match(letters)) {
      console.log(name);
    } else {
      console.log("Digite um nome válido.");
      }
  } */
