const btn1 = document.getElementById("selecter1");
const btn2 = document.getElementById("selecter2");
const reviews = document.getElementById("reviews");
const tips = document.getElementById("tips");
let rClicked = false;
let tClicked = false;
btn1.addEventListener("click", (e) => {
  if (rClicked == false) {
    reviews.classList.remove("unseen");
    rClicked = true;
    if (tips.classList.contains("unseen") == false) {
      tips.classList.add("unseen");
      tClicked = false;
    }
  } else {
    reviews.classList.add("unseen");
    rClicked = false;
  }
});

btn2.addEventListener("click", (e) => {
  if (tClicked == false) {
    tips.classList.remove("unseen");
    tClicked = true;
    if (reviews.classList.contains("unseen") == false) {
      reviews.classList.add("unseen");
      rClicked = false;
    }
  } else {
    tips.classList.add("unseen");
    tClicked = false;
  }
});