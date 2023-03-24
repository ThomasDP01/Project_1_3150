const btn1 = document.getElementById("selecter1");
const btn2 = document.getElementById("selecter2");
const reviews = document.getElementById("reviews");
const reviewSection = document.getElementById("reviewSection");
const tips = document.getElementById("tips");
const tipSection = document.getElementById("tipSection");

let rClicked = false;
let tClicked = false;
btn1.addEventListener("click", (e) => {
  if (rClicked == false) {
    reviewSection.classList.remove("unseen");
    rClicked = true;
    if (tipSection.classList.contains("unseen") == false) {
      tipSection.classList.add("unseen");
      tClicked = false;
    }
  } else {
    reviewSection.classList.add("unseen");
    rClicked = false;
  }
});

btn2.addEventListener("click", (e) => {
  if (tClicked == false) {
    tipSection.classList.remove("unseen");
    tClicked = true;
    if (reviewSection.classList.contains("unseen") == false) {
      reviewSection.classList.add("unseen");
      rClicked = false;
    }
  } else {
    tipSection.classList.add("unseen");
    tClicked = false;
  }
});

// add comments

let tipReview = localStorage.getItem("tipReview");
let game = localStorage.getItem("game");
let uName = localStorage.getItem("name");
let email = localStorage.getItem("email");
let comment = localStorage.getItem("comment");
console.log(tipReview);
console.log(game);
console.log(uName);
console.log(email);
console.log(comment);

const disName = document.createElement("span");
const inpName = document.createTextNode(uName);

const disMail = document.createElement("span");
const inpMail = document.createTextNode(email);

const disComment = document.createElement("p");
const inpComment = document.createTextNode(comment);

const container = document.createElement("div");
container.classList.add("reviews");
container.appendChild(disName);
container.appendChild(disMail);
container.appendChild(disComment);

disName.appendChild(inpName);
disMail.appendChild(inpMail);
disComment.appendChild(inpComment);
switch (tipReview) {
  case "review":
    reviews.appendChild(container);

    break;

  case "tip":
    tips.appendChild(container);
    break;
}
