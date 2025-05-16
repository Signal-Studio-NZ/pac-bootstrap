const addClientsForm = `  <form class="d-flex flex-column gap-3">
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
              class="pointer"
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

const copyLogo = document.getElementById("copy-text-logo");
const copiedText = document.getElementById("copied-text");
const addClients = document.getElementById("add-clients");
const container = document.getElementById("modal-container");
const toastNotification = document.getElementById("toast-notification");

function copyText() {
  const text = copiedText.innerText;
  navigator.clipboard.writeText(text);
  toastNotification.style.top = "5%";
  setTimeout(() => {
    toastNotification.style.top = "-5%";
  }, 1500);
}
const loadContent = (content) => {
  container.innerHTML = content;
};
copyLogo.addEventListener("click", copyText);
addClients.addEventListener("click", () => loadContent(addClientsForm));
