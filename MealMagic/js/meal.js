// Select buttons and container for Sign In / Sign Up transition
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Ensure the elements exist before adding event listeners
if (sign_in_btn && sign_up_btn && container) {
  // Add event listener for the "Sign Up" button
    sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");  // Switch to Sign-Up form
});

  // Add event listener for the "Sign In" button
    sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");  // Switch to Sign-In form
    });
}

// Add any other JavaScript functionality specific to your pages below
