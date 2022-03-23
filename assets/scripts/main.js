const counterDisplay = document.querySelector("h3");
const bubbleMinSize = 50;
const bubbleMaxSize = 300;

let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  const bubbleSize = Math.random() * (bubbleMaxSize - bubbleMinSize) + bubbleMinSize;

  bubble.classList.add("bubbleStyle");
  bubble.style.height = bubbleSize + "px";
  bubble.style.width = bubbleSize + "px";
  bubble.style.top = Math.random() * (150 - 50) + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  document.body.appendChild(bubble);

  bubble.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.classList.remove("bubbleStyle");
  });

  setTimeout(() => {
    bubble.classList.remove("bubbleStyle");
  }, 6000);
};

setInterval(bubbleMaker, 500);