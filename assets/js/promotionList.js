const data = [
    {
        name: 'Admin Promo Test',
        code: 'ovj6671p',
        startDate: '22/11/24',
        endDate: '22/11/24',
        products: `<div class="d-flex align-items-center">
        <span class="dot-notation">100% Whey Protien WP supplement</span><div class="dropup d-inline">
        <div class="dropdown-menu position-absolute border-0 popp mb-1" aria-labelledby="dropdown-menu-logo">
          <div class="px-3 rounded-2 active-page pop-up">
           <b>2x</b> 100% Whey Protein WP Protein powder <br>
            <b>3x</b> HS-12S12 - General tonic 30ml spray <br>
           <b>2x</b> HS-1225012 - General tonic 250 tabs
          </div>
          <div class="position-absolute triangle active-page">
          </div>
         </div>
         <b class="pointer" id="dropdown-menu-logo" data-bs-toggle="dropdown" aria-expanded="false"">25+</b>
      </div>
        </div>`,
        masterPromotion: `<div class="d-flex align-items-center edit-logos">
          <img src="assets/svgs/edit.svg" class="pointer">
          <img src="assets/svgs/close.svg" class="pointer" alt="">
        </div>` ,
        clientPromotions: `pract2@pract.com \n 
                           client4@client.com \n                   
                           overseasNat2@nat.com                    `
    }
]
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
       </div>`
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
              <td class="" ><span class="responsive-lable d-lg-none">Name</span>${
                item.name
              }</td>
            <td class="" ><span class="responsive-lable d-lg-none">Code</span>${
              item.code
            }</td>
            <td class="" ><span class="responsive-lable d-lg-none">Start Date</span>${
              item.startDate
            }</td>
            <td class="" ><span class="responsive-lable d-lg-none">End Date</span>${
              item.endDate
            }</td>
            <td>
            <span class="responsive-lable d-lg-none">Products</span>${
              item.products
            }</td>
             <td>
            <span class="responsive-lable d-lg-none">Master Promotion</span>${
              item.masterPromotion
            }</td>
              <td>
            <span class="responsive-lable d-lg-none">Client Promotion</span>${
              item.clientPromotions
            }</td>
            `;
        tableBody.appendChild(row);
        updateRowStyle();
       window.addEventListener("resize", updateRowStyle)
      });
    }
    renderTable();
    const modalBtn = document.getElementById("modal-btn")
  const container = document.getElementById("modal-container");
  const loadContent = (content) => {
    container.innerHTML = content
  };
  modalBtn.addEventListener("click", ()=>loadContent(productsModal))
  });