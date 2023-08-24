// Este script determina a navegação de imagens.

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeButton = document.getElementById("closeButton");
const portfolioImages = document.querySelectorAll(".portfolio-image img");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

portfolioImages.forEach((image) => {
    image.addEventListener("click", () => {
        const imageUrl = image.getAttribute("data-src-popup");
        popupImage.setAttribute("src", imageUrl);
        popup.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});

let currentImageIndex = 0;
const portfolioImagesArray = Array.from(portfolioImages);

portfolioImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentImageIndex = index;
        const imageUrl = image.getAttribute("data-src-popup");
        popupImage.setAttribute("src", imageUrl);
        popup.style.display = "flex";
    });
});

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + portfolioImagesArray.length) % portfolioImagesArray.length;
    const imageUrl = portfolioImagesArray[currentImageIndex].getAttribute("data-src-popup");
    popupImage.setAttribute("src", imageUrl);
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % portfolioImagesArray.length;
    const imageUrl = portfolioImagesArray[currentImageIndex].getAttribute("data-src-popup");
    popupImage.setAttribute("src", imageUrl);
});
