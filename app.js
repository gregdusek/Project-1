/* ======================
CACHED DOM NOTES
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



/* ======================
GLOBAL VARS
=========================*/

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


// Fish array with stats
let fish = [
    {
        type: "Rainbow Trout",
        stamina: 7,
    },
    {
        type: "Brown Trout",
        stamina: 6,
    },
    {
        type: "Steel Head",
        stamina: 12,
    },
    {
        type: "Walleye",
        stamina: 18,
    },
    {
        type: "Black Bass",
        stamina: 9,
    },
    {
        type: "Pike",
        stamina: 30,
    }
]

//  Player array with stats
let player = [
    {
        name: "Player 1",
        stamina: 10,
    },
    {
        name: "Player 2",
        stamina: 10,
    },
]

// =============================
// if(Math.random() < player[0].stamina) {
//     let modal.innerHTML = `<h2> You've casted</h2>`
// }




/* =============================
FUNCTIONS
============================= */


// create a toggleModal function
// that either adds or removes a .open class on the modal

const toggleModal = () => {
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
let currentFly = null;
const tieFly = () => {
    const random = Math.floor(Math.random() * flyArray.length);
    let currentFly = flyArray[random];
    modalGameBoard.innerHTML = `<h2>You selected a ${currentFly}. Now you're ready to cast!</h2>`;
    toggleGameBoardModal();
    // console.log(currentFly);
 };


// Function to cast fly, update the gameboard modal
// that announces how far you cast.
const min = 10;
const max = 30;

function castFly() {

    // Can't get the modalGameBoard to open and present the text below when you try casting
    // without tying a fly.

    // if (modalGameBoard.classList.toggle("closed")) {
    //     modalGameBoard.innerHTML = `<h2>You can't catch fish out of thin air. You need bait. Go tie a fly!</h2>`;
    // } else {
        let castDistance = Math.floor(Math.random() * (max - min + 1) + min);
        modalGameBoard.innerHTML = `<h2>You casted ${castDistance} feet. Now reel it in and hook a fish!</h2>`;
        // console.log(castDistance);
};



const reelIn = () => {
    let reelDistance = 
    modalGameBoard.innerHTML = `<h2>You have ${reelDistance} more feet. Keep reeling in.</h2>`;
};






/* =============================
RESET GAME
============================= */
function resetTheGame () {
    resetGame = location.reload();
}


/* =============================
EVENT LISTENERS
============================= */

playGameButton.addEventListener("click", toggleModal);
gameRulesButton.addEventListener("click", toggleModalRules);
resetGame.addEventListener("click", resetTheGame);
carouselNext.addEventListener("click", changeSlideNext);
carouselPrevious.addEventListener("click", changeSlidePrevious);
carouselSelect.addEventListener("click", updateBackground);
getStarted.addEventListener("click", openCarousel);
closeRules.addEventListener("click", toggleModalRules);
tieFlyButton.addEventListener("click", tieFly);
castButton.addEventListener("click", castFly);
reelButton.addEventListener("click", reelIn);