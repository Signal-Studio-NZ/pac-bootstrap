const data = [
  {
    id: 1,
    name: "Signal Studio",
    email: "hello@signalstudio.com",
    discount: `10% <span class="off-retail">Off Retail</span>`,
    showSpecials: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    createInvoice: `<form class="account-checkbox d-inline"><input checked type="checkbox" name="" id="" /></form>`,
    codeName: "SGNSTD",
    action: `<div class="d-flex align-items-center justify-content-end edit-logos">
          <img src="assets/svgs/percentage.svg" class="pointer pointer-active" alt="discount percent">
          <img src="assets/svgs/details.svg" class="pointer" alt="details">
          <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>`,
  },
  {
    id: 2,
    name: "Signal Studio",
    email: "hello@signalstudio.com",
    discount: `10% <span class="off-retail">Off Retail</span>`,
    showSpecials: `<form class="account-checkbox d-inline"><input type="checkbox" name="" id="" /></form>`,
    createInvoice: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    codeName: "SGNSTD",
    action: `<div class="entry">
  <div class="d-flex align-items-center justify-content-end edit-logos">
    <img src="assets/svgs/percentage.svg" class="pointer pointer-active" alt="discount percent">
    <img src="assets/svgs/details.svg" class="pointer" alt="details">
    <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
    <img src="assets/svgs/close.svg" class="pointer" alt="">
  </div>
</div>`,
  },
  {
    id: 4,
    name: "Signal Studio",
    email: "hello@signalstudio.com",
    discount: `10% <span class="off-retail">Off Retail</span>`,
    showSpecials: `<form class="account-checkbox d-inline"><input type="checkbox" name="" id="" /></form>`,
    createInvoice: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    codeName: "SGNSTD",
    action: `<div class="entry">
  <div class="d-flex align-items-center justify-content-end edit-logos">
    <img src="assets/svgs/percentage.svg" class="pointer pointer-active" alt="discount percent">
    <img src="assets/svgs/details.svg" class="pointer" alt="details">
    <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
    <img src="assets/svgs/close.svg" class="pointer" alt="">
  </div>
</div>`,
  },
  {
    id: 5,
    name: "Signal Studio",
    email: "hello@signalstudio.com",
    discount: `10% <span class="off-retail">Off Retail</span>`,
    showSpecials: `<form class="account-checkbox d-inline"><input type="checkbox" name="" id="" /></form>`,
    createInvoice: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    codeName: "SGNSTD",
    action: `<div class="entry">
  <div class="d-flex align-items-center justify-content-end edit-logos">
    <img src="assets/svgs/percentage.svg" class="pointer pointer-active" alt="discount percent">
    <img src="assets/svgs/details.svg" class="pointer" alt="details">
    <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
    <img src="assets/svgs/close.svg" class="pointer" alt="">
  </div>
</div>`,
  },
  {
    id: 6,
    name: "Signal Studio",
    email: "hello@signalstudio.com",
    discount: `10% <span class="off-retail">Off Retail</span>`,
    showSpecials: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    createInvoice: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    codeName: "SGNSTD",
    action: `<div class="entry">
  <div class="d-flex align-items-center justify-content-end edit-logos">
    <img src="assets/svgs/percentage.svg" class="pointer pointer-active" alt="discount percent">
    <img src="assets/svgs/details.svg" class="pointer" alt="details">
    <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
    <img src="assets/svgs/close.svg" class="pointer" alt="">
  </div>
</div>`,
  },
  {
    id: 7,
    name: "Signal Studio",
    email: "hello@signalstudio.com",
    discount: `10% <span class="off-retail">Off Retail</span>`,
    showSpecials: `<form class="account-checkbox d-inline"><input type="checkbox" checked name="" id="" /></form>`,
    createInvoice: `<form class="account-checkbox d-inline"><input type="checkbox" name="" id="" /></form>`,
    codeName: "SGNSTD",
    action: `<div class="entry">
  <div class="d-flex align-items-center justify-content-end edit-logos">
    <img src="assets/svgs/percentage.svg" class="pointer pointer-active" alt="discount percent">
    <img src="assets/svgs/details.svg" class="pointer" alt="details">
    <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
    <img src="assets/svgs/close.svg" class="pointer" alt="">
  </div>
</div>`,
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

document.addEventListener("DOMContentLoaded", function () {
  function renderTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    data.forEach((item) => {
      const row = document.createElement("tr");
      // Function to update row style based on screen size
      function updateRowStyle() {
        if (window.innerWidth < 992) {
          row.classList.add("d-flex", "flex-column", "clientList-table");
          row.classList.remove("d-table-row");
        } else {
          row.classList.remove("d-flex", "flex-column");
        }
      }
      row.innerHTML = `
            <td class="" ><span class="responsive-lable d-lg-none">Name</span>${item.name}</td>
            <td>
            <span class="responsive-lable d-lg-none">Email</span>${item.email}</td>
            <td>
            <span class="responsive-lable d-lg-none">Discount</span>${item.discount}
            </td>
            <td class="text-lg-center" ><span class="responsive-lable d-lg-none">Show specials</span>${item.showSpecials}</td>
            <td class="text-xxl-center" ><span class="responsive-lable d-lg-none">Create invoice</span>${item.createInvoice}</td>
             <td>
            <span class="responsive-lable d-lg-none">Codename</span>${item.codeName}</td>
              <td class="text-lg-end">
            ${item.action}</td>
            `;
      tableBody.appendChild(row);
      updateRowStyle();
      window.addEventListener("resize", updateRowStyle);
    });
  }
  renderTable();
  // renderModalTable()
});

{
  /* <span class="responsive-lable d-lg-none">Action</span> */
}
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
document.addEventListener("DOMContentLoaded", function () {
  const entries = document.querySelectorAll(".entry");

  entries.forEach((entry) => {
    const icons = entry.querySelectorAll(".edit-logos img");

    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const isActive = icon.classList.contains("pointer-active");

        // Reset all icons in this entry
        icons.forEach((i) => {
          i.classList.remove("pointer-active");
          i.src = i.src.replace("Active.svg", ".svg");
        });

        // If this icon was not active, activate it
        if (!isActive) {
          icon.classList.add("pointer-active");
          icon.src = icon.src.replace(".svg", "Active.svg");
        }

        // If it was active, we already reset it above (toggle off)
      });
    });
  });
});
