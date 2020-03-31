let array = ["blue", "red", "black", "white", "green"];
const app = document.getElementById("app");

const longerthan4 = array.some(item => {
  return item.length > 2;
});

app.insertAdjacentHTML("beforeend", "Are there any elements longer than 4 letters? " + longerthan4);
