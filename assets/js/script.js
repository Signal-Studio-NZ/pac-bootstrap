// Async function to load HTML content into a div
async function loadHTML(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
    // notification banner close logic
    const closeButton = document?.getElementById("notification-closeBtn");
    const notificationBanner = document?.getElementById("notification-banner");

    closeButton?.addEventListener("click", function () {
      notificationBanner?.classList.remove("d-flex");
      notificationBanner?.classList.add("d-none");
      console.log("hi");
    });

    const openBtn = document.getElementById("openShopMenu");
    const closeBtn = document.getElementById("closeShopMenu");
    const shopMenu = document.getElementById("shopMenu");

    openBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      shopMenu.classList.add("active");
    });

    closeBtn?.addEventListener("click", () => {
      shopMenu.classList.remove("active");
    });
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

// Load header and footer
loadHTML("header", "./components/header.html");
loadHTML("footer", "./components/footer.html");

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
  const sections = document.querySelectorAll(".content-text-container");
  const navLinks = document.querySelectorAll("#data-titles li a");

  // Function to remove all active classes
  const removeActiveClasses = () => {
    navLinks.forEach((link) => link.classList.remove("active-link"));
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
        `#data-titles li a[href="#${id}"]`
      );
      if (activeLink) activeLink.classList.add("active-link");
    }
  };

  // Scroll event listener to trigger the nearest section check
  window.addEventListener("scroll", highlightNearestSection);

  // Initial trigger on page load
  highlightNearestSection();
});

//custom select
document.addEventListener("DOMContentLoaded", () => {
  // Get all the custom select elements
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((customSelect) => {
    const selectedOption = customSelect?.querySelector(".selected-option");
    const optionsList = customSelect.querySelector(".options-list");
    const optionItems = customSelect.querySelectorAll(".option-item");

    // Toggle dropdown visibility
    selectedOption?.addEventListener("click", () => {
      optionsList.style.display =
        optionsList.style.display === "block" ? "none" : "block";
    });

    // Handle option selection
    optionItems?.forEach((item) => {
      item.addEventListener("click", () => {
        // Get the text and span content
        const itemText = item.childNodes[0].textContent.trim();
        const spanText = item.querySelector("span").textContent;

        // Update the selected-option content
        selectedOption.innerHTML = `${itemText} <span>${spanText}</span>`;

        // Close the dropdown
        optionsList.style.display = "none";
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!customSelect.contains(e.target)) {
        optionsList.style.display = "none";
      }
    });
  });
});
//

// terms and conditions page contents
const showContents = document.querySelector(".show-content");
const contents = document.querySelector(".contents");

showContents?.addEventListener("click", () => {
  contents.classList.toggle("hidden");
});

const currentPage = document.querySelectorAll(".current-Page div");
Array.from(currentPage).forEach((page) => {
  page.addEventListener("click", (e) => {
    for (page of currentPage) {
      page.classList.remove("active-page");
    }
    e.target.classList.add("active-page");
  });
});

const practitionerBtn = document.getElementById("practitionerBtn");
const shopNowBtn = document.getElementById("shopNowBtn");
const orderProcedureBtn = document.getElementById("orderProcedureBtn");
const practitioner = document.getElementById("practitioner");
const shopNow = document.getElementById("shopNow");
const orderProcedure = document.getElementById("orderProcedure");

practitionerBtn.addEventListener("click", () => {
  practitioner.classList.toggle("feature-col-height");
});
shopNowBtn?.addEventListener("click", () => {
  shopNow.classList.toggle("feature-col-height");
});
orderProcedureBtn.addEventListener("click", () => {
  orderProcedure.classList.toggle("feature-col-height");
});

const practitionerApplication = document?.getElementById(
  "practitioner-application"
);
const studentApplication = document.getElementById("student-application");

practitionerApplication?.addEventListener("click", () => {
  studentApplication?.classList.remove("account-switch-active");
  practitionerApplication?.classList.add("account-switch-active");
});

studentApplication?.addEventListener("click", () => {
  studentApplication?.classList.add("account-switch-active");
  practitionerApplication?.classList.remove("account-switch-active");
});

const uploadLable = document?.getElementById("file-uplaod-label");
const uploadBtn = document.getElementById("file-upload-btn");
const fileUpload = document.getElementById("file-upload");

fileUpload?.addEventListener("change", () => {
  uploadLable.innerText = fileUpload.files[0]?.name;
  if (fileUpload?.files[0]?.name) {
    uploadBtn.classList.add("file-added");
    uploadBtn.disabled = false;
  }
});

function setupNewsletterValidation() {
  const form = document.getElementById("footer-newsletter");
  if (!form) return;

  const emailInput = form.querySelector('input[type="text"]');
  const errorMsg = form.querySelector(".news-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      errorMsg.textContent = "Email field cannot be empty.";
      errorMsg.style.color = "red";
      emailInput.focus();
    } else if (!emailRegex.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
      errorMsg.style.color = "red";
      emailInput.focus();
    } else {
      errorMsg.textContent = "";
      alert("Thank you for subscribing!");
      form.reset();
    }
  });
}

// Polling function to wait for footer form to load
function waitForFooterAndSetup() {
  const form = document.getElementById("footer-newsletter");
  if (form) {
    setupNewsletterValidation();
    clearInterval(checkInterval); // Stop checking once form is found and setup
  }
}

// Start polling every 200 milliseconds
const checkInterval = setInterval(waitForFooterAndSetup, 200);
