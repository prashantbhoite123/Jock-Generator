// async function fetchData() {
//   const responce = await fetch(
//     "https://official-joke-api.appspot.com/random_joke"
//   );
//   const data = await responce.json();
//   show(data);
// }

// fetchData();

// const heading = document.querySelector("h1");

// function show(data) {
//   console.log(data);
//     heading.innerHTML = data.punchline;
// }

AOS.init({
  duration: 2000,
});

const jock = document.querySelector("h1");
const jockBtn = document.querySelector("#generate-jock");
// console.log(jockBtn);
async function fetchData() {
  const responce = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const data = await responce.json(responce);
  showData(data);
}

function showData(data) {
  jock.innerHTML = data.punchline;
  console.log(data);
}

jockBtn.addEventListener("click", (e) => {
  console.log(e.target);
  fetchData();
});
