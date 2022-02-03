const userInput = document.getElementById("your-message");
const input = document.getElementById("userText");

function submitText() {
  input.innerHTML = userInput.value;
  document.getElementById("your-message").value = "";
}

function chatbot() {
  const bot = {
    "Hei og hopp": "Hei på deg",
    "Hvordan har du det?": "Jeg har det bare bra!",
    "Hva heter du?": "Jeg heter Botleif",
    "Hva jobber du med?": "Jeg jobber som hitech chatbot",
    "Hadet!": "Hadet bra!",
  };

  const user = document.getElementById("your-message").value;

  if (user in bot) {
    document.getElementById("chatbotText").innerHTML = bot[user];
  } else {
    document.getElementById("chatbotText").innerHTML =
      "Jeg forstår ikke hva du mener!";
  }
}
