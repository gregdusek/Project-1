/* ======================
CACHED DOM NOTES
=========================*/

const beginButton = document.querySelector(".lets-fish");
const modal = document.querySelector(".modal");
const carousel = document.querySelector(".carousel");
const carouselImage = document.querySelector('.carousel img');
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const getStarted = document.querySelector('.get-started');




/* ======================
GLOBAL VARS
=========================*/

const backgroundImage = [
    "https://i.imgur.com/eld9h7F.jpg",
    "https://i.imgur.com/RgjgLFw.jpg",
    "https://i.imgur.com/xxoV8FQ.jpg",
    "https://i.imgur.com/omTBhfL.jpg",
    "https://i.imgur.com/Vt4eRFn.jpg",
];

let slideIndex = 0;

/* =============================
FUNCTIONS
============================= */


// create a toggleModal function
// that either adds or removes a .open class on the modal

const toggleModal = () => {
    modal.classList.toggle("open");
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







/* =============================
EVENT LISTENERS
============================= */

// When the user clicks on the begin game button
// Toggle the modal

beginButton.addEventListener("click", toggleModal);
carouselNext.addEventListener("click", changeSlideNext);
carouselPrevious.addEventListener("click", changeSlidePrevious);
carouselSelect.addEventListener("click", updateBackground);
getStarted.addEventListener("click", openCarousel);


