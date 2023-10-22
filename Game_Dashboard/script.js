
const menuButton = document.getElementById("menu-button");
const menuItems = document.querySelector(".left-container .menu-items");
const chatButton = document.getElementById("chat-button");
const rightContainer = document.querySelector(".right-container");

menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("menu-items-visible");
});



// Add a click event listener to the chat button
chatButton.addEventListener("click", () => {
    // Toggle a class on the right container
    rightContainer.classList.toggle("right-container-visible");
});
