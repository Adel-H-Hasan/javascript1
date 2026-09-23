function runQ2() {
  let num = prompt("Enter a number:");
  alert(num);
}

function runQ3() {
  let a = Number(prompt("Enter first number:"));
  let b = Number(prompt("Enter second number:"));

  if (a < b) {
    alert(a + ", " + b);
  } else {
    alert(b + ", " + a);
  }
}

function runQ4() {
  let a = Number(prompt("Enter first number:"));
  let b = Number(prompt("Enter second number:"));

  alert(a > b ? a : b);
}

function runQ5() {
  let a = prompt("Enter first number:");
  let b = prompt("Enter second number:");

  alert(Number(a) + Number(b));
}

function runQ6() {
  let num = Number(prompt("Enter a number from 1 to 9:"));

  switch (num) {
    case 1:
      alert("ONE");
      break;
    case 2:
      alert("TWO");
      break;
    case 3:
      alert("THREE");
      break;
    case 4:
      alert("FOUR");
      break;
    case 5:
      alert("FIVE");
      break;
    case 6:
      alert("SIX");
      break;
    case 7:
      alert("SEVEN");
      break;
    case 8:
      alert("EIGHT");
      break;
    case 9:
      alert("NINE");
      break;
    default:
      alert("PLEASE TRY AGAIN");
  }
}

function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

function runQ8() {
  let input = prompt("Enter a string to swap the case of:");
  alert(swapCase(input));
}

function toCamelCase(str) {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return result;
}

function runQ9() {
  let input = prompt("Enter a phrase to convert to CamelCase:");
  alert(toCamelCase(input));
}

function runQ7() {
  let birthYear = Number(prompt("Enter your birth year:"));
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  if (age > 60) {
    alert("You may join the seniors' program.");
  } else if (age > 30) {
    alert("You are not eligible. You may join other programs.");
  } else if (age >= 18) {
    alert("You are eligible. Start your application.");
  } else {
    alert("You may join the kids' program.");
  }
}