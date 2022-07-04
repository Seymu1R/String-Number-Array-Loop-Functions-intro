var body = document.body;

body.style.backgroundColor = "white";

function Mode() {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white ";
    body.style.color = "black";
  }
}
