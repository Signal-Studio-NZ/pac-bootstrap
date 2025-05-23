const editAddress = `  <form class="d-flex flex-column gap-3">
 <div
            class="account-modal-closeBtn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <line
                x1="7.42387"
                y1="6.71749"
                x2="21.566"
                y2="20.8596"
                stroke="#0A2926"
              />
              <line
                x1="6.71676"
                y1="20.8596"
                x2="20.8589"
                y2="6.71744"
                stroke="#0A2926"
              />
            </svg>
          </div>
            <p class="second-heading heading-3">Edit addresses</p>
            <div class="account-editAddress mb-5">
              <div class="d-flex flex-column gap-1">
                <label for="Address" class="label">Address *</label>
                <select name="Address" id="">
                  <option value="home">Home</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="AddressName" class="label">Address name *</label>
                <input type="text" class="inputField" name="AddressName" id="AddressName" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Email" class="label">Email *</label>
                <input type="text" class="inputField" name="Email" id="Email" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Fname" class="label">First name *</label>
                <input type="text" class="inputField" name="Fname" id="Fname" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Lname" class="label">Last name *</label>
                <input type="text" class="inputField" name="Lname" id="Lname" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Phone" class="label">Phone *</label>
                <input type="text" class="inputField" name="Phone" id="Phone" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Mobile" class="label">Mobile</label>
                <input type="text" class="inputField" name="Mobile" id="Mobile" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Fax" class="label">Fax</label>
                <input type="text" class="inputField" name="Fax" id="Fax" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Company" class="label">Company</label>
                <input type="text" class="inputField" name="Company" id="Company" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Building" class="label"
                  >Unit/Flat/Floor/Building</label
                >
                <input type="text" class="inputField" name="Building" id="Building" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label
                  for="Address"
                  class="label d-flex align-items-end justify-content-between"
                  >Address *
                  <span class="orderStatus-backBtn fs-6"
                    >Type address manually</span
                  ></label
                >
                <input type="text" class="inputField" name="Address" id="Address" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Suburb" class="label">Suburb *</label>
                <input type="text" class="inputField" name="gSuburbt" id="Suburb" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="City" class="label">City *</label>
                <input type="text" class="inputField" name="City" id="City" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Rural" class="label">Rural</label>
                <input type="text" class="inputField" name="Rural" id="Rural" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Postcode" class="label">Postcode *</label>
                <input type="text" class="inputField" name="Postcode" id="Postcode" />
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="Country" class="label">Country *</label>
                <select name="Country" id="Country">
                  <option value="">New Zealand</option>
                  <option value="">India</option>
                </select>
              </div>
            </div>
            <div class="d-flex flex-column gap-3 mt-5">
              <button type="button" class="btn editModal-BtnWidth active-btn">Save Changes</button>
              <button class="editModal-BtnWidth btn" type="button" id="cancel-modal">
                Cancel
              </button>
            </div>
          </form>`;

const deliveryDetails = document.getElementById("delivery-details");
const paymentDetails = document.getElementById("payment-detail");
const deliveryPage = document.getElementById("delivery");
const paymentPage = document.getElementById("payment");
const placeOrderPage = document.getElementById("place-order");
const deliverPageBtn = document.getElementById("delivery-page-btn");
const paymentPageBtn = document.getElementById("paymeent-page-btn");
const backBtn = document.getElementById("back-btn");
const deliveryNumber = document.getElementById("delivery-num");
const deliveryHeading = document.getElementById("deliveryHeading");
const paymentNumber = document.getElementById("payment-num");
const paymentHeading = document.getElementById("payment-heading");
const placeOrderNum = document.getElementById("place-order-num");
const placeOrderHeading = document.getElementById("place-order-heading");
const deliverDownarrow = document.querySelector(".deliver-downarrow");
const paymentDownarrow = document.querySelector(".payment-downarrow");
const checkoutLine = document.getElementsByClassName("checkout-line");

const checkoutStageContainer = document.querySelector(
  ".checkout-stage-container"
);

deliveryHeading?.addEventListener("click", () => {
  const isVisible = deliveryDetails.classList.contains("d-block");
  const deliveryArrow = deliveryHeading.querySelector("img");
  const paymentArrow = paymentHeading?.querySelector("img");

  if (isVisible) {
    deliveryDetails.classList.remove("d-block");
    deliveryDetails.classList.add("d-none");
    deliveryArrow?.classList.remove("rotate-180");
    checkoutStageContainer?.classList.remove("checkoutstage-height");
    checkoutLine[0].classList.remove("mt-20");
    checkoutLine[1].classList.remove("mt-20");
  } else {
    checkoutLine[0].classList.add("mt-20");
    checkoutLine[1].classList.add("mt-20");
    paymentDetails.classList.remove("d-block");
    paymentDetails.classList.add("d-none");
    paymentArrow?.classList.remove("rotate-180");

    deliveryDetails.classList.remove("d-none");
    deliveryDetails.classList.add("d-block");
    deliveryArrow?.classList.add("rotate-180");
    checkoutStageContainer?.classList.add("checkoutstage-height");
  }
});

paymentHeading?.addEventListener("click", () => {
  const isVisible = paymentDetails.classList.contains("d-block");
  const paymentArrow = paymentHeading.querySelector("img");
  const deliveryArrow = deliveryHeading?.querySelector("img");

  if (isVisible) {
    paymentDetails.classList.remove("d-block");
    paymentDetails.classList.add("d-none");
    paymentArrow?.classList.remove("rotate-180");
    checkoutStageContainer?.classList.remove("checkoutstage-height");
    checkoutLine[0].classList.remove("mt-20");
    checkoutLine[1].classList.remove("mt-20");
  } else {
    checkoutLine[0].classList.add("mt-20");
    checkoutLine[1].classList.add("mt-20");
    deliveryDetails.classList.remove("d-block");
    deliveryDetails.classList.add("d-none");
    deliveryArrow?.classList.remove("rotate-180");

    paymentDetails.classList.remove("d-none");
    paymentDetails.classList.add("d-block");
    paymentArrow?.classList.add("rotate-180");
    checkoutStageContainer?.classList.add("checkoutstage-height");
  }
});

deliverPageBtn.addEventListener("click", () => {
  deliveryPage.classList.add("d-none");
  paymentPage.classList.remove("d-none");
  paymentPage.classList.add("d-block");
  deliveryDetails.classList.remove("d-none");
  deliveryDetails.classList.add("d-block");
  deliveryNumber.classList.remove("checkout-NumActive");
  deliveryHeading.classList.remove("checkout-active");
  deliveryNumber.classList.add("checkout-numDone");
  deliveryHeading.classList.add("checkout-done");
  paymentNumber.classList.add("checkout-NumActive");
  paymentHeading.classList.add("checkout-active");
  checkoutStageContainer.classList.add("mb-322");
  deliverDownarrow.classList.remove("d-none");
  deliverDownarrow.classList.add("d-block");
});

paymentPageBtn.addEventListener("click", () => {
  placeOrderPage.classList.remove("d-none");
  paymentPage.classList.remove("d-block");
  paymentPage.classList.add("d-none");
  paymentDetails.classList.remove("d-none");
  paymentDetails.classList.add("d-block");
  paymentNumber.classList.add("checkout-numDone");
  paymentHeading.classList.add("checkout-done");
  placeOrderNum.classList.add("checkout-NumActive");
  placeOrderHeading.classList.add("checkout-active");
  paymentDownarrow.classList.remove("d-none");
  paymentDownarrow.classList.add("d-block");
  // Scroll checkout-stage-container to bottom smoothly
  if (checkoutStageContainer) {
    checkoutStageContainer.scrollTo({
      left: checkoutStageContainer.scrollWidth,
      behavior: "smooth",
    });
  }
});

backBtn.addEventListener("click", () => {
  placeOrderPage.classList.add("d-none");
  paymentPage.classList.remove("d-block");
  paymentPage.classList.remove("d-none");
  paymentDetails.classList.add("d-none");
  paymentDetails.classList.remove("d-block");
  paymentNumber.classList.remove("checkout-numDone");
  paymentHeading.classList.remove("checkout-done");
  placeOrderNum.classList.remove("checkout-NumActive");
  placeOrderHeading.classList.remove("checkout-active");
});

const container = document.getElementById("modal-container");
const modalBtn = document.getElementById("modal-btn");
const loadContent = (content) => {
  container.innerHTML = content;
};
modalBtn.addEventListener("click", () => loadContent(editAddress));
