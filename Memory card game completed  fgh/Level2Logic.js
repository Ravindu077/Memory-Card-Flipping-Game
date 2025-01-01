const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 30;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;
let level = 1;


function initTimer() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableDeck = true;
      alert("Time's up! Please press 'Get more time' Button to get extra 30 secs."); // Display confirmation message
    } else {
      timeLeft--;
      timeTag.innerText = timeLeft;
    }
  }


function flipCard({ target: clickedCard }) {
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
        refreshBtn.classList.add('active'); // Add 'active' class to refresh button
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 3 && timeLeft > 0) {
            
            level++;
            clearInterval(timer);
            setTimeout(() => {
                if (window.confirm("Congratulations!!! You have completed the This level. Click OK to play the Tomato Game")) {
                    window.location.href = `Tomato.html?level=${level}&timeLeft=${timeLeft}`; // Redirect to Tomato game after confirmation
                }
            }, 1000); 

            return;
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    //if not matched
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 1, 2, 3];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", () => {
    if (timeLeft <= 0) {
        window.location.href = `Tomato.html?level=${level}&timeLeft=${timeLeft}`; // Redirect to Tomato game after confirmation
    }
  });

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});