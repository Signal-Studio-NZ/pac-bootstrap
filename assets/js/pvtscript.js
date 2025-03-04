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
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

// Load header and footer
loadHTML("header", "./components/pvtHeader.html");
loadHTML("footer", "./components/footer.html");
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

  //addToCart basket slider
  const addToCart = document.getElementById("addToCart");
  const productImg = document.getElementById("productImg");
  // const basket = document.getElementById("basket");
  addToCart.addEventListener("click", () => {
    productImg.style.left = "-100%";
  });
});
