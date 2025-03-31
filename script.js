 // Theme Toggle Logic
 document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    function updateTheme() {
        if (themeToggle.checked) {
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }

    themeToggle.addEventListener("change", updateTheme);

    // Load theme from storage
    if (localStorage.getItem("theme") === "dark") {
        themeToggle.checked = true;
        body.classList.add("dark-theme");
    }
});

/*signup and login page*/
function toggleAuth() {
    const modal = new bootstrap.Modal(document.getElementById('authModal'));
    modal.show();
}
function flipAuth(event) {
    event.preventDefault();
    document.getElementById('authContainer').classList.toggle('flipped');
}

document.addEventListener("hidden.bs.modal", function (event) {
    let focusedElement = document.activeElement;
    if (event.target.id === "authModal" && focusedElement) {
        focusedElement.blur();
    }
});

/*drop-menu*/
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function () {
            this.classList.toggle("show");
        });
    });
});

/* Bootstrap Tooltip Script */
    document.addEventListener("DOMContentLoaded", function() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
