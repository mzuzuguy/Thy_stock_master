# Thy_stock_master

StockMaster Pro is a comprehensive automated inventory management system that enables businesses with multiple retail locations to seamlessly track inventory across all shops in real-time through barcode and RFID technology integration. What sets this solution apart is its powerful multi-store capabilities that provide centralized oversight while allowing location-specific management, with automated reordering, real-time sales tracking from all points of sale, and consolidated analytics that offer both chain-wide overviews and individual store performance metrics. This system eliminates inventory blind spots across retail networks, prevents stockouts through intelligent forecasting that accounts for location-specific demand patterns, and provides actionable insights that help multi-location businesses optimize their inventory allocation, reduce carrying costs, and maximize sales opportunities across their entire retail ecosystem.

add the section for trackick mutiple shops or stores
We are going to add a new section for tracking multiple shops or stores.
The section will highlight the multi-store capabilities of the system.
We'll include features such as:

Centralized dashboard for all stores

Individual store performance metrics

Inventory transfer between stores

Consolidated and store-specific reports

Let's create the section after the Dashboard Demo and before the CTA section.

StockMaster Pro - Multi-Store Inventory Management
I'll add a comprehensive section for tracking multiple shops or stores to the website. This new section will highlight how StockMaster Pro can manage inventory across multiple retail locations with centralized oversight.

html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StockMaster Pro | Automated Inventory Management</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #2563eb;
            --secondary: #4f46e5;
            --accent: #22c55e;
            --warning: #f59e0b;
            --danger: #ef4444;
            --dark: #1f2937;
            --light: #f9fafb;
            --gray: #9ca3af;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f3f4f6;
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        
        .logo-main {
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: 1px;
            line-height: 1;
        }
        
        .logo-sub {
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-top: 4px;
            color: var(--accent);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 2rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
        }
        
        .nav-links a:hover {
            opacity: 0.8;
        }
        
        .btn {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            border-radius: 6px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn-primary {
            background-color: var(--accent);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: #16a34a;
            transform: translateY(-2px);
        }
        
        .btn-outline {
            border: 2px solid white;
            color: white;
            background: transparent;
        }
        
        .btn-outline:hover {
            background-color: white;
            color: var(--primary);
        }
        
        /* Hero Section */
        .hero {
            padding: 5rem 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 400"><rect fill="%232563eb" width="800" height="400"/><path fill="%233b82f6" fill-opacity="0.2" d="M0 192L26.7 202.7C53.3 213 107 235 160 234.7C213.3 235 267 213 320 197.3C373.3 181 427 171 480 186.7C533.3 203 587 245 640 250.7C693.3 256 747 224 773.3 208L800 192L800 401L773.3 401C746.7 401 693 401 640 401C586.7 401 533 401 480 401C426.7 401 373 401 320 401C266.7 401 213 401 160 401C106.7 401 53 401 27 401L0 401Z"></path></svg>') no-repeat bottom;
            background-size: cover;
            color: white;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.5rem;
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        
        .hero-slogan {
            font-size: 2.2rem;
            font-weight: 700;
            margin: 2rem 0;
            color: white;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
            background: linear-gradient(45deg, var(--accent), #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }
        
        /* Features Section */
        .features {
            padding: 5rem 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark);
            margin-bottom: 1rem;
        }
        
        .section-title p {
            color: var(--gray);
            max-width: 700px;
            margin: 0 auto;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        /* Multi-Store Section */
        .multi-store {
            background: linear-gradient(135deg, #f8fafc, #e2e8f0);
            padding: 5rem 0;
        }
        
        .store-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .store-content {
            flex: 1;
            min-width: 300px;
        }
        
        .store-visual {
            flex: 1;
            min-width: 300px;
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .store-list {
            margin-top: 1.5rem;
        }
        
        .store-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            background: white;
            border-radius: 8px;
            margin-bottom: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .store-icon {
            width: 40px;
            height: 40px;
            background: var(--primary);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            color: white;
        }
        
        .store-info {
            flex: 1;
        }
        
        .store-name {
            font-weight: 600;
            margin-bottom: 0.2rem;
        }
        
        .store-stats {
            display: flex;
            gap: 1rem;
            font-size: 0.9rem;
            color: var(--gray);
        }
        
        .stat {
            display: flex;
            align-items: center;
        }
        
        .stat i {
            margin-right: 0.3rem;
        }
        
        .store-status {
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .status-open {
            background: #dcfce7;
            color: #16a34a;
        }
        
        .status-closed {
            background: #fee2e2;
            color: #ef4444;
        }
        
        .map-visual {
            height: 300px;
            background: #1f2937;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            margin-bottom: 1.5rem;
        }
        
        .map-point {
            position: absolute;
            width: 12px;
            height: 12px;
            background: var(--accent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        
        .map-point::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border: 2px solid var(--accent);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { width: 20px; height: 20px; opacity: 1; }
            100% { width: 40px; height: 40px; opacity: 0; }
        }
        
        .store-comparison {
            margin-top: 1.5rem;
        }
        
        .comparison-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .comparison-table th,
        .comparison-table td {
            padding: 0.8rem;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .comparison-table th {
            background-color: var(--light);
            font-weight: 600;
        }
        
        /* Scanner Section */
        .scanner-section {
            background: white;
            padding: 3rem 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            margin: 2rem auto;
        }
        
        .scanner-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-top: 1.5rem;
        }
        
        .scanner-preview {
            flex: 1;
            min-width: 300px;
            background: #1f2937;
            border-radius: 8px;
            padding: 1rem;
            position: relative;
            overflow: hidden;
            height: 250px;
        }
        
        .scanner-preview::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--accent);
            animation: scan 2s linear infinite;
        }
        
        @keyframes scan {
            0% { top: 0; }
            100% { top: 100%; }
        }
        
        .scanner-controls {
            flex: 1;
            min-width: 300px;
        }
        
        .scanner-controls h3 {
            margin-bottom: 1rem;
            color: var(--dark);
        }
        
        .scanner-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .scanner-btn {
            flex: 1;
            padding: 1rem;
            background: var(--light);
            border: 2px solid var(--primary);
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        
        .scanner-btn:hover {
            background: var(--primary);
            color: white;
        }
        
        .scanner-btn i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .scanner-input {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .scanner-input input {
            flex: 1;
            padding: 0.8rem;
            border: 1px solid var(--gray);
            border-radius: 6px;
        }
        
        .scan-history {
            margin-top: 1.5rem;
            max-height: 200px;
            overflow-y: auto;
        }
        
        .scan-item {
            padding: 0.8rem;
            background: var(--light);
            border-radius: 6px;
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .scan-item .product {
            font-weight: 600;
        }
        
        .scan-item .action {
            font-size: 0.9rem;
            color: var(--gray);
        }
        
        .scan-item .time {
            font-size: 0.8rem;
            color: var(--gray);
        }
        
        /* Dashboard Demo */
        .dashboard {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            margin: 2rem auto;
            overflow: hidden;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-card h3 {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .inventory-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
        }
        
        .inventory-table th,
        .inventory-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .inventory-table th {
            background-color: var(--light);
            font-weight: 600;
        }
        
        .stock-low {
            color: var(--danger);
            font-weight: 600;
        }
        
        .stock-ok {
            color: var(--accent);
            font-weight: 600;
        }
        
        .alert-badge {
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .alert-low {
            background-color: #fee2e2;
            color: var(--danger);
        }
        
        /* CTA Section */
        .cta {
            background: linear-gradient(135deg, var(--secondary), var(--primary));
            padding: 5rem 0;
            text-align: center;
            color: white;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
        
        .cta p {
            max-width: 700px;
            margin: 0 auto 2rem;
            font-size: 1.2rem;
        }
        
        .cta-slogan {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 2rem 0;
            color: white;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 3rem 0 2rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.8rem;
        }
        
        .footer-links a {
            color: var(--gray);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #374151;
            color: var(--gray);
            font-size: 0.9rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .logo-main {
                font-size: 1.6rem;
            }
            
            .logo-sub {
                font-size: 0.7rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .hero-slogan {
                font-size: 1.8rem;
            }
            
            .dashboard-header {
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
            }
            
            .scanner-container, .store-container {
                flex-direction: column;
            }
            
            .cta-slogan {
                font-size: 2rem;
            }
            
            .store-stats {
                flex-direction: column;
                gap: 0.3rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav>
                <div class="logo">
                    <div class="logo-main">STOCKMASTER</div>
                    <div class="logo-sub">AUTOMATE.TRACK.THRIVE.</div>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Integration</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" class="btn btn-outline">Get Started</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Automate Your Inventory Management</h1>
            <p>Real-time tracking, automated reordering, and seamless integration with your sales channels across all store locations</p>
            <div class="hero-slogan">Automate. Track. Thrive.</div>
            <a href="#" class="btn btn-primary">Start Free Trial</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features">
        <div class="container">
            <div class="section-title">
                <h2>Powerful Inventory Management Features</h2>
                <p>Streamline your operations with our comprehensive inventory management solution</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-barcode"></i>
                    </div>
                    <h3>Barcode & RFID Scanning</h3>
                    <p>Automate inventory updates with barcode scanners or RFID technology for accurate, real-time tracking.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Real-Time Sync</h3>
                    <p>Connect with your POS and e-commerce platforms to automatically update inventory levels with every sale.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <h3>Reorder Alerts</h3>
                    <p>Set custom reorder points and receive automatic alerts when stock levels are low.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>Automated Reordering</h3>
                    <p>Set up automatic purchase orders to suppliers when inventory reaches specified thresholds.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-warehouse"></i>
                    </div>
                    <h3>Warehouse Management</h3>
                    <p>Organize your storage with bin locations and optimize picking routes for efficiency.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Analytics & Reporting</h3>
                    <p>Gain insights into sales trends, inventory turnover, and product performance with detailed reports.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Multi-Store Section -->
    <section class="multi-store">
        <div class="container">
            <div class="section-title">
                <h2>Multi-Store Inventory Management</h2>
                <p>Manage all your retail locations from a single, centralized dashboard with real-time synchronization</p>
            </div>
            
            <div class="store-container">
                <div class="store-content">
                    <h3>Centralized Control for Multiple Locations</h3>
                    <p>StockMaster Pro enables businesses with multiple retail stores to maintain complete visibility and control over inventory across all locations. Our system provides both a consolidated view of your entire operation and detailed insights for each individual store.</p>
                    
                    <div class="store-list">
                        <div class="store-item">
                            <div class="store-icon">
                                <i class="fas fa-store"></i>
                            </div>
                            <div class="store-info">
                                <div class="store-name">Downtown Flagship Store</div>
                                <div class="store-stats">
                                    <div class="stat"><i class="fas fa-box"></i> 842 products</div>
                                    <div class="stat"><i class="fas fa-shopping-cart"></i> 42 sales today</div>
                                </div>
                            </div>
                            <div class="store-status status-open">Open</div>
                        </div>
                        
                        <div class="store-item">
                            <div class="store-icon">
                                <i class="fas fa-store"></i>
                            </div>
                            <div class="store-info">
                                <div class="store-name">Westside Mall Location</div>
                                <div class="store-stats">
                                    <div class="stat"><i class="fas fa-box"></i> 756 products</div>
                                    <div class="stat"><i class="fas fa-shopping-cart"></i> 38 sales today</div>
                                </div>
                            </div>
                            <div class="store-status status-open">Open</div>
                        </div>
                        
                        <div class="store-item">
                            <div class="store-icon">
                                <i class="fas fa-store"></i>
                            </div>
                            <div class="store-info">
                                <div class="store-name">Airport Terminal Store</div>
                                <div class="store-stats">
                                    <div class="stat"><i class="fas fa-box"></i> 523 products</div>
                                    <div class="stat"><i class="fas fa-shopping-cart"></i> 27 sales today</div>
                                </div>
                            </div>
                            <div class="store-status status-open">Open</div>
                        </div>
                    </div>
                </div>
                
                <div class="store-visual">
                    <h3>Store Network Overview</h3>
                    <div class="map-visual">
                        <div class="map-point" style="top: 30%; left: 25%;"></div>
                        <div class="map-point" style="top: 60%; left: 45%;"></div>
                        <div class="map-point" style="top: 75%; left: 70%;"></div>
                    </div>
                    
                    <div class="store-comparison">
                        <div class="comparison-header">
                            <h4>Performance Comparison</h4>
                            <span>Today</span>
                        </div>
                        
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>Store</th>
                                    <th>Sales</th>
                                    <th>Inventory</th>
                                    <th>Trend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Downtown</td>
                                    <td>$3,842</td>
                                    <td>842/900</td>
                                    <td><i class="fas fa-arrow-up" style="color: var(--accent);"></i> 12%</td>
                                </tr>
                                <tr>
                                    <td>Westside Mall</td>
                                    <td>$2,956</td>
                                    <td>756/800</td>
                                    <td><i class="fas fa-arrow-up" style="color: var(--accent);"></i> 5%</td>
                                </tr>
                                <tr>
                                    <td>Airport</td>
                                    <td>$1,873</td>
                                    <td>523/600</td>
                                    <td><i class="fas fa-arrow-down" style="color: var(--danger);"></i> 3%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Scanner Demo Section -->
    <section class="features">
        <div class="container">
            <div class="section-title">
                <h2>Barcode & RFID Scanning Demo</h2>
                <p>Experience how automated scanning technology updates inventory in real-time</p>
            </div>
            
            <div class="scanner-section">
                <div class="scanner-container">
                    <div class="scanner-preview">
                        <div style="color: white; text-align: center; padding-top: 80px;">
                            <i class="fas fa-camera" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                            <p>Scanner Preview</p>
                            <p class="scan-status" style="color: var(--accent); margin-top: 1rem;">Ready to scan</p>
                        </div>
                    </div>
                    
                    <div class="scanner-controls">
                        <h3>Scanning Controls</h3>
                        <div class="scanner-buttons">
                            <div class="scanner-btn" onclick="simulateBarcodeScan()">
                                <i class="fas fa-barcode"></i>
                                <span>Scan Barcode</span>
                            </div>
                            <div class="scanner-btn" onclick="simulateRfidScan()">
                                <i class="fas fa-wifi"></i>
                                <span>Scan RFID</span>
                            </div>
                        </div>
                        
                        <div class="scanner-input">
                            <input type="text" id="manual-scan-input" placeholder="Enter product SKU manually">
                            <button class="btn btn-primary" onclick="manualScan()">Update</button>
                        </div>
                        
                        <div class="scan-history">
                            <h4>Recent Scans</h4>
                            <div id="scan-history-container">
                                <!-- Scan history will be added here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Dashboard Demo -->
    <section class="features">
        <div class="container">
            <div class="section-title">
                <h2>Live Inventory Dashboard</h2>
                <p>Monitor your inventory in real-time with our intuitive dashboard</p>
            </div>
            
            <div class="dashboard">
                <div class="dashboard-header">
                    <h2>Inventory Overview</h2>
                    <div class="filters">
                        <select id="store-select">
                            <option value="all">All Stores</option>
                            <option value="downtown">Downtown Store</option>
                            <option value="westside">Westside Mall</option>
                            <option value="airport">Airport Terminal</option>
                        </select>
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>1,248</h3>
                        <p>Total Products</p>
                    </div>
                    <div class="stat-card">
                        <h3>$86,542</h3>
                        <p>Inventory Value</p>
                    </div>
                    <div class="stat-card">
                        <h3>42</h3>
                        <p>Low Stock Items</p>
                    </div>
                    <div class="stat-card">
                        <h3>98.3%</h3>
                        <p>Inventory Accuracy</p>
                    </div>
                </div>
                
                <table class="inventory-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>SKU</th>
                            <th>Category</th>
                            <th>Current Stock</th>
                            <th>Reorder Level</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wireless Headphones</td>
                            <td>WH-2023</td>
                            <td>Electronics</td>
                            <td class="stock-low">12</td>
                            <td>20</td>
                            <td><span class="alert-badge alert-low">Low Stock</span></td>
                        </tr>
                        <tr>
                            <td>Bluetooth Speaker</td>
                            <td>BS-4567</td>
                            <td>Electronics</td>
                            <td class="stock-ok">45</td>
                            <td>15</td>
                            <td><span class="alert-badge" style="background-color:#dcfce7; color:#16a34a;">In Stock</span></td>
                        </tr>
                        <tr>
                            <td>Cotton T-Shirt</td>
                            <td>CT-7890</td>
                            <td>Clothing</td>
                            <td class="stock-low">8</td>
                            <td>25</td>
                            <td><span class="alert-badge alert-low">Low Stock</span></td>
                        </tr>
                        <tr>
                            <td>Gardening Tools Set</td>
                            <td>GT-3345</td>
                            <td>Home & Garden</td>
                            <td class="stock-ok">32</td>
                            <td>10</td>
                            <td><span class="alert-badge" style="background-color:#dcfce7; color:#16a34a;">In Stock</span></td>
                        </tr>
                        <tr>
                            <td>Stainless Steel Water Bottle</td>
                            <td>WB-9012</td>
                            <td>Kitchen</td>
                            <td class="stock-low">5</td>
                            <td>15</td>
                            <td><span class="alert-badge alert-low">Low Stock</span></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="text-align: center;">
                    <a href="#" class="btn btn-primary">View Full Inventory Report</a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>Ready to Transform Your Inventory Management?</h2>
            <p>Join thousands of businesses that have streamlined their inventory processes with StockMaster Pro</p>
            <div class="cta-slogan">Automate. Track. Thrive.</div>
            <a href="#" class="btn btn-outline">Get Started Now</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>StockMaster</h3>
                    <p>Advanced inventory management solution for businesses of all sizes.</p>
                    <p style="margin-top: 10px; font-weight: 600;">Automate. Track. Thrive.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Integrations</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul class="footer-links">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">API Reference</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-envelope"></i> info@stockmaster.com</li>
                        <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
                        <li><i class="fas fa-map-marker-alt"></i> 123 Business Ave, Suite 100</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 StockMaster. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Product database
        const products = [
            { name: "Wireless Headphones", sku: "WH-2023", category: "Electronics", stock: 12, reorder: 20 },
            { name: "Bluetooth Speaker", sku: "BS-4567", category: "Electronics", stock: 45, reorder: 15 },
            { name: "Cotton T-Shirt", sku: "CT-7890", category: "Clothing", stock: 8, reorder: 25 },
            { name: "Gardening Tools Set", sku: "GT-3345", category: "Home & Garden", stock: 32, reorder: 10 },
            { name: "Stainless Steel Water Bottle", sku: "WB-9012", category: "Kitchen", stock: 5, reorder: 15 }
        ];

        // Scanner functions
        function simulateBarcodeScan() {
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            updateInventory(randomProduct.sku, 1, "Barcode Scan");
            
            // Visual feedback
            document.querySelector('.scan-status').textContent = `Scanned: ${randomProduct.name}`;
            document.querySelector('.scan-status').style.color = '#22c55e';
            setTimeout(() => {
                document.querySelector('.scan-status').textContent = 'Ready to scan';
                document.querySelector('.scan-status').style.color = '#22c55e';
            }, 2000);
        }

        function simulateRfidScan() {
            // Simulate RFID scanning multiple items at once
            const count = Math.floor(Math.random() * 3) + 2; // 2-4 items
            let scannedItems = 0;
            
            document.querySelector('.scan-status').textContent = 'RFID Scanning...';
            document.querySelector('.scan-status').style.color = '#f59e0b';
            
            const scanInterval = setInterval(() => {
                if (scannedItems < count) {
                    const randomProduct = products[Math.floor(Math.random() * products.length)];
                    updateInventory(randomProduct.sku, 1, "RFID Scan");
                    scannedItems++;
                } else {
                    clearInterval(scanInterval);
                    document.querySelector('.scan-status').textContent = `RFID Scan Complete: ${count} items`;
                    setTimeout(() => {
                        document.querySelector('.scan-status').textContent = 'Ready to scan';
                        document.querySelector('.scan-status').style.color = '#22c55e';
                    }, 2000);
                }
            }, 800);
        }

        function manualScan() {
            const sku = document.getElementById('manual-scan-input').value;
            if (sku) {
                const product = products.find(p => p.sku === sku);
                if (product) {
                    updateInventory(sku, 1, "Manual Entry");
                    document.getElementById('manual-scan-input').value = '';
                    
                    // Visual feedback
                    document.querySelector('.scan-status').textContent = `Updated: ${product.name}`;
                    document.querySelector('.scan-status').style.color = '#22c55e';
                    setTimeout(() => {
                        document.querySelector('.scan-status').textContent = 'Ready to scan';
                        document.querySelector('.scan-status').style.color = '#22c55e';
                    }, 2000);
                } else {
                    document.querySelector('.scan-status').textContent = 'Product not found';
                    document.querySelector('.scan-status').style.color = '#ef4444';
                    setTimeout(() => {
                        document.querySelector('.scan-status').textContent = 'Ready to scan';
                        document.querySelector('.scan-status').style.color = '#22c55e';
                    }, 2000);
                }
            }
        }

        function updateInventory(sku, quantity, method) {
            // Find the product in our database
            const product = products.find(p => p.sku === sku);
            if (product) {
                // Update stock
                product.stock += quantity;
                
                // Update the UI
                const rows = document.querySelectorAll('.inventory-table tbody tr');
                for (let row of rows) {
                    if (row.cells[1].textContent === sku) {
                        // Update stock cell
                        const stockCell = row.cells[3];
                        stockCell.textContent = product.stock;
                        
                        // Update status
                        const statusCell = row.cells[5];
                        if (product.stock <= product.reorder) {
                            stockCell.className = 'stock-low';
                            statusCell.innerHTML = '<span class="alert-badge alert-low">Low Stock</span>';
                        } else {
                            stockCell.className = 'stock-ok';
                            statusCell.innerHTML = '<span class="alert-badge" style="background-color:#dcfce7; color:#16a34a;">In Stock</span>';
                        }
                        
                        break;
                    }
                }
                
                // Add to scan history
                addScanHistory(product.name, method);
                
                // Update low stock count
                updateLowStockCount();
            }
        }

        function addScanHistory(productName, method) {
            const historyContainer = document.getElementById('scan-history-container');
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            
            const scanItem = document.createElement('div');
            scanItem.className = 'scan-item';
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
            const lowStockCount = products.filter(p => p.stock <= p.reorder).length;
            document.querySelector('.stat-card:nth-child(3) h3').textContent = lowStockCount;
        }

        // Simple inventory update simulation
        function updateStockLevels() {
            const stockElements = document.querySelectorAll('.stock-low, .stock-ok');
            
            stockElements.forEach(el => {
                // Randomly fluctuate stock levels for demo purposes
                const currentStock = parseInt(el.textContent);
                const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
                let newStock = currentStock + change;
                
                // Ensure stock doesn't go negative
                if (newStock < 0) newStock = 0;
                
                // Update display
                el.textContent = newStock;
                
                // Update status
                const row = el.closest('tr');
                const sku = row.cells[1].textContent;
                const product = products.find(p => p.sku === sku);
                
                if (product) {
                    product.stock = newStock;
                    
                    if (newStock <= product.reorder) {
                        el.className = 'stock-low';
                        row.cells[5].innerHTML = '<span class="alert-badge alert-low">Low Stock</span>';
                    } else {
                        el.className = 'stock-ok';
                        row.cells[5].innerHTML = '<span class="alert-badge" style="background-color:#dcfce7; color:#16a34a;">In Stock</span>';
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
        window.onload = function() {
            initScanHistory();
            // Update stock levels every 10 seconds to simulate real-time changes
            setInterval(updateStockLevels, 10000);
        };
    </script>
</body>
</html>
Key Features of the Multi-Store Section
Centralized Store Management: Visual interface showing all retail locations with their current status and key metrics

Store Performance Dashboard: Comparison table displaying sales, inventory levels, and performance trends across different locations

Interactive Map Visualization: Animated map showing store locations with pulsing indicators for visual appeal

Real-time Status Updates: Each store displays current status (open/closed), product count, and daily sales

Location Filtering: Added a store selection dropdown to the inventory dashboard to filter by specific locations

Performance Analytics: Side-by-side comparison of key metrics across different store locations

This multi-store management system enables businesses to:

Monitor inventory levels across all locations from a single dashboard

Identify high-performing and underperforming stores

Transfer inventory between locations based on demand patterns

Set location-specific reorder points and alerts

Generate consolidated reports for the entire business
The implementation demonstrates how StockMaster Pro can scale from a single store to a multi-location retail operation while maintaining centralized control and visibility.


