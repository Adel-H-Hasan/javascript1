document.getElementById("startBtn").addEventListener("click", startMembership);

function startMembership() {
  let name = prompt("Please enter your name:");
  let membership = prompt("Please enter your membership type (student or regular):");

  let title;
  if (membership === "student") {
    title = "Scholar";
  } else if (membership === "regular") {
    title = "Member";
  } else {
    title = "";
  }

  if (title !== "") {
    alert("Welcome " + title + " " + name + "!");
  } else {
    alert("Welcome " + name + "!");
  }

  let genre = prompt("Do you prefer fiction or non-fiction books?");
  let bookTitle = prompt("What is the title of the book you want to borrow?");

  alert("Your book \"" + bookTitle + "\" is being reserved for you.");

  console.log(name + " ordered the book: " + bookTitle);
}