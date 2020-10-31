// lets see what I can do with keylogging stuff (no bad intentions plz no ban)

let Insert = document.querySelector("#insert");

// print out what keys do you press
document.addEventListener('keypress', (event) => {
  const keyName = event.key;

  Insert.innerHTML += `-> oh wow you pressed <b>${keyName}</b>!!<br>`;
});
