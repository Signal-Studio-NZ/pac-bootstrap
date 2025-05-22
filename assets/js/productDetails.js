//addToCart basket slider
const productDetailsInfo = document.getElementById("productDetails-info");
const addToCart = document.getElementById("addToCart");
const addToCart2 = document.getElementById("addToCart2");
const productImg = document.getElementById("productImg");
const basketLayer = document.getElementById("basketLayers");
const basketClose = document.getElementById("basketClose");
const basketLyer = document.getElementById("basketLyer");
const bigImg = document.getElementById("big-img");
addToCart.addEventListener("click", () => {
  productImg.style.marginLeft = "-100%";
  basketLyer.style.marginLeft = "0";
  productDetailsInfo.style.width = "50%";
  productDetailsInfo.style.transition = "0.7s linear";
  bigImg.style.maxWidth = "667px";
  productDetailsInfo.classList.remove("w-100");
  setTimeout(() => {
    productImg.style.display = "none";
    basketLayer.classList.remove("d-lg-none");
    basketLayer.classList.add("d-lg-flex");
  }, 500);
});

basketClose.addEventListener("click", () => {
  productImg.style.marginLeft = "0";
  productDetailsInfo.style.marginLeft = "50%";
  productDetailsInfo.classList.add("w-100");
  basketLayer.classList.add("d-lg-none");
  basketLayer.classList.remove("d-lg-flex");
  setTimeout(() => {
    productDetailsInfo.style.marginLeft = "0";
    productImg.style.display = "block";
    productDetailsInfo.classList.add("w-100");
    productDetailsInfo.style.transition = "none";
    bigImg.style.maxWidth = "none";
  }, 500);
});

const backetBody = document.getElementById("backet-table-body");
const basketTable = document.querySelector(".basketSlider-Table");
const basketTotal = document.querySelector(".basket-total");
const checkoutBar = document.querySelector(".basket-checkoutbar");
const emptyContainer = document.querySelector(".empty-basket-container");

const dataStruct = `
    <tr class="basket-tr border-bottom">
      <td class="d-flex pt-4 pb-4 basketSlider-Tdata gap-3">
        <img src="/assets/images/product/product1.png" alt="product1" />
        <div>
          <p>Broad Leaved P/Mint</p>
          <p>Eucalypt 5ml</p>
        </div>
      </td>
      <td class="basketSlider-Tdata pt-4 pb-4">
        <div class="d-flex align-items-center gap-2">
          <img src="/assets/svgs/deleteIcon.svg" alt="delete" class="delete-icon" style="cursor: pointer;">
          <div class="basket-PrdIncDec">
            <div>-</div>
            <div>2</div>
            <div>+</div>
          </div>
        </div>
      </td>
      <td class="basketSlider-Tdata text-end pb-4 pt-4">$35.00</td>
    </tr>`;

// Insert 2 dummy items initially
for (let i = 0; i < 2; i++) {
  backetBody.insertAdjacentHTML("beforeend", dataStruct);
}

// Show/hide basket or empty message based on item count
function checkBasketState() {
  const hasItems = backetBody.querySelectorAll("tr").length > 0;

  if (hasItems) {
    basketTable.style.display = "table";
    basketTotal.classList.add("d-flex");
    basketTotal.classList.remove("d-none");
    checkoutBar.style.display = "block";
    emptyContainer.classList.add("d-none");
  } else {
    basketTable.style.display = "none";
    basketTotal.classList.add("d-none");
    basketTotal.classList.remove("d-flex");
    checkoutBar.style.display = "none";
    emptyContainer.classList.remove("d-none");
  }
}

// Delete handler using event delegation
backetBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-icon")) {
    const row = e.target.closest("tr");
    if (row) {
      row.remove();
      checkBasketState();
    }
  }
});

// Initial check
checkBasketState();
