// Async function to load HTML content into a div and return a promise
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
    });

    return Promise.resolve();
  } catch (error) {
    console.error("Error loading HTML:", error);
    return Promise.reject(error);
  }
}

// Load header and footer and run logic after header loads
loadHTML("header", "/components/pvtHeader.html").then(() => {
  shopLogic(); // only run after header is loaded
});

// shop logic function (runs after header loads)
function shopLogic() {
  const navFadeTargets = document.querySelectorAll(".nav-fade-target");

  const disableNavItems = () => {
    navFadeTargets.forEach((el) => {
      el.style.opacity = "0.2";
      el.style.pointerEvents = "none";
    });
  };

  const enableNavItems = () => {
    navFadeTargets.forEach((el) => {
      el.style.opacity = "1";
      el.style.pointerEvents = "auto";
    });
  };

  const navmenu = document.querySelector(".navbar-menus");
  const shopBtn = document.getElementById("shopBtn");
  const shopContainer = document.getElementById("shopContainer");
  const shopCloseBtns = document.querySelectorAll(".shopCloseBtn");
  const notificationBanner = document.getElementById("notification-banner");
  const htmlBody = document.getElementsByTagName("body")[0];

  const brandSearchIcon = document.querySelector(".shop-brand-searchIcon");
  const brandInput = document.querySelector(".shop-brand-input");
  const subcatSearchIcon = document.querySelector(
    ".shop-Subcategories-searchIcon"
  );
  const subcatInput = document.querySelector(".shop-Subcategories-input");

  if (shopBtn && shopContainer && shopCloseBtns) {
    shopBtn.addEventListener("click", () => {
      navmenu.classList.remove("zindex100");
      navmenu.classList.add("zindex11000");
      shopContainer.classList.remove("d-xl-none");
      shopContainer.classList.add("d-xl-block");
      notificationBanner?.classList.remove("d-flex");
      notificationBanner?.classList.add("d-none");
      htmlBody.style.overflow = "hidden";
      disableNavItems();
    });

    shopCloseBtns.forEach((shopCloseBtn) => {
      shopCloseBtn.addEventListener("click", () => {
        navmenu.classList.remove("zindex11000");
        navmenu.classList.add("zindex100");
        shopContainer.classList.remove("d-xl-block");
        shopContainer.classList.add("d-xl-none");
        htmlBody.style.overflow = "auto";
        enableNavItems();
      });
    });
  }

  // Toggle brand input
  if (brandSearchIcon && brandInput) {
    brandSearchIcon.addEventListener("click", () => {
      brandInput.classList.toggle("d-none");
      brandInput.classList.toggle("d-block");
    });
  }

  // Toggle subcategory input
  if (subcatSearchIcon && subcatInput) {
    subcatSearchIcon.addEventListener("click", () => {
      subcatInput.classList.toggle("d-none");
      subcatInput.classList.toggle("d-block");
    });
  }
}
