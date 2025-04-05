// Apply theme immediately before DOM loads
(function applyStoredTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
})();

// Theme Toggle Logic
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    if (themeToggle) { // Ensure the element exists before accessing it
        function updateTheme() {
            if (themeToggle.checked) {
                body.classList.add("dark-theme");
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.remove("dark-theme");
                localStorage.setItem("theme", "light");
            }
        }

        // Apply the stored theme setting
        if (localStorage.getItem("theme") === "dark") {
            themeToggle.checked = true;
            body.classList.add("dark-theme");
        } else {
            themeToggle.checked = false;
            body.classList.remove("dark-theme");
        }

        // Listen for toggle changes
        themeToggle.addEventListener("change", updateTheme);
    }
});


/* Signup & Login Modal */
function toggleAuth() {
    const modalElement = document.getElementById('authModal');
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

function flipAuth(event) {
    event.preventDefault();
    const authContainer = document.getElementById('authContainer');
    if (authContainer) {
        authContainer.classList.toggle('flipped');
    }
}

// Modal blur fix
document.addEventListener("hidden.bs.modal", function (event) {
    if (event.target.id === "authModal") {
        document.activeElement?.blur();
    }
});

/* Bootstrap Dropdown Fix */
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        if (dropdownToggle) {
            dropdownToggle.addEventListener("click", function (event) {
                event.preventDefault();
                const bsDropdown = new bootstrap.Dropdown(dropdownToggle);
                bsDropdown.toggle();
            });
        }
    });
});

/* Bootstrap Tooltip Initialization */
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

/* Load Navbar and Footer */
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        fetch("navbar.html")
            .then(response => response.text())
            .then(data => navbar.innerHTML = data)
            .catch(error => console.error("Error loading navbar:", error));
    }

    const footer = document.getElementById("footer");
    if (footer) {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => footer.innerHTML = data)
            .catch(error => console.error("Error loading footer:", error));
    }
});
