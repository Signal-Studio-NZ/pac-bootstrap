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

document.addEventListener("DOMContentLoaded", () => {
  // Ensure shop interaction logic runs after dynamic HTML load

  const shopLogic = () => {
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
    const navmenu = document?.querySelector(".navbar-menus");
    const shopBtn = document.getElementById("shopBtn");
    const shopContainer = document.getElementById("shopContainer");
    const shopCloseBtn = document.getElementById("shopCloseBtn");
    const notificationBanner = document.getElementById("notification-banner");
    const htmlBody = document.getElementsByTagName("body")[0];

    const brandSearchIcon = document.querySelector(".shop-brand-searchIcon");
    const brandInput = document.querySelector(".shop-brand-input");

    const subcatSearchIcon = document.querySelector(
      ".shop-Subcategories-searchIcon"
    );
    const subcatInput = document.querySelector(".shop-Subcategories-input");

    if (shopBtn && shopContainer && shopCloseBtn) {
      shopBtn.addEventListener("click", () => {
        shopContainer.classList.remove("d-xl-none");
        shopContainer.classList.add("d-xl-block");
        notificationBanner?.classList.remove("d-flex");
        notificationBanner?.classList.add("d-none");
        htmlBody.style.overflow = "hidden";
        // console.log(navmenu);
        // navmenu?.style.zIndex ="10000"
        disableNavItems(); // <-- Disable and fade others
      });

      shopCloseBtn.addEventListener("click", () => {
        shopContainer.classList.remove("d-xl-block");
        shopContainer.classList.add("d-xl-none");
        htmlBody.style.overflow = "auto";
        // navmenu?.style.zIndex ="100"

        enableNavItems(); // <-- Restore them
      });
    }

    // Toggle brand input
    if (brandSearchIcon && brandInput) {
      let brandInputVisible = true;

      brandSearchIcon.addEventListener("click", () => {
        brandInput.classList.toggle("d-none");
        brandInput.classList.toggle("d-block");
        brandInputVisible = !brandInputVisible;
      });
    }

    // Toggle subcategory input
    if (subcatSearchIcon && subcatInput) {
      let subcatInputVisible = true;

      subcatSearchIcon.addEventListener("click", () => {
        subcatInput.classList.toggle("d-none");
        subcatInput.classList.toggle("d-block");
        subcatInputVisible = !subcatInputVisible;
      });
    }
  };

  setTimeout(shopLogic, 300);
});
