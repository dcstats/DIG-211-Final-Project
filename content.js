var hrefs = $("a[href^='http']");

for (href of hrefs) {
  if (href["href"].includes("signup", "sign-up", "sign", "register", "registration", "account")) {
    href.onclick = function() {
      chrome.runtime.sendMessage("notif");
    }
  }
}

let inputs = document.getElementsByTagName('input');

for (input of inputs) {
  if (input.id.toLowerCase().includes("email") || input.id.toLowerCase().includes("password") ||
    input.id.toLowerCase().includes("name") || input.className.toLowerCase().includes("email") ||
    input.className.toLowerCase().includes("password") || input.className.toLowerCase().includes("name")) {
    input.onchange = function() {
      chrome.runtime.sendMessage("notif");
    }
  }
}