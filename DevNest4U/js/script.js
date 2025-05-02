// Theme Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleInput = document.querySelector('.cl-switch input');
    const body = document.body;
  
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      if (toggleInput) toggleInput.checked = true;
    }
  
    // Toggle logic
    if (toggleInput) {
      toggleInput.addEventListener('change', function () {
        if (this.checked) {
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark');
        } else {
          body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  });
    
  // Set theme on initial load to dark mode
document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
  });
  
  

/* Bootstrap Dropdown Fix */
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", function (e) {
          const parentDropdown = this.closest(".dropdown");
          const dropdownMenu = parentDropdown.querySelector(".dropdown-menu");

          // Toggle "show" class manually
          const isShown = dropdownMenu.classList.contains("show");

          // Close all other dropdowns
          document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
              menu.classList.remove("show");
          });

          // Toggle current dropdown
          if (!isShown) {
              dropdownMenu.classList.add("show");
          } else {
              dropdownMenu.classList.remove("show");
          }

          // Prevent default only on mobile
          if (window.innerWidth < 992) {
              e.preventDefault();
          }
      });
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown")) {
          document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
              menu.classList.remove("show");
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
// auto scroll of auth box
window.addEventListener('scroll', function () {
  const authModalEl = document.getElementById('authModal');
  if (authModalEl.classList.contains('show')) {
    const modalInstance = bootstrap.Modal.getInstance(authModalEl);
    modalInstance.hide();
  }
});

new bootstrap.Modal('#authModal', {
  backdrop: true,
  keyboard: true
});

