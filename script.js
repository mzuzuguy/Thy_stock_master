// Product database
const products = [
  {
    name: "Wireless Headphones",
    sku: "WH-2023",
    category: "Electronics",
    stock: 12,
    reorder: 20,
  },
  {
    name: "Bluetooth Speaker",
    sku: "BS-4567",
    category: "Electronics",
    stock: 45,
    reorder: 15,
  },
  {
    name: "Cotton T-Shirt",
    sku: "CT-7890",
    category: "Clothing",
    stock: 8,
    reorder: 25,
  },
  {
    name: "Gardening Tools Set",
    sku: "GT-3345",
    category: "Home & Garden",
    stock: 32,
    reorder: 10,
  },
  {
    name: "Stainless Steel Water Bottle",
    sku: "WB-9012",
    category: "Kitchen",
    stock: 5,
    reorder: 15,
  },
];

// Visual feedback
document.querySelector(
  ".scan-status"
).textContent = `Updated: ${product.name}`;
document.querySelector(".scan-status").style.color = "#22c55e";
setTimeout(() => {
  document.querySelector(".scan-status").textContent =
    "Ready to scan";
  document.querySelector(".scan-status").style.color = "#22c55e";
}, 2000);

function updateInventory(sku, quantity, method) {
  // Find the product in our database
  const product = products.find((p) => p.sku === sku);
  if (product) {
    // Update stock
    product.stock += quantity;

    // Update the UI
    const rows = document.querySelectorAll(".inventory-table tbody tr");
    for (let row of rows) {
      if (row.cells[1].textContent === sku) {
        // Update stock cell
        const stockCell = row.cells[3];
        stockCell.textContent = product.stock;

        // Update status
        const statusCell = row.cells[5];
        if (product.stock <= product.reorder) {
          stockCell.className = "stock-low";
          statusCell.innerHTML =
            '<span class="alert-badge alert-low">Low Stock</span>';
        } else {
          stockCell.className = "stock-ok";
          statusCell.innerHTML =
            '<span class="alert-badge" style="background-color:#dcfce7; color:#16a34a;">In Stock</span>';
        }

        break;
      }
    }

    // Add to scan history
    addScanHistory(product.name, method);

    // Update low stock count
    updateLowStockCount();
  } else {
    // Handle product not found
    document.querySelector(".scan-status").textContent = "Product not found";
    document.querySelector(".scan-status").style.color = "#ef4444";
    setTimeout(() => {
      document.querySelector(".scan-status").textContent = "Ready to scan";
      document.querySelector(".scan-status").style.color = "#22c55e";
    }, 2000);
  }
}

function addScanHistory(productName, method) {
  const historyContainer = document.getElementById(
    "scan-history-container"
  );
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const scanItem = document.createElement("div");
  scanItem.className = "scan-item";
  scanItem.innerHTML = `
            <div>
                <span class="product">${productName}</span>
                <div class="action">${method} • +1 unit</div>
            </div>
            <span class="time">${timeString}</span>
        `;

  // Add to top of history
  if (historyContainer.firstChild) {
    historyContainer.insertBefore(scanItem, historyContainer.firstChild);
  } else {
    historyContainer.appendChild(scanItem);
  }

  // Limit history to 6 items
  if (historyContainer.children.length > 6) {
    historyContainer.removeChild(historyContainer.lastChild);
  }
}

function updateLowStockCount() {
  const lowStockCount = products.filter(
    (p) => p.stock <= p.reorder
  ).length;
  const lowStockElement = document.querySelector(".stat-card[data-stat='low-stock'] h3");
  if (lowStockElement) {
      lowStockElement.textContent = lowStockCount;
  }
}

// Simple inventory update simulation
function updateStockLevels() {
  const stockElements = document.querySelectorAll(
    ".stock-low, .stock-ok"
  );

  stockElements.forEach((el) => {
    // Randomly fluctuate stock levels for demo purposes
    const currentStock = parseInt(el.textContent);
    const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
    let newStock = currentStock + change;

    // Ensure stock doesn't go negative
    if (newStock < 0) newStock = 0;

    // Update display
    el.textContent = newStock;

    // Update status
    const row = el.closest("tr");
    const sku = row.cells[1].textContent;
    const product = products.find((p) => p.sku === sku);

    if (product) {
      product.stock = newStock;

      if (newStock <= product.reorder) {
        el.className = "stock-low";
        row.cells[5].innerHTML =
          '<span class="alert-badge alert-low">Low Stock</span>';
      } else {
        el.className = "stock-ok";
        row.cells[5].innerHTML =
          '<span class="alert-badge" style="background-color:#dcfce7; color:#16a34a;">In Stock</span>';
      }
    }
  });

  // Update stats
  updateLowStockCount();
}

// Initialize scan history
function initScanHistory() {
  // Add some initial scan history items
  addScanHistory("Bluetooth Speaker", "Barcode Scan");
  addScanHistory("Wireless Headphones", "RFID Scan");
  addScanHistory("Gardening Tools Set", "Manual Entry");
}

// Initialize when page loads
window.onload = function () {
  initScanHistory();
  // Update stock levels every 10 seconds to simulate real-time changes
  setInterval(updateStockLevels, 10000);
};