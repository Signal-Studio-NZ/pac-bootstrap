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
