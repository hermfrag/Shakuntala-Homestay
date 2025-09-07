// Get the hamburger menu and the navigation menu elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add a click event listener to the hamburger menu
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on both the hamburger and the nav menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Add click event listeners to all navigation links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        // If the mobile menu is open, close it when a link is clicked
        if (hamburger.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});