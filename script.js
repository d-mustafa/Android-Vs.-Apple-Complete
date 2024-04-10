// ANDROID VS. APPLE
// Variables
let androidBtn = document.getElementById("android");
let appleBtn = document.getElementById("apple");
let img = document.getElementById("an-vs-ap-img");
let exploreBtn = document.getElementById("explore-btn");
let html = document.getElementById("the-html");

// Event Listener
androidBtn.addEventListener("click", androidPage);
appleBtn.addEventListener("click", applePage);

// Event Function
function androidPage() {
  // OUTPUT
  // Image Change
  img.src = "images/Android-Logo.jpg";

  // Explore the Debate Modifications
  exploreBtn.innerHTML = "Android Home";
  exploreBtn.style.backgroundColor = "#a4c93b";
  exploreBtn.href = "https://www.android.com/";

  // HTML Modifications
  html.style.backgroundColor = "#a4c93b";
  html.style.fontFamily = `'Roboto', sans-serif`;

  // Class AddOns
  androidBtn.classList.add("active");
  appleBtn.classList.remove("active");
}


function applePage() {
  // OUTPUT
  // Image Change
  img.src = "images/Apple-Logo.jpg";

  // Explore the Debate Modifications
  exploreBtn.innerHTML = "Apple Home";
  exploreBtn.style.backgroundColor = "#b6bcca";
  exploreBtn.href = "https://www.apple.com/";

  // HTML Modifications
  html.style.backgroundColor = "#b6bcca";
  html.style.fontFamily = `'Brygada 1918', serif`;

  // Class AddOns
  appleBtn.classList.add("active");
  androidBtn.classList.remove("active");
}
