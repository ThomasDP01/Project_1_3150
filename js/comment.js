const form = document.getElementById("info");
let input = {};
console.log("hi");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  input = new FormData(form);

  let data = Object.fromEntries(input);
  console.log(data);
  let { tipReview, game, name, email, comment } = data;

  localStorage.setItem("tipReview", tipReview);
  localStorage.setItem("game", game);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("comment", comment);

  //   for (item of input) {
  //     console.log(item);
  //   }
  window.location.href = "../dist/game1.html";
});
