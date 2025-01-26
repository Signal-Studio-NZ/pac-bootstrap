const data = [
  {
    order: 1,
    code: "AA033B",
    product: "* Aniseed Myrtle 5ml",
    date: "2024-12-01",
    qty: "1",
    rrp: "$0.00",
    w_s: "$19.38",
    price: "$100",
  },
  {
    order: 2,
    code: "HAI4",
    product: "* Flower Insight Cards (69)",
    date: "2024-12-01",
    qty: "3",
    rrp: "$0.00",
    w_s: "$53.34",
    price: "$53.34",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
  },
  {
    order: 3,
    code: "HCANX",
    product: "Anxiostat 20ml",
    date: "2024-12-01",
    qty: "2",
    rrp: "$0.00",
    w_s: "$16.00",
    price: "$16.00",
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
            <td class="custom-td">${item.code}</td>
            <td class="orderStatus-table-prod custom-td">${item.product}</td>
            <td class="custom-td">${item.qty}</td>
            <td class="custom-td">${item.rrp}</td>
            <td class="custom-td">${item.w_s}</td>
            <td class="custom-td text-end">${item.price}</td>
          `;
    tableBody.appendChild(row);
  });

  // Add GST and Total rows after the main data rows

  const subtotal = document.createElement("tr");
  subtotal.classList.add("order-status-subtotal");
  subtotal.innerHTML = `
        <td colspan="5" class="orderStatus-subtotal bg-gray ">subtotal</td>
        <td class=" bg-gray orderStatus-subtotal text-end">$300</td>
      `;
  tableBody.appendChild(subtotal);

  const gstRow = document.createElement("tr");
  gstRow.classList.add("order-status-gstrow");

  gstRow.innerHTML = `
        <td class="bg-gray gst-table" colspan="5">GST</td>
        <td class="bg-gray gst-table text-end">$33</td>
      `;
  tableBody.appendChild(gstRow);

  const totalprice = document.createElement("tr");
  totalprice.classList.add("order-status-totalprice");
  totalprice.innerHTML = `
        <td class="bg-gray orderStatus-total" colspan="5">Total</td>
        <td class="bg-gray orderStatus-total text-end">$300</td>
      `;
  tableBody.appendChild(totalprice);
}

renderTable();
