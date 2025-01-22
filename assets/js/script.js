// Async function to load HTML content into a div
async function loadHTML(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
    // notification banner close logic
    const closeButton = document?.getElementById(
      "notification-banner-close-btn"
    );
    const notificationBanner = document?.getElementById("notification-banner");

    closeButton?.addEventListener("click", function () {
      notificationBanner.style.display = "none";
    });

    // If you're loading the footer, initialize the form validation after loading
    if (elementId === "footer") {
      initializeFormValidation(); // Call the function to initialize form validation
    }
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

// Separate function for initializing the form validation
function initializeFormValidation() {
  const validationLoginForm = new JustValidate("#newsletter-form");
  const loginform = document.getElementById("newsletter-form");

  if (!loginform) {
    return; // Exit if form is not found
  }

  validationLoginForm
    .addField('input[name="email"]', [
      { rule: "required", errorMessage: " " },
      { rule: "email", errorMessage: " " },
    ])
    .onSuccess((event) => {
      // Collect form data
      const formData = new FormData(event.target);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      alert("Form submitted successfully");
      loginform.reset();
    })
    .onFail((event) => {
      alert("Please enter a valid email address");
    });
}

// Load header and footer
loadHTML("header", "/components/header.html");
loadHTML("footer", "/components/footer.html");

const anchors = document.querySelectorAll("#data-titles li a");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    // Remove the 'active' class from all <a> elements
    anchors.forEach((item) => item.classList.remove("active-link"));

    // Add the 'active' class to the clicked <a>
    this.classList.add("active-link");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".c-data-container");
  const navLinks = document.querySelectorAll("#data-titles a");

  // Function to remove all active classes
  const removeActiveClasses = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
  };

  // Function to find and highlight the nearest section
  const highlightNearestSection = () => {
    let nearestSection = null;
    let minDistance = Number.MAX_VALUE;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distanceFromTop = Math.abs(rect.top);

      // Check for the closest section near or below the viewport top
      if (rect.top < window.innerHeight && distanceFromTop < minDistance) {
        minDistance = distanceFromTop;
        nearestSection = section;
      }
    });

    if (nearestSection) {
      removeActiveClasses();
      const id = nearestSection.id;
      const activeLink = document.querySelector(
        `#data-titles a[href="#${id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  };

  // Scroll event listener to trigger the nearest section check
  window.addEventListener("scroll", highlightNearestSection);

  // Initial trigger on page load
  highlightNearestSection();
});
