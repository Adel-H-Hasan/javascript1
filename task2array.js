let availableGenres = ["Fiction", "Science", "History", "Biography"];

function applyDiscount(userData) {
  let membershipType = userData[1];

  if (membershipType === "student") {
    userData.push("20% Discount");
  } else if (membershipType === "regular") {
    userData.push("No Discount");
  }

  return userData;
}

function addNewGenre(genre) {
  availableGenres.push(genre);
}

function displayGenres() {
  for (let i = 0; i < availableGenres.length; i++) {
    console.log("- We offer: " + availableGenres[i]);
  }
}

let userData = ["Adel", "student", "Fiction", "1984"];

userData = applyDiscount(userData);
console.log(userData);

displayGenres();

addNewGenre("Mystery");
console.log("After adding a new genre:");
displayGenres();