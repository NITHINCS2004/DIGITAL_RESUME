
function getThemeOnLoad() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
    } else {
        // Default to light theme if no theme is saved
        document.querySelector("body").setAttribute("data-theme", "light");
    }
}

// Theme switcher logic
const themes = document.getElementsByClassName("theme");
Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        const selectedTheme = e.target.dataset.theme;
        document.querySelector("body").setAttribute("data-theme", selectedTheme);
        localStorage.setItem("theme", selectedTheme); // Save the selected theme to localStorage
    });
});

// Call getThemeOnLoad() when the page loads
document.addEventListener("DOMContentLoaded", getThemeOnLoad);


       
        document.addEventListener('DOMContentLoaded', () => {
            // Function to handle link switching and line animation for each project
            function handleLinkSwitch(projectId, githubUrl, websiteUrl) {
                const dynamicLink = document.getElementById(`dynamicLink${projectId}`);
                const line = document.getElementById(`line${projectId}`);
                let isGitHubLink = true;
        
                // Change content when the animation completes
                line.addEventListener('animationiteration', () => {
                    if (isGitHubLink) {
                        dynamicLink.textContent = "Website - View";
                        dynamicLink.href = websiteUrl;
                    } else {
                        dynamicLink.textContent = "GitHub - Link";
                        dynamicLink.href = githubUrl;
                    }
                    isGitHubLink = !isGitHubLink;
                });
            }
        
            // Apply the link switching for all three projects
            handleLinkSwitch(2, "https://github.com/NITHINCS2004/web_tech", "https://resto12.ccbp.tech/");
            handleLinkSwitch(1, "https://github.com/NITHINCS2004/web_hostel", "https://nithincs2004.github.io/web_hostel/");
            handleLinkSwitch(3, "https://github.com/NITHINCS2004/hotel_management", "https://nithincs2004.github.io/hotel_management/");
        });
        window.onload = function() {
            var checkWorkText = document.querySelector('.check-work-text');
            
            // Add the active class to change size and color automatically
            setTimeout(function() {
                checkWorkText.classList.add('active');
            }, 500); // Change after 0.5 seconds of page load (you can adjust the time)
        };