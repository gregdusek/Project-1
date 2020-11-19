/* ======================
CACHED DOM NOTES
=========================*/


const playGameButton = document.querySelector(".play-game");
const modalPlayGame = document.querySelector(".modal-play-game");
const gameRulesButton = document.querySelector(".game-rules");
const getStarted = document.querySelector(".get-started");
const modalGameRules = document.querySelector(".modal-game-rules")
const resetGame = document.querySelector(".reset-game");
const carousel = document.querySelector(".carousel");
const carouselImage = document.querySelector(".carousel img");
const carouselNext = document.querySelector(".carousel-next");
const carouselPrevious = document.querySelector(".carousel-previous");
const carouselSelect = document.querySelector(".carousel-select");
const closeRules = document.querySelector(".close-rules");



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

const openModalRules = () => {
    modalGameRules.classList.toggle("open");
}

const closeModalRules = () => {
    modalGameRules.classList.remove("open");
}


/* =============================
RESET GAME
============================= */
function resetTheGame () {
    resetGame = location.reload();
}


/* =============================
EVENT LISTENERS
============================= */

// When the user clicks on the begin game button
// Toggle the modal


playGameButton.addEventListener("click", toggleModal);
gameRulesButton.addEventListener("click", openModalRules);
resetGame.addEventListener("click", resetTheGame);
carouselNext.addEventListener("click", changeSlideNext);
carouselPrevious.addEventListener("click", changeSlidePrevious);
carouselSelect.addEventListener("click", updateBackground);
getStarted.addEventListener("click", openCarousel);
closeRules.addEventListener("click", closeModalRules);


