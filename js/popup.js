let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.onclick = () => {
  let color = prompt("What color would you like?", "green");
  if (color != null) {
    chrome.storage.sync.set({ color });
    changeColor.style.backgroundColor = color;
  }
}
