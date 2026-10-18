# 🌻 Sunflower Bloom – Premium Floral Boutique & Online Booking Website

A full-stack, nature-inspired e-commerce and floral booking website built for an Indian flower boutique. Features an SVG/CSS animated sunflower garden, interactive custom bouquet builder, real-time flower booking and tracking workflow, Razorpay/UPI test payment integration, and a protected florist administration dashboard.

---

## ✨ Features Overview

### 1. 🌻 Interactive Animated Sunflower Hero
- **Botanical Growth Sequence**: Watch a sunflower seed sprout, extend its emerald stem with gradual leaves, and unfold golden petals one by one.
- **Gentle Breeze Sway & Pollen Drift**: Organic swaying animations and golden pollen particles floating across a warm sunrise gradient.
- **Desktop Cursor Parallax**: Interactive mouse-tracking where sunflowers gently tilt towards your cursor.
- **Reduced Motion Support**: Accessible toggle button instantly switches animations to static presentation for users who prefer fewer animations.

### 2. 💐 Complete Product Catalog & Real-time Filters
- Product cards for:
  - **Single Sunflower** (₹249)
  - **Sunflower Bouquet** (₹899)
  - **Premium Sunflower Bouquet** (₹1,699)
  - **Roses Bouquet** (₹1,199)
  - **Tulip Bouquet** (₹1,399)
  - **Mixed Flower Bouquet** (₹1,249)
  - **Birthday Flower Box** (₹1,799)
  - **Anniversary Special Bouquet** (₹1,899)
  - **Custom Flower Arrangement** (₹1,499)
  - **Seasonal Flower Collection** (₹1,349)
- Real-time search, sorting (Price, Rating, Featured), and filters for flower type, occasion, and budget.
- Product detail modals with botanical care tips and image galleries.

### 3. 🎨 Interactive Custom Bouquet Studio
- Choose your stems: Sunflowers, Red Roses, Pastel Tulips, White Lilies, Baby's Breath, and Eucalyptus.
- Live stem counter with real-time bouquet visual cluster rendering.
- Select artisanal wrapping paper (Kraft Paper, French Linen, Midnight Elegance, Blush Rose, Golden Sunshine) and satin ribbons.
- Live price calculation in Indian Rupees (₹) updating dynamically as stems are added.

### 4. 📦 Complete Flower Booking & Delivery System
- Step-by-step booking workflow with calendar date picker and time slots:
  - Morning (8:00 AM - 11:00 AM)
  - Afternoon (12:00 PM - 3:00 PM)
  - Evening (4:00 PM - 7:00 PM)
  - Midnight Surprise (11:00 PM - 12:00 AM)
- Recipient details, delivery address validation, and occasion tags.
- Complimentary gold-foiled greeting card with handwritten note copy.
- Boutique add-ons: Luxury Gift Wrapping (+₹79), Ceramic Glass Vase (+₹249), Belgian Chocolates (+₹199), Fairy Lights (+₹99).
- Unique Booking ID generation (e.g. `SB-2026-SUN901`).
- Confetti celebration modal with printable order receipt.

### 5. 🔍 Real-Time Order Tracking & Customer History
- Public tracking page where any recipient or sender can enter their Booking ID to view real-time status:
  - `Confirmed` ➔ `Preparing in Studio` ➔ `Out for Delivery` ➔ `Delivered` (or `Cancelled`).
- Customer order history with cancellation and refund initiation support.

### 6. 🛡️ Protected Florist Admin Dashboard
- Metrics: Total orders, revenue in ₹, pending deliveries, active inventory.
- Order fulfillment table: Advance order statuses and add internal florist delivery notes.
- Product inventory management: Add new bouquet SKUs, edit prices/stock, and delete items.
- Coupon management: Create promo discount codes and adjust minimum order thresholds.

### 7. 💳 Indian Payment Integration Layer
- Supports Razorpay in Test Mode, UPI / GPay, Cards, Net Banking, and Cash on Delivery (COD).
- Backend HMAC SHA256 cryptographic signature verification.
- Clearly labeled demo mode for instant testing without external gateway keys.

---

## 🏗️ Project Architecture & Tech Stack

```
create/
├── backend/                  # Python FastAPI Backend
│   ├── app/
│   │   ├── config.py         # Environment & JWT Configuration
│   │   ├── database.py       # SQLAlchemy Session & Base
│   │   ├── seed_data.py      # Database Seeder (Products, Coupons, Admin)
│   │   ├── main.py           # FastAPI Application Entrypoint
│   │   ├── models/           # User, Product, Category, Booking, Coupon
│   │   ├── schemas/          # Pydantic V2 Request & Response Models
│   │   ├── routers/          # REST Endpoints (Products, Bookings, Auth, Admin, Payments)
│   │   └── services/         # PBKDF2 Auth & HMAC Payment Services
│   ├── tests/
│   │   └── test_api.py       # Automated Pytest Suite (10/10 Passed)
│   ├── requirements.txt      # Python Dependencies
│   └── run.py                # Backend Runner Script
│
├── frontend/                 # React 18 + Vite + TypeScript Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── hero/         # AnimatedSunflowerHero, SunflowerGardenSVG, SunRaysPollen
│   │   │   ├── layout/       # Navbar, Footer, CartDrawer
│   │   │   ├── products/     # ProductCatalog, ProductCard, ProductDetailModal
│   │   │   ├── booking/      # BookingModal, BookingSuccessModal
│   │   │   ├── custom-bouquet/ # CustomBouquetBuilder
│   │   │   ├── cart/         # CheckoutModal
│   │   │   └── auth/         # LoginModal (with 1-click Demo Fill)
│   │   ├── pages/            # MyBookingsPage, AboutUsPage, ContactPage, PoliciesPage, AdminPage
│   │   ├── context/          # AuthContext, CartContext (localStorage persisted)
│   │   ├── services/         # api.ts (HTTP Client)
│   │   └── types/            # TypeScript Interfaces
│   ├── package.json
│   ├── tailwind.config.js    # Custom Sunflower Color Palette & Keyframe Animations
│   └── vite.config.ts        # Vite Server with /api Proxy
│
├── .env.example              # Environment Configuration Template
└── README.md
```

---

## 🚀 Quick Startup Guide (Windows PowerShell)

### Prerequisites
- **Python 3.10+** (Tested on Python 3.13)
- **Node.js v18+** & **npm** (Tested on Node.js v22.13)

---

### Step 1: Run the Backend Server

Open a Windows PowerShell terminal:

```powershell
# Navigate to backend directory
cd c:\Users\gunjan\OneDrive\Desktop\create\backend

# (Optional) Verify dependencies
python -m pip install -r requirements.txt

# Start the FastAPI server
python run.py
```

The backend starts at `http://127.0.0.1:8000`.
- **Swagger Interactive API Documentation**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **API Health Check**: [http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)

*(The database tables and demo floral catalog auto-seed on the very first startup!)*

---

### Step 2: Run the Frontend Application

Open a second Windows PowerShell terminal:

```powershell
# Navigate to frontend directory
cd c:\Users\gunjan\OneDrive\Desktop\create\frontend

# Start Vite Development Server
npm.cmd run dev
```

Open your browser to: **[http://localhost:5173](http://localhost:5173)**

---

## 🔑 Demo Accounts & Sample Data

For instant convenience, the login modal has **One-Click Demo Fill** buttons:

### 1. Shop Owner / Florist Administrator:
- **Email**: `admin@sunflowerbloom.com`
- **Password**: `SunflowerAdmin@2026`
- **Role**: Access to operations metrics, order fulfillment statuses, inventory editor, and coupon generator.

### 2. Verified Customer Account:
- **Email**: `priya.sharma@example.com`
- **Password**: `Customer@123`
- **Role**: Customer profile with pre-populated order history.

---

## 🎟️ Active Promo Coupon Codes

| Coupon Code | Discount | Minimum Order | Usage |
| :--- | :--- | :--- | :--- |
| **`SUNSHINE10`** | **10% Off** (up to ₹500) | ₹499 | General Sunflower Lover Discount |
| **`BLOOM50`** | **₹50 Flat Off** | ₹399 | First-Time Flower Booking |
| **`WELCOME20`** | **20% Off** (up to ₹600) | ₹999 | Festive Bouquet Celebration |
| **`GOLDENFLOWER`**| **15% Off** (up to ₹800) | ₹1,299 | Wedding & Anniversary Orders |

---

## 🧪 Automated Testing

Automated end-to-end tests verify endpoints, authorization, pricing, and signature logic:

```powershell
cd c:\Users\gunjan\OneDrive\Desktop\create\backend
python -m pytest tests/test_api.py -v
```

### Verified Test Results:
```
tests/test_api.py::test_health_check PASSED                              [ 10%]
tests/test_api.py::test_get_products PASSED                              [ 20%]
tests/test_api.py::test_product_filtering PASSED                         [ 30%]
tests/test_api.py::test_product_detail_by_slug PASSED                    [ 40%]
tests/test_api.py::test_user_registration_and_login PASSED               [ 50%]
tests/test_api.py::test_admin_authentication PASSED                      [ 60%]
tests/test_api.py::test_coupon_validation PASSED                         [ 70%]
tests/test_api.py::test_create_and_track_booking PASSED                  [ 80%]
tests/test_api.py::test_payment_verification PASSED                      [ 90%]
tests/test_api.py::test_admin_dashboard_and_product_management PASSED    [100%]

======================= 10 passed in 1.85s =======================
```

---

## 📦 Production Deployment

### Production Frontend Build
```powershell
cd c:\Users\gunjan\OneDrive\Desktop\create\frontend
npm.cmd run build
```
Creates an optimized static bundle in `frontend/dist/` ready to host on Vercel, Netlify, or Nginx.

### Production Backend with Gunicorn / Uvicorn
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

For PostgreSQL, set `DATABASE_URL=postgresql://user:password@localhost:5432/sunflower_db` in `.env`.

---

© 2026 Sunflower Bloom Florist India Pvt. Ltd. Crafted with passion, nature, and code. 🌻
