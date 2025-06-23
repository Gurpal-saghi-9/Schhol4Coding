let color = "white";

let theme = prompt("Choose a theme color (e.g. light, dark, pink, green):");

if (theme === "light") {
  color = "white";
} else if (theme === "dark") {
  color = "black";
} else if (theme === "pink") {
  color = "pink";
} else if (theme === "green") {
  color = "green";
}

document.body.style.backgroundColor = color;

if (
  theme !== "light" &&
  theme !== "dark" &&
  theme !== "pink" &&
  theme !== "green"
) {
  console.log("Invalid colour");
} else {
  console.log(`Your selected theme is ${theme} and color is ${color} respectively`);
}
