closeButton.addEventListener("click", () => {
    popup.style.display = "none";
    popupImage.src = ""; // Zera todos os URLS "source" ao clicar no closebutton, evita que continue a reprodução após fechar o video. 
});