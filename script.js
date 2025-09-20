// Load from localStorage or set default
let products = JSON.parse(localStorage.getItem('products')) || [
  { name: "Cement", stock: 20, reorder: 5 },
  { name: "Iron Sheets", stock: 7, reorder: 3 },
  { name: "Plywood", stock: 10, reorder: 4 },
  { name: "Paint", stock: 12, reorder: 5 }
];

let scanHistory = JSON.parse(localStorage.getItem('scanHistory')) || [];

// Save to localStorage
function saveData() {
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('scanHistory', JSON.stringify(scanHistory));
}

// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Simulate a scan
function simulateScan(method) {
  const product = products[Math.floor(Math.random() * products.length)];
  product.stock = Math.max(0, product.stock - 1);

  const resultText = `Scanned: ${product.name} (${method})`;
  document.getElementById('scan-result').textContent = resultText;

  addScanHistory(product.name, method);
  updateInventory();
  saveData();
}

// Add to scan history
function addScanHistory(productName, method) {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const scanItem = {
    product: productName,
    method,
    time: timeString
  };

  // Add to start
  scanHistory.unshift(scanItem);

  // Keep only 10
  if (scanHistory.length > 10) {
    scanHistory.pop();
  }

  renderScanHistory();
}

// Render scan history
function renderScanHistory() {
  const historyContainer = document.getElementById('scan-history-container');
  historyContainer.innerHTML = '';

  scanHistory.forEach(scan => {
    const div = document.createElement('div');
    div.className = 'scan-item';
    div.innerHTML = `
      <span class="product">${scan.product}</span>
      <span class="action">${scan.method}</span>
      <span class="time">${scan.time}</span>
    `;
    historyContainer.appendChild(div);
  });
}

// Update inventory table and stats
function updateInventory() {
  const table = document.getElementById('inventory-table');
  table.innerHTML = '';

  let totalStock = 0;
  products.forEach(p => {
    totalStock += p.stock;
    const row = `<tr>
      <td>${p.name}</td>
      <td>${p.stock}</td>
      <td>${p.reorder}</td>
    </tr>`;
    table.innerHTML += row;
  });

  document.getElementById('total-products').textContent = products.length;
  document.getElementById('items-in-stock').textContent = totalStock;

  const lowStockItems = products.filter(p => p.stock <= p.reorder).length;
  document.getElementById('low-stock').textContent = lowStockItems;
}

// Initialize on load
window.onload = function() {
  updateInventory();
  renderScanHistory();
};
