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
