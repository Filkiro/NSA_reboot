const darktheme = document.getElementById('dark');

darktheme.addEventListener("click", function() {
    // Toggle dark mode class on the body element
    document.body.classList.toggle("darkmode");

    // Check if dark mode is enabled and store the state in localStorage
    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('darkmode', 'true');
    } else {
        localStorage.setItem('darkmode', 'false');
    }
});

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('darkmode');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('darkmode');
}

// Check localStorage on page load to see if dark mode was enabled
document.addEventListener("DOMContentLoaded", function() {
    const darkModeEnabled = localStorage.getItem('darkmode') === 'true';
    if (darkModeEnabled) {
        enableDarkMode();
    }
});


