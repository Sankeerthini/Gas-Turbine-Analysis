function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const isDisplayed = popup.style.display === 'flex';
    popup.style.display = isDisplayed ? 'none' : 'flex';
    document.body.style.overflow = isDisplayed ? 'auto' : 'hidden';
}
window.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup-window');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const popups = document.querySelectorAll('.popup-window');
        popups.forEach(popup => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
});
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
