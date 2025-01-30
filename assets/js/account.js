const editSign = ` <p class="second-heading heading-3">Edit sign in information</p>
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
            <div class="d-flex gap-4 flex-column mb-5">
              <div class="d-flex flex-column">
                <label for="Email" class="label">Email *</label>
                <input
                  type="mail"
                  class="inputField"
                  name="Email"
                  id="Email"
                />
              </div>
              <div class="d-flex flex-column">
                <label for="Apassword" class="label">Actual Password *</label>
                <input
                  type="password"
                  class="inputField"
                  name="ANpassword"
                  id="ANpassword"
                />
              </div>

              <div class="d-flex flex-column">
                <label for="Npassword" class="label">New password *</label>
                <input
                  type="password"
                  class="inputField"
                  name="Npassword"
                  id="Npassword"
                />
              </div>

              <div class="d-flex flex-column">
                <label for="RNpassword" class="label"
                  >Repeat new password *</label
                >
                <input
                  type="password"
                  class="inputField"
                  name="RNpassword"
                  id="RNpassword"
                />
              </div>
            </div>
            <div class="d-flex flex-column gap-3 mt-5">
              <button class="btn active-btn w-100">Save Changes</button>
              <button class="w-100 btn" type="button" id="cancel-modal">
                Cancel
              </button>
            </div>`;

const autoPayment = `
              <form
            class="d-flex gap-4 flex-column setup-autoPayment"
            id="signInForm"
          >
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
            <p class="second-heading heading-3">Setup auto payment</p>

            <div class="d-flex">
              <div class="col-6 d-flex flex-column gap-2">
                <label class="label">Account</label>
                <p class="content-text">1035</p>
              </div>
              <div class="col-6 d-flex flex-column gap-2">
                <label class="label">Expires</label>
                <p class="content-text">-</p>
              </div>
            </div>

            <div class="">
              <label class="label">Condition</label>
              <div class="content-text d-flex flex-column gap-1">
                <p>
                  I hereby give Pacific Health and Fitness permission to pay my
                  account using my credit card number.
                </p>
                <p>
                  I understand that Pacific Health will not hold my credit card
                  details as these will be held securely by PayStation Ltd who
                  will provide a secure method of debiting my account.
                </p>
                <p class="mb-5">This payment will supercede any others.</p>
              </div>
            </div>
            <div class="d-flex flex-column gap-1">
              <label class="label">Choose payment option</label>
              <div class="payment-option d-flex mb-1">
                <button
                  class="w-50 h-100 active-payment font-manrope fw-medium border-0"
                >
                  Pay every invoice
                </button>
                <button class="w-50 h-100 font-manrope fw-medium border-0">
                  Pay monthly account
                </button>
              </div>
            </div>
            <div class="d-flex flex-column gap-3 mt-5">
              <button type="button" class="btn active-btn w-100">Save Changes</button>
              <button class="w-100 btn" type="button" id="cancel-modal">
                Cancel
              </button>
            </div>
          </form>`;

const invoiceInfo = `
           <form class="d-flex flex-column gap-3">
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
            <p class="second-heading heading-3">Edit invoice information</p>
            <div class="d-flex gap-4 flex-column mb-5">
              <div class="d-flex flex-column gap-1">
                <label for="RNpassword" class="label"
                  >Logo (best quality: w760pix x h400pix jpg or png)</label
                >
                <div
                  class="selected-file px-3 d-flex gap-2 justify-content-between align-content-center"
                >
                  <p class="p-0 align-items-center w-100 d-flex content-text">
                    pacHealthLogo.png
                  </p>
                  <img src="./assets/svgs/closebtn.svg" alt="" />
                </div>
              </div>
              <div class="d-flex flex-column gap-1">
                <label for="RNpassword" class="label"
                  >Packing note / Invoice footer (best quality 2315 pix
                  wide)</label
                >
                <!-- <input type="file" name="" id="" /> -->
                <div
                  class="selected-file px-3 d-flex gap-2 justify-content-between align-content-center"
                >
                  <p class="p-0 align-items-center w-100 d-flex content-text">
                    Finalinvoice.png
                  </p>
                  <img src="./assets/svgs/closebtn.svg" alt="" />
                </div>
              </div>

              <div class="d-flex flex-column gap-1">
                <label for="invoice" class="label">Generate invoice</label>
                <select name="invoice" id="invoice">
                  <option value="">
                    Please print all invoices for me-Ihave suppli...
                  </option>
                  <option value="">
                    Please print all invoices for me-Ihave suppli...
                  </option>
                  <option value="">
                    Please print all invoices for me-Ihave suppli...
                  </option>
                </select>
              </div>

              <div class="d-flex flex-column">
                <label for="gst" class="label">GST number *</label>
                <input type="text" class="inputField" name="gst" id="gst" />
              </div>
            </div>
            <div class="d-flex flex-column gap-3 mt-5">
              <button type="button" class="btn w-100">Save Changes</button>
              <button class="w-100 btn" type="button" id="cancel-modal">
                Cancel
              </button>
            </div>
          </form>`;

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
              <button type="button" class="btn w-100 active-btn">Save Changes</button>
              <button class="w-100 btn" type="button" id="cancel-modal">
                Cancel
              </button>
            </div>
          </form>`;

const container = document.getElementById("modal-container");
const editSignInBtn = document.getElementById("edit-signIn-information");
const editAutoPaymentBtn = document.getElementById("autoPayment");
const editInvoiceInfoBtn = document.getElementById("edit-invoice");
const editAddressBtn = document.getElementById("edit-address");
// Function to load content into the container
const loadContent = (content) => {
  container.innerHTML = content;
};

// Add event listeners to buttons
editSignInBtn.addEventListener("click", () => loadContent(editSign));
editAutoPaymentBtn.addEventListener("click", () => loadContent(autoPayment));
editInvoiceInfoBtn.addEventListener("click", () => loadContent(invoiceInfo));
editAddressBtn.addEventListener("click", () => loadContent(editAddress));
