/* ======================
CACHED DOM NODES
=========================*/

const playGameButton = document.querySelector("#play-game");
const modalPlayGame = document.querySelector("#modal-play-game");
const gameRulesButton = document.querySelector("#game-rules");
const getStarted = document.querySelector("#get-started");
const modalGameRules = document.querySelector("#modal-game-rules")
const resetGame = document.querySelector("#reset-game");
const carousel = document.querySelector(".carousel");
const carouselImage = document.querySelector(".carousel img");
const carouselNext = document.querySelector(".carousel-next");
const carouselPrevious = document.querySelector(".carousel-previous");
const carouselSelect = document.querySelector(".carousel-select");
const closeRules = document.querySelector("#close-rules");
const tieFlyButton = document.querySelector("#tie-fly");
const modalGameBoard = document.querySelector("#modal-game-board");
const castButton = document.querySelector("#cast");
const reelButton = document.querySelector("#reel-in");
const statsContainer = document.querySelector(".stats-container");

/* ======================
GLOBAL VARS
=========================*/
const gameState = {
    castDistance: 0,
    reelDistance: 0,
    currentFly: null,
    currentFish: null,
};

const backgroundImage = [
    "https://res.cloudinary.com/gregdusek/image/upload/v1605670765/Hopper%20Fly%20Fishing/moutainvalley_eidikw.jpg",
    "https://res.cloudinary.com/gregdusek/image/upload/v1605670764/Hopper%20Fly%20Fishing/mountainpond_rqluit.jpg",
    "https://res.cloudinary.com/gregdusek/image/upload/v1605670764/Hopper%20Fly%20Fishing/mountainstream_fhlopa.jpg",
    "https://res.cloudinary.com/gregdusek/image/upload/v1605670764/Hopper%20Fly%20Fishing/flowingriver_lzqqrq.jpg",
    "https://res.cloudinary.com/gregdusek/image/upload/v1605670764/Hopper%20Fly%20Fishing/desertriver_qqfkge.jpg",
    "https://res.cloudinary.com/gregdusek/image/upload/v1605670764/Hopper%20Fly%20Fishing/icelandicriver_bgt1xq.jpg",
];

let slideIndex = 0;

// Fly array 
const flyArray = ["Mayfly Nymph", "Caddisfly Hatch", "Stonefly Nymph", "Squirminator Jig", "Blue Winged Olive"]


// Array with values for different fish that will be utilized throughout the game.
const fishArray = [
    {
        type: "Rainbow Trout",
        stamina: 7,
        luck: 9,
        weight: 4,
    },
    {
        type: "Brown Trout",
        stamina: 6,
        luck: 12,
        weight: 2,
    },
    {
        type: "Steel Head",
        stamina: 12,
        luck: 9,
        weight: 12, 
    },
    {
        type: "Walleye",
        stamina: 18,
        luck: 9,
        weight: 9,

    },
    {
        type: "Black Bass",
        stamina: 9,
        luck: 9,
        weight: 4,
    },
    {
        type: "Pike",
        stamina: 30,
        luck: 9,
        weight: 15,
    }
];


// Array that sets up our players and assigns them values used in the game. Also gives our gamestats
// values to track.
const player = [
    {name: "Player 1", stamina: 15, luck: 10, fishCaught: 0, fishWeight: 0, casts: 0}, 
    {name: "Player 2", stamina: 15, luck: 10, fishCaught: 0, fishWeight: 0, casts: 0},
];

// const castsMade = 0;
// const fishWeight = 0;
// const fishCaught = 0;
// const playerName = null;

let activePlayer = player[0];

function playerChange () {
    if(activePlayer.fishCaught === 3 && activePlayer === player[0]) {
        activePlayer = player[1]
        modalGameBoard.innerHTML = `<h2>You caught the limit! Let's give the other player a chance to fish.</h2>`;
        setHTML();  
    }; 
};       

function gameOver () {
    if (player[0].fishCaught === 3 && player[1].fishCaught === 3) {
        player[0].fishWeight < player[1].fishWeight;
        modalGameBoard.innerHTML = `<h2>Player 2 wins!.</h2>`;
        resetStats();
    } else if (player[0].fishCaught === 3 && player[1].fishCaught === 3) {
            player[1].fishWeight < player[0].fishWeight;
            modalGameBoard.innerHTML = `<h2>Player 1 wins!.</h2>`;
            resetStats();
    };
};


const resetStats = () => { 
    for(i = 0; i < player.length; i++) {
    player[i].fishCaught = 0
    player[i].fishWeight = 0
    player[i].casts = 0
    };
};

// Function that sets the game stats container innerHTML.
const setHTML = () => { statsContainer.innerHTML =  `<div>${player[0].name}</div>
                                                    <div>Fish: ${player[0].fishCaught}</div>
                                                    <div>Total Weight: ${player[0].fishWeight}</div>
                                                    <div>Casts: ${player[0].casts}</div>
                                                    </br>
                                                    <div>${player[1].name}</div>
                                                    <div>Fish: ${player[1].fishCaught}</div>
                                                    <div>Total Weight: ${player[1].fishWeight}</div>
                                                    <div>Casts: ${player[1].casts}</div>`
                                                 };


/* =============================
FUNCTIONS
============================= */

// create a toggleModal function
// that either adds or removes a .open class on the modal

function toggleModal() {
    modalPlayGame.classList.toggle("open");
}
// Update carousel image
const updateCarouselImage = () => {
    carouselImage.setAttribute('src', backgroundImage[slideIndex]);
}
updateCarouselImage();

// change slide next function
// when the user clicks the next button
// update the carousel image by 1
const changeSlideNext = () => {
    if (slideIndex < backgroundImage.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateCarouselImage();
}
const changeSlidePrevious = () => {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = backgroundImage.length - 1;
    }
    updateCarouselImage();
}
// When the user clicks on the select button
const updateBackground = () => {
    // Make the background of the body element 
    //the current slide in our carousel
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${backgroundImage[slideIndex]})`;
    carousel.remove();
}

const openCarousel = () => {
    // remove the modal
    toggleModal();
    // add the open class to the open carousel
    carousel.classList.add('open');
}

// Opens the game rules modal
const toggleModalRules = () => {
    modalGameRules.classList.toggle("open");
}


// Opens gameboard modal when fly is tied
const toggleGameBoardModal = () => {
    modalGameBoard.classList.toggle("open");
}

// Function to tie your fly, open the gameboard modal
// that announces the fly you tied.

const tieFly = () => {
    random = Math.floor(Math.random() * flyArray.length);
    gameState.currentFly = flyArray[random];
    modalGameBoard.innerHTML = `<h2>You selected a ${gameState.currentFly}. Now you're ready to cast!</h2>`;
    toggleGameBoardModal();
    setHTML();
    // console.log(gameState.currentFly);
 };


// Function to cast fly, update the gameboard modal
// that announces how far you cast.
const min = 10;
const max = 29;

function castFly() {
    // Can't get the modalGameBoard to open and present the text below when you try casting
    // without tying a fly.

    // if (modalGameBoard.classList.toggle("closed")) {
    //     modalGameBoard.innerHTML = `<h2>You can't catch fish out of thin air. You need bait. Go tie a fly!</h2>`;
    // } else {
        // playerChange();
        gameState.castDistance = Math.floor(Math.random() * (max - min + 1) + min);
        modalGameBoard.innerHTML = `<h2>You casted ${gameState.castDistance} feet. Now reel it in and hook a fish!</h2>`;
        activePlayer.casts++;
        // castsMade.innerHTML = `${activePlayer.casts}`
        // console.log(castDistance);
        
};

// Function for reeling the fish in & updates the modal based on the game state.
// Decrements by a hard coded value.
const reelIn = () => {
    gameState.reelDistance = gameState.castDistance -=6.5
    if (gameState.castDistance >= 0) {
        modalGameBoard.innerHTML = `<h2>You have ${gameState.reelDistance} more feet. Keep reeling in.</h2>`;
    } else {
        fishStrike();
    }
        playerChange();
};

// Fish strike function calls a random fish from the array to stike. 
const fishStrike = () => {
    random = Math.floor(Math.random() * fishArray.length);
    gameState.currentFish = fishArray[random];
    console.log(gameState.currentFish);
// Fish stats is compared against the player stats. If the player has higher luck & stamina, the player pulls in the fish.
// If the player has lower stamnina the fish gets away. If the player has lower luck, the player never sees the fish.
    if (activePlayer.luck > gameState.currentFish.luck && activePlayer.stamina > gameState.currentFish.stamina) {
        // modalGameBoard.innerHTML = `<h2>You hooked a ${gameState.currentFish.type}, now reel it in!</h2>`;
        // can't get a fish to randomly strike after you start reeling in.
        activePlayer.fishCaught++;
        // fishCaught.innerHTML = `${activePlayer.fishCaught}`
        activePlayer.fishWeight += gameState.currentFish.weight;
        // fishWeight.innerHTML = `${activePlayer.fishWeight}`;
        modalGameBoard.innerHTML = `<h2>You caught a ${gameState.currentFish.type} that weighs ${gameState.currentFish.weight} lbs. Nice work, keep going!</h2>`;
    } else {
        modalGameBoard.innerHTML = `<h2> You hooked a ${gameState.currentFish.type} but it got away. That's why they call it fishing and not catching!</h2>`;
    };
    setHTML();
    gameOver();
};

/* =============================
RESET GAME
============================= */
function resetTheGame () {
    resetStats();
    window.location.reload();
};
/* =============================
EVENT LISTENERS
============================= */

playGameButton.addEventListener("click", toggleModal);
gameRulesButton.addEventListener("click", toggleModalRules);
carouselNext.addEventListener("click", changeSlideNext);
carouselPrevious.addEventListener("click", changeSlidePrevious);
getStarted.addEventListener("click", openCarousel);
closeRules.addEventListener("click", toggleModalRules);
tieFlyButton.addEventListener("click", tieFly);
castButton.addEventListener("click", castFly);
reelButton.addEventListener("click", reelIn);
carouselSelect.addEventListener("click", updateBackground);
resetGame.addEventListener("click", resetTheGame);
