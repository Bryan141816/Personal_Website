document.addEventListener("DOMContentLoaded",function(){
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navbarLinks = document.querySelectorAll('.navlink');
    const navLinkContainer = document.getElementById('nav-link-container');

    navToggleBtn.addEventListener('click', function() {
        if (window.getComputedStyle(navLinkContainer).display === 'none') {
            navLinkContainer.style.display = 'flex';
            navToggleBtn.textContent = '✕'; // Change to close icon
        } else {
            navLinkContainer.style.display = 'none';
            navToggleBtn.textContent = '☰'; // Change to menu icon
        }
        navbarLinks.forEach(link => {
            // Delay adding the class by 50 milliseconds
            setTimeout(() => {
                link.classList.toggle('navvisible');
            }, 100);
        });
    });
    

    setTimeout(() => {
        const imageBoxes = document.querySelectorAll(".moto");
        imageBoxes.forEach(imageBox => {
            imageBox.classList.add("visible");
        });

        const mainText = document.getElementById("mainText");
        mainText.classList.add("textVisible");
    }, 500); 
});