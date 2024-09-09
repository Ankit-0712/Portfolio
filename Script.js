const dayNight = document.querySelector(".dayNight");
const body = document.querySelector("body");

dayNight.addEventListener("click", () => {
    // Toggle dark mode class
    body.classList.toggle("dark-mode");
    
    // Check if dark mode is active
    const isDark = body.classList.contains("dark-mode");

    // Toggle icons visibility based on dark mode state
    if (isDark) {
        document.querySelector("ion-icon[name='moon-outline']").style.display = 'none';
        document.querySelector("ion-icon[name='sunny-outline']").style.display = 'block';
    } else {
        document.querySelector("ion-icon[name='sunny-outline']").style.display = 'none';
        document.querySelector("ion-icon[name='moon-outline']").style.display = 'block';
    }
});
