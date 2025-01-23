const data = [
  {
    timestamp: "-",
    description: "-",
    link: "-",
    email: "-",
    notes: "-",
    resend: "-",
  },
];

let currentPage = 1;
const rowsPerPage = 12;

function renderTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = currentPage * rowsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="custom-td">${item.timestamp}</td>
          <td class="custom-td">${item.description}</td>
          <td class="custom-td">${item.link}</td>
          <td class="custom-td">${item.email}</td>
          <td class="custom-td">${item.notes}</td>
          <td class="custom-td">${item.resend}</td>
          `;
    tableBody.appendChild(row);
  });

  renderPagination();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPagination() {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const pageNumbers = document.getElementById("page-numbers");
  pageNumbers.innerHTML = "";

  const createPageNumber = (page) => {
    const pageNumber = document.createElement("span");
    pageNumber.textContent = page;
    pageNumber.style.cursor = "pointer";
    pageNumber.style.margin = "0 5px";
    pageNumber.style.padding = "8px 15px";
    pageNumber.style.borderRadius = "5px";

    if (page === currentPage) {
      pageNumber.style.backgroundColor = "#CED4D4";
      pageNumber.style.color = "black";
    }

    pageNumber.onclick = () => {
      currentPage = page;
      renderTable();
    };
    return pageNumber;
  };

  if (totalPages <= 5) {
    // Show all numbers if total pages <= 5
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.appendChild(createPageNumber(i));
    }
  } else {
    // Always show the first page
    pageNumbers.appendChild(createPageNumber(1));

    if (currentPage > 3) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pageNumbers.appendChild(dots);
    }

    // Show middle pages dynamically
    let startPage, endPage;

    if (currentPage === 1) {
      startPage = 2;
      endPage = 3;
    } else if (currentPage === totalPages) {
      startPage = totalPages - 2;
      endPage = totalPages - 1;
    } else {
      startPage = Math.max(2, currentPage - 1);
      endPage = Math.min(totalPages - 1, currentPage + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.appendChild(createPageNumber(i));
    }

    if (currentPage < totalPages - 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pageNumbers.appendChild(dots);
    }

    // Always show the last page
    pageNumbers.appendChild(createPageNumber(totalPages));
  }

  // Add Prev & Next buttons
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = currentPage === totalPages;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changePage(direction) {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  if (direction === -1 && currentPage > 1) {
    currentPage--;
  } else if (direction === 1 && currentPage < totalPages) {
    currentPage++;
  }
  renderTable();
  scrollToTop();
}

renderTable();
