const data = [
  {
    client: "Stepehnson",
    order: "PHW4",
    date: "28/11/14",
    retail: "$0.00",
    wholesale: "$30.00",
    margin: "$20.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },

  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Pending",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW3",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$220.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },

  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$300.00",
    margin: "$200.00",
    status: "Delivered",
    activity: "-",
    task: "-",
  },
  {
    client: "Stepehnson",
    order: "PHW2",
    date: "29/11/14",
    retail: "$0.00",
    wholesale: "$320.00",
    margin: "$200.00",
    status: "Pending",
    activity: "-",
    task: "-",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const searchInput = document.getElementById("order-status-search-input");
  const tableBody = document.getElementById("table-body");
  const pageNumbers = document.getElementById("page-numbers");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const clientDataDiv = document.getElementsByClassName("client-data-div");

  let currentPage = 1;
  const rowsPerPage = 12;
  let filteredData = data; // Holds filtered data for rendering

  // Function to Render Table
  function renderTable() {
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = currentPage * rowsPerPage;
    const pageData = filteredData.slice(start, end);

    pageData.forEach((item) => {
      const row = document.createElement("tr");
      // Function to update row style based on screen size
      function updateRowStyle() {
        if (window.innerWidth < 1200) {
          row.classList.add("d-flex", "flex-column", "customBorder-Table");
          row.classList.remove("d-table-row");
        } else {
          row.classList.remove("d-flex", "flex-column", "customBorder-Table");
          // row.classList.add("d-table-row", "");
        }
      }
      row.innerHTML = `
      <td class="custom-td"><span class="responsive-lable d-xl-none">Client</span>${item.client}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Order</span>${item.order}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Date created </span>${item.date}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Retail nc GST</span>${item.retail}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Wholesale exc GST</span>${item.wholesale}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Margin exc GST</span>${item.margin}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Status</span>${item.status}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Activity</span>${item?.activity}</td>
      <td class="custom-td"><span class="responsive-lable d-xl-none">Tasks</span>${item?.task}</td>
    `;
      tableBody.appendChild(row);
      updateRowStyle();
      // Update styles dynamically when resizing
      window.addEventListener("resize", updateRowStyle);
    });
    renderPagination();
  }

  function renderDiv() {
    pageData.forEach((item) => {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("client-order-div");
      orderDiv.innerHTML = `
          <div><b>Client</b> <span>${item.client}</span></div>
          <div><b>Order</b> <span>${item.order}</span></div>
          <div><b>Date Created</b> <span>${item.date}</span></div>
           <div><b>Retail nc GST</b> <span>${item.retail}</span></div>
           <div><b>Wholesale exc ST</b> <span>${item.wholesale}</span></div>
           <div><b>Margin exc GST</b> <span>${item.margin}</span></div>
           <div><b>Status</b> <span>${item.status}</span></div>
          <div><b>Activity</b> <span>${item?.activity}</span></div>
           <div><b>Task</b> <span>${item?.task}</span></div>
        `;
      clientDataDiv.appendChild(orderDiv);
    });
    renderPagination();
  }

  // Function to Render Pagination
  function renderPagination() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    pageNumbers.innerHTML = "";

    const createPageNumber = (page) => {
      const pageNumber = document.createElement("span");
      pageNumber.textContent = page;
      pageNumber.style.cursor = "pointer";
      pageNumber.style.margin = "0 5px";
      pageNumber.style.padding = "8px 18px";
      pageNumber.style.borderRadius = "5px";

      if (page === currentPage) {
        pageNumber.style.backgroundColor = "#CED4D4";
        pageNumber.style.color = "#fff";
      }

      pageNumber.onclick = () => {
        currentPage = page;
        renderTable();
      };
      return pageNumber;
    };

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.appendChild(createPageNumber(i));
      }
    } else {
      pageNumbers.appendChild(createPageNumber(1));
      if (currentPage > 3)
        pageNumbers.appendChild(document.createTextNode("..."));

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.appendChild(createPageNumber(i));
      }

      if (currentPage < totalPages - 2)
        pageNumbers.appendChild(document.createTextNode("..."));
      pageNumbers.appendChild(createPageNumber(totalPages));
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // Debounce Function
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Filter Data Based on Search Input
  function filterData(searchValue) {
    filteredData = data.filter((item) => {
      return Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    currentPage = 1; // Reset to the first page after search
    renderTable();
  }

  // Attach Debounced Search Handler
  searchInput.addEventListener(
    "input",
    debounce((event) => {
      filterData(event.target.value);
    }, 300)
  );

  // Change Page Functionality
  function changePage(direction) {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (direction === -1 && currentPage > 1) currentPage--;
    else if (direction === 1 && currentPage < totalPages) currentPage++;
    renderTable();
  }

  prevBtn.onclick = () => changePage(-1);
  nextBtn.onclick = () => changePage(1);

  // Initial Render
  renderTable();
  renderDiv();
});
