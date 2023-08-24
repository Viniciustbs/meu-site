const popup = document.getElementById("popup");
            const popupImage = document.getElementById("popupImage");
            const closeButton = document.getElementById("closeButton");
            const portfolioImages = document.querySelectorAll(".portfolio-image img");

            portfolioImages.forEach((image) => {
                image.addEventListener("click", () => {
                    const imageUrl = image.getAttribute("data-src-popup");
                    popupImage.setAttribute("src", imageUrl);
                    popup.style.display = "flex";
                });
            });

