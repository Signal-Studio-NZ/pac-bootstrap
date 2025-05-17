const data = [
  {
    id: 1,
    code: "HGASP",
    products: "Aspen Essence 10ml",
    unitWholesale: "$12.40",
    unitRetail: "$20.00",
    markup: `25% <span class="off-retail flex-shrink-0">Off Retail</span>`,
    discontedPrice: "$15.00",
    action: ` <div class="d-flex align-items-center justify-content-end edit-logos">
          <img src="assets/svgs/percentage.svg" class="pointer" alt="discount percent">
          <img src="assets/svgs/details.svg" class="pointer" alt="details">
          <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>`,
  },
  {
    id: 2,
    code: "HGASP",
    products: "Aspen Essence 10ml",
    unitWholesale: "$12.40",
    unitRetail: "$20.00",
    markup: `25% <span class="off-retail flex-shrink-0">Off Retail</span>`,
    discontedPrice: "$15.00",
    action: `
         <div class="d-flex align-items-center justify-content-end  edit-logos">
          <img src="assets/svgs/percentage.svg" class="pointer" alt="discount percent">
          <img src="assets/svgs/details.svg" class="pointer" alt="details">
          <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>`,
  },
  {
    id: 1,
    code: "HGASP",
    products: "Aspen Essence 10ml",
    unitWholesale: "$12.40",
    unitRetail: "$20.00",
    markup: `25% <span class="off-retail flex-shrink-0">Off Retail</span>`,
    discontedPrice: "$15.00",
    action: ` <div class="d-flex align-items-center justify-content-end edit-logos">
          <img src="assets/svgs/percentage.svg" class="pointer" alt="discount percent">
          <img src="assets/svgs/details.svg" class="pointer" alt="details">
          <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>`,
  },
  {
    id: 2,
    code: "HGASP",
    products: "Aspen Essence 10ml",
    unitWholesale: "$12.40",
    unitRetail: "$20.00",
    markup: `25% <span class="off-retail flex-shrink-0">Off Retail</span>`,
    discontedPrice: "$15.00",
    action: `
         <div class="d-flex align-items-center justify-content-end  edit-logos">
          <img src="assets/svgs/percentage.svg" class="pointer" alt="discount percent">
          <img src="assets/svgs/details.svg" class="pointer" alt="details">
          <img src="assets/svgs/edit.svg" class="pointer" alt="edit">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>`,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  function renderTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.classList.add("client-discountTable-tr");
      // Function to update row style based on screen size
      function updateRowStyle() {
        if (window.innerWidth < 992) {
          row.classList.add(
            "d-flex",
            " flex-column",
            "client-discountTable-tr"
          );
          row.classList.remove("d-table-row");
        } else {
          row.classList.remove("d-flex", "flex-column");
        }
      }

      row.innerHTML = `
            <td class="" ><span class="responsive-lable d-lg-none">Code</span>${item.code}</td>
            <td>
            <span class="responsive-lable d-lg-none">Product</span>${item.products}</td>
            <td>
            <span class="responsive-lable d-lg-none">Unit Wholesale</span>${item.unitWholesale}
            </td>
            <td class="" ><span class="responsive-lable d-lg-none">Unit retail</span>${item.unitRetail}</td>
            <td class="d-flex  border-0" ><span class="responsive-lable d-lg-none ">Markup/Discount</span>${item.markup}</td>
             <td>
            <span class="responsive-lable d-lg-none">Discounted price</span>${item.discontedPrice}</td>
              <td class="pr-0">
            ${item.action}</td>
            `;
      tableBody.appendChild(row);
      updateRowStyle();
      window.addEventListener("resize", updateRowStyle);
    });
  }
  renderTable();
});
