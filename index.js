const bubleDisplay = document.querySelector("h3");
let count = 0;

function creatBubble() {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  let plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    count++;
    bubleDisplay.innerText = count;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

// setInterval(creatBubble, 100);
