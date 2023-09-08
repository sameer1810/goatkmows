var currentPage = window.location.pathname.split("/").pop();

// Get all the navigation links
var navLinks = document.querySelectorAll("nav a");

// Loop through the links and add the "active" class to the current page's link
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href") === currentPage) {
        navLinks[i].classList.add("active");
    }
}