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
