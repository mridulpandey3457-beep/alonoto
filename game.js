const API_KEY = "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";
async function sendDoubt() {
    alert("Function chal gaya");
    const input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        alert("Apna doubt likho!");
        return;
    }

    document.getElementById("chatMessages").innerHTML +=
        "<p><b>You:</b> " + input + "</p>";

    document.getElementById("chatMessages").innerHTML +=
        "<p id='loading'><b>AI:</b> Soch raha hoon...</p>";

    document.getElementById("userInput").value = "";

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-4o-mini",
                messages: [
                    {
                        role: "user",
                        content: input
                    }
                ]
            })
        });

        const data = await response.json();

        document.getElementById("loading").remove();

        document.getElementById("chatMessages").innerHTML +=
        "<p><b>AI:</b> " + data.choices[0].message.content + "</p>";

    } catch (e) {
        document.getElementById("loading").innerHTML =
        "<b>AI:</b> Error! API connect nahi hui.";
    }
}


    console.log("API Loaded");
    const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
      let text = card.innerText.toLowerCase();

      if (text.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}





    

    