function getValidMembership() {
  let membership = prompt(
    "Please enter your membership type (student or regular):",
  );

  while (membership !== "student" && membership !== "regular") {
    membership = prompt(
      "Invalid input. Please enter either 'student' or 'regular':",
    );
  }

  return membership;
}

function collectUserData() {
  let name = prompt("Please enter your name:");
  let membershipType = getValidMembership();
  let bookGenre = prompt("Do you prefer fiction or non-fiction books?");
  let bookTitle = prompt("What is the title of the book you want to borrow?");

  let userData = [name, membershipType, bookGenre, bookTitle];
  return userData;
}

function startMembership() {
  let userData = collectUserData();

  let title;
  if (userData[1] === "student") {
    title = "Scholar";
  } else {
    title = "Member";
  }

  alert("Welcome " + title + " " + userData[0] + "!");
  alert('Your book "' + userData[3] + '" is being reserved for you.');

  for (let i = 0; i < userData.length; i++) {
    console.log(userData[i]);
  }
}

document.getElementById("startBtn").addEventListener("click", startMembership);
