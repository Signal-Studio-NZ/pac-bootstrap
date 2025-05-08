const data = [
  {
    id: 1,
    code: "QBAP0152",
    product: "100% Whey Protein WPC/WPI...",
    qty: `<input value="2" type="text" class="promoted-to-qty content-text qty-input"/>`,
    unitWholesale: "$67.10",
    unitRetail: "$111.90",
    markup: `<input value="10%" type="text" class="promoted-to-qty content-text qty-input"/> <span class="off-retail">Off Retail</span>`,
    lineTotal: "$111.90",
    logos: `<div class="d-flex align-items-center justify-content-lg-end edit-logos-2 gap-2">
          <img src="assets/svgs/calendar.svg" class="pointer open-remark calendar-logo" alt="edit">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>`,
  },
];
const attachData = [
  {
    id: 1,
    check: `<form class="account-checkbox d-inline"><input type="checkbox" name="" id="" /></form>`,
    code: "ovj6671p",
    name: "-",
    startDate: "11/11/25",
    endDate: "22/12/25",
  },
];

const modalData = [
  {
    id: 1,
    product: "Perfect Potion Aniseed Myrtle 5ml",
    wholesale: "$67.00",
    retail: "$144.00",
  },
  {
    id: 2,
    product: "Perfect Potion Aniseed Myrtle 5ml",
    wholesale: "$67.00",
    retail: "$144.00",
  },
  {
    id: 3,
    product: "Perfect Potion Aniseed Myrtle 5ml",
    wholesale: "$67.00",
    retail: "$144.00",
  },
  {
    id: 4,
    product: "Perfect Potion Aniseed Myrtle 5ml",
    wholesale: "$67.00",
    retail: "$144.00",
  },
  {
    id: 5,
    product: "Perfect Potion Aniseed Myrtle 5ml",
    wholesale: "$67.00",
    retail: "$144.00",
  },
];

const productsModal = `  <div class=" products-modal">
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
 <h3 class="heading-3 mb-4">Add product</h3>
 <div class="my-3 d-flex justify-content-end align-items-center">
  <div class="order-status-search modal-search">
    <input
      name="srch"
      id="order-status-search-input"
      type="text"
      placeholder="Search for order number, date, client..."
    />
    <img src="assets/images/OrderStatus/Search.png" alt="Search" />
  </div>
  <span class="heading-4">SORT BY</span>
  <select name="" class="promotion-select modal-select">
    <option value="">Retail</option>
  </select>
 </div>
 <div class="d-flex mt-1">
  <div class="w-25 d-flex flex-column align-items-start gap-3 pt-4">
    <div
    class="d-flex flex-column shop-filter-1 align-items-start gap-1"
  >
    <button
      id="Featuredbtn"
      class="lh-base border-0 filter-btn-Feature rounded-5 d-flex align-items-center gap-2"
    >
      <img src="/assets/svgs/starIcon.svg" alt="starIcon" class="" />
      Featured
    </button>
    <button
      id="FavoritesBtn"
      class="lh-base border-0 filter-btn-Feature rounded-5 d-flex align-items-center gap-2"
    >
      <img src="/assets/svgs/hearticon.svg" alt="starIcon" class="" />
      Favorites
    </button>
    <button
      id="SpecialsBtn"
      class="lh-base border-0 filter-btn-Feature rounded-5 d-flex align-items-center gap-2"
    >
      <img src="/assets/svgs/diamond.svg" alt="starIcon" class="" />
      Specials
    </button>
  </div>
  <span class="content-text pointer">Aromatherapy</span>
  <span class="content-text pointer">Essences</span>
  <span class="content-text pointer">Fitness</span>
  <span class="content-text pointer">Massage</span>
  <span class="content-text pointer">Mineral therapies</span>
  <span class="content-text pointer">Nutrition</span>
  </div>
  <div class="w-75">
    <table class="table mt-3 mb-5">
      <thead class="thead custom-thead promotion-thead">
        <tr class="modal-table">
          <th class="">Product</th>
          <th class="">Wholesale excl GST</th>
          <th class="">Retail incl GST</th>
          <th class="text-end">%</th>
        </tr>
        <tr class="horizontal-line"></tr>
      </thead>
      <tbody id="modal-table-body" class="custom-tbody promotion-tbody">
      <tr>
      <td>
         <div class="product-td d-flex align-items-center">
      <div class="h-100 rounded-4 product-td-img p-3">
        <img src="/assets/images/product-table-image.jpg" alt="" class="h-100 w-100">
      </div>
      Perfect Potion Aniseed Myrtle 5ml
    </div>
        </td>
        <td>
        $67.00
        </td>
        <td class="">
        $144.00
        </td>
        <td class="text-end">
        <form class="account-checkbox d-inline"><input type="checkbox" name="" id="" /></form>
        </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex-column gap-3 product-modal-btn">
   <button id="product-modal-save">Save changes</button>
   <button id="product-modal-cancel" data-bs-dismiss="modal"
    aria-label="Close">Cancel</button>
    </div>
  </div>
 </div>
   </div>`;

function hideremarkform() {
  const remarkform = document?.querySelector("#remarkform");

  if (remarkform) {
    if (remarkform.classList.contains("d-none")) {
      remarkform.classList.remove("d-none");
      remarkform.classList.add("d-flex");
      console.log("Showing remarkform");
    } else {
      remarkform.classList.remove("d-flex");
      remarkform.classList.add("d-none");
      console.log("Hiding remarkform");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function renderTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    data.forEach((item) => {
      const row = document.createElement("tr");
      // Function to update row style based on screen size
      function updateRowStyle() {
        if (window.innerWidth < 992) {
          row.classList.add("d-flex", "flex-column");
          row.classList.remove("d-table-row");
        } else {
          row.classList.remove("d-flex", "flex-column");
        }
      }
      row.innerHTML = `
                <td class="" ><span class="responsive-lable d-lg-none">Code</span>
                  <span class="color-red">${item.code}</span>
                </td>
                <td>
                <span class="responsive-lable d-lg-none">Product</span>
                <span class="color-red">${item.product}</span>
                </td>
                <td>
                <span class="responsive-lable d-lg-none">QTY</span>${item.qty}
                </td>
                <td class="text-lg-center" ><span class="responsive-lable d-lg-none">Unit Wholesale</span>${item.unitWholesale}</td>
                <td class="text-lg-center" ><span class="responsive-lable d-lg-none">Unit Retail</span>${item.unitRetail}</td>
                 <td>
                <span class="responsive-lable d-lg-none">Markup / Discount</span>${item.markup}</td>
                  <td>
                <span class="responsive-lable d-lg-none">Line Total</span>${item.lineTotal}</td>
                  <td class="text-lg-end">
                  ${item.logos}
                </td>
                `;

      tableBody.appendChild(row);
      updateRowStyle();

      row.querySelector(".open-remark")?.addEventListener("click", (e) => {
        e.stopPropagation();
        hideremarkform();
      });
      window.addEventListener("resize", updateRowStyle);
    });
  }

  function renderAttachTable() {
    const tableBody = document.getElementById("attach-table-body");
    tableBody.innerHTML = "";
    attachData.forEach((item) => {
      const row = document.createElement("tr");
      // Function to update row style based on screen size
      function updateRowStyle() {
        if (window.innerWidth < 992) {
          row.classList.add("d-flex", "flex-column");
          row.classList.remove("d-table-row");
        } else {
          row.classList.remove("d-flex", "flex-column");
        }
      }
      row.innerHTML = `
                  <td class="" ><span class="responsive-lable d-lg-none"></span>
                   ${item.check}
                  </td>
                  <td>
                  <span class="responsive-lable d-lg-none">Code</span>
                  ${item.code}
                  </td>
                  <td >
                  <span class="responsive-lable d-lg-none">Name</span>${item.name}
                  </td>
                  <td ><span class="responsive-lable d-lg-none">Start Date</span>${item.startDate}</td>
                  <td><span class="responsive-lable d-lg-none">End Datel</span>${item.endDate}</td>
                  `;
      tableBody.appendChild(row);
      updateRowStyle();
      window.addEventListener("resize", updateRowStyle);
    });
  }
  renderTable();
  renderAttachTable();
  // renderModalTable()
});
//Products Modal
const modalBtn = document.getElementById("modal-btn");
const container = document.getElementById("modal-container");
const loadContent = (content) => {
  container.innerHTML = content;
};
modalBtn.addEventListener("click", () => {
  loadContent(productsModal);
  renderModalTable();
});

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
const editAddressBtn = document.getElementById("edit-address");
