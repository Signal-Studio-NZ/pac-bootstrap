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

// DOM Elements
const searchInput = document.getElementById("order-status-search-input");
const tableBody = document.getElementById("table-body");
const pageNumbers = document.getElementById("page-numbers");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

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
    row.innerHTML = `
          <td class="custom-td">${item.client}</td>
          <td class="custom-td">${item.order}</td>
          <td class="custom-td">${item.date}</td>
          <td class="custom-td">${item.retail}</td>
          <td class="custom-td">${item.wholesale}</td>
          <td class="custom-td">${item.margin}</td>
          <td class="custom-td">${item.status}</td>
          <td class="custom-td">${item?.activity}</td>
          <td class="custom-td">${item?.task}</td>
        `;
    tableBody.appendChild(row);
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
