function runQ7() {
  for (let i = 0; i <= 5; i++) {
    alert(i);
  }
}

function runQ8() {
  let result = "";
  for (let i = 0; i <= 5; i++) {
    result += i + " ";
  }
  alert(result);
}

function runQ9() {
  let result = "";
  for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
      result += i + " ";
    }
  }
  alert(result);
}

function runQ10() {
  let num = Number(prompt("Enter a number between 0 and 100:"));

  while (num < 0 || num > 100) {
    num = Number(prompt("Out of range. Enter a number between 0 and 100:"));
  }

  alert("You entered: " + num);
}

function runQ11() {
  let num = prompt("Enter a number between 0 and 100:");

  while (isNaN(num) || Number(num) < 0 || Number(num) > 100) {
    num = prompt("Invalid input. Enter a number between 0 and 100:");
  }

  alert("You entered: " + num);
}

function runQ12() {
  let n = Number(prompt("Enter an integer:"));
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  alert(sum);
}

function runQ13() {
  let n = Number(prompt("Enter an integer:"));
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  let average = sum / (n + 1);
  alert(average);
}