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
      console.log("hi");
      notificationBanner?.classList.remove("d-flex");
      notificationBanner?.classList.add("d-none");
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

//custom select
document.addEventListener("DOMContentLoaded", () => {
  // Get all the custom select elements
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((customSelect) => {
    const selectedOption = customSelect.querySelector(".selected-option");
    const optionsList = customSelect.querySelector(".options-list");
    const optionItems = customSelect.querySelectorAll(".option-item");

    // Toggle dropdown visibility
    selectedOption.addEventListener("click", () => {
      optionsList.style.display =
        optionsList.style.display === "block" ? "none" : "block";
    });

    // Handle option selection
    optionItems.forEach((item) => {
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
