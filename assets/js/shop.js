document.getElementById("goToPage2").addEventListener("click", function () {
  window.location.href = "product-details.html";
});
const shopHeaderContainer = document.getElementById("shop-header");

const shop = `<h1 class="heading-1 heading-1-margins">Shop</h1>`;
const fav = `
 <p class="text-uppercase shop-lbl mb-2">Shop</p>
 <h1 class="heading-1 mb-5 pb-3">
   Favourites
   <span class="favourites-note fw-semibold">
     Remember products you may want later by highlighting the star next to it.
   </span>
 </h1>
`;
const feat = `
 <p class="text-uppercase shop-lbl mb-2">Shop</p>
 <h1 class="heading-1 mb-5 pb-3">
   Featured
 </h1>
`;
const notFoundPrd = `
 <div>
                <p class="Shopprd-notFound fw-medium">
                  No products found for this category.
                </p>
                <p class="shop-backHome mt-1">
                  View
                  <a href="/shop.html" class="text-decoration-none"
                    >all products</a
                  >
                  or go back
                  <a href="/" class="text-decoration-none">home</a>
                </p>
              </div>
`;
const prd = `
  <div id="goToPage2" class="product-card">
                <div class="img-container position-relative overflow-hidden">
                  <img
                    src="/assets/images/product/product1.png"
                    class="w-100 h-100 object-fit-contain rounded-4"
                    alt=""
                  />
                  <img
                    src="/assets/svgs/heart.svg"
                    alt="heart"
                    class="fav-option"
                  />
                  <!-- <div
                    class="top-0 w-100 product-overlay h-100 d-flex align-items-center justify-content-center flex-column fs-5 fw-semibold position-absolute"
                  >
                    <button
                      id="goToPage2"
                      class="border-0 fw-semibold bg-transparent"
                    >
                      View Detail
                    </button>
                    <button
                      class="border-0 fw-semibold bg-transparent d-flex gap-2"
                    >
                      Add to basket
                      <img src="/assets/svgs/basketicon.svg" alt="" />
                    </button>
                  </div> -->
                </div>
                <div
                  class="d-flex px-2 pt-4 justify-content-between align-items-start"
                >
                  <div class="fw-semibold">
                    <p>Perfect Potion</p>
                    <p class="text-truncate-2">Aniseed Myrtle 5ml</p>
                    <button
                      class="border-0 manrope addbasket-btn fw-semibold bg-transparent"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div class="d-flex flex-shrink-0 flex-column">
                    <p class="fw-medium flex-shrink-0">R $35.00</p>
                    <p class="fw-medium flex-shrink-0">W $28.00</p>
                  </div>
                </div>
              </div>
`;
const featureBtn = document.getElementById("Featuredbtn");
const favoritesBtn = document.getElementById("FavoritesBtn");
const specialsBtn = document.getElementById("SpecialsBtn");
const saveBtn = document.getElementById("SaveBtn"); // Assuming you have a Save button
const shopProducts = document.getElementById("shop-products");
const shopPagination = document.getElementById("shopPagination");
const prdPerPage = document.getElementById("prd-perPage");
const clearAll = document?.getElementById("shop-filter-clearall");
const buttons = [featureBtn, favoritesBtn, specialsBtn];

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const isActive = btn.classList.contains("prdFilter-active");

    // Remove active class from all buttons
    buttons.forEach((b) => b.classList.remove("prdFilter-active"));

    // If the button was not active, activate it
    if (!isActive) {
      btn.classList.add("prdFilter-active");
      shopPagination.classList.remove("d-flex");
      shopPagination.classList.add("d-none");
      prdPerPage.classList.remove("d-flex");
      prdPerPage.classList.add("d-none");

      // Update shop-header based on clicked button
      if (btn === featureBtn) {
        shopHeaderContainer.innerHTML = feat;
        shopProducts.innerHTML = "";
        clearAll.classList.remove("d-none");
        clearAll.classList.add("d-block");
        for (let i = 0; i < 3; i++) {
          shopProducts.innerHTML += prd;
        }
      } else if (btn === favoritesBtn) {
        shopHeaderContainer.innerHTML = fav;
        shopProducts.innerHTML = "";
        shopProducts.innerHTML = notFoundPrd;
      }
    } else {
      shopPagination.classList.remove("d-none");
      shopPagination.classList.add("d-flex");

      prdPerPage.classList.remove("d-none");
      prdPerPage.classList.add("d-flex");

      shopProducts.innerHTML = "";
      for (let i = 0; i < 6; i++) {
        shopProducts.innerHTML += prd;
      }
      shopHeaderContainer.innerHTML = shop;
    }
  });
});

//Price rabge slider
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range-1");
let displayValTwo = document.getElementById("range-2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

window.onload = function () {
  slideOne();
  slideTwo();
};

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = "$" + sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = "$" + sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #ffffff05 ${percent1}% , #0A2926 ${percent1}% , #0A2926 ${percent2}%, #ffffff05 ${percent2}%)`;
}

// Reset on Save button click
saveBtn.addEventListener("click", function () {
  buttons.forEach((b) => b.classList.remove("prdFilter-active"));
  shopHeaderContainer.innerHTML = shop;
});
