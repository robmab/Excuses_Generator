function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function genExcuses() {
  let who = ["the dog", "his turtle", "my bird", "the cat"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let first = who[Math.floor(Math.random() * who.length)];
  first = capitalizeFirstLetter(first); //CSS -> text-transform:capitalize
  let second = what[Math.floor(Math.random() * what.length)];
  let third = when[Math.floor(Math.random() * when.length)];

  return first + " " + second + " " + third + ".";
}

window.onload = () => {
  document.querySelector("#excuse").innerHTML = genExcuses();
};

document.querySelector("#bt").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = genExcuses();
});
