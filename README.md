# React Dashboard Interactive
View live at: https://thanthanhthuan.github.io/react_glass_dashboard/

Click Billing Admin to add/ edit/ delete billing records

See live Billing History at Settings -> Billing

<img width="1447" height="1001" alt="image" src="https://github.com/user-attachments/assets/8683a393-d855-4134-92ee-2518cec5ce47" />

**1. Project Overview**

This is a modern, responsive single-page application (SPA) built with React + Vite. It features a distinct 3D Glassmorphism design aesthetic (translucent cards, blurred backgrounds, floating orbs).
The template is from: https://templatemo.com/tm-607-glass-admin
The project serves as an admin dashboard that visualizes data (Charts, Stats) and manages records (Billing) through a connection to a NoCodeBackend API.

**2. Tech Stack**
   
Frontend Framework: React 18
Build Tool: Vite
Routing: React Router DOM (v6)
Styling: Custom CSS with CSS Variables (Theming), Glassmorphism effects.
State Management: React Context (Theme), Local State (useState, useEffect).
Backend: NoCodeBackend.com (REST API).

**3. Architecture & Folder Structure**

src/
├── assets/
│   └── css/           # Main stylesheet (glass-style.css)
├── components/
│   ├── Background.jsx # Animated background orbs
│   ├── GlassCard.jsx  # Reusable card wrapper with 3D tilt effect
│   ├── Navbar.jsx     # Top navigation
│   ├── Sidebar.jsx    # Side navigation with active state logic
│   └── ThemeToggle.jsx# Dark/Light mode switcher
├── context/
│   └── ThemeContext.jsx # Global theme state provider
├── layouts/
│   ├── MainLayout.jsx # Layout for internal app pages
│   └── AuthLayout.jsx # Layout for Login/Register pages
├── pages/
│   ├── Admin.jsx      # CRUD interface for database records
│   ├── Analytics.jsx  # Stats visualization (mapped from mock data)
│   ├── Dashboard.jsx  # Main overview (mapped from mock data)
│   ├── Settings.jsx   # Tabbed settings + Hybrid Billing History
│   └── Users.jsx      # User management view
├── services/
│   ├── api.js         # Centralized API service (GET, POST, PUT, DELETE)
│   └── mockData.jsx   # Static data for charts/graphs to keep views clean
├── App.jsx            # Route definitions
└── main.jsx           # Entry point

**4. Key Features & Functionality**
   
A. Data Management (Service Layer)

We separated data logic from UI logic to make the code clean and maintainable.
services/mockData.jsx: Contains static arrays for Dashboard stats, Charts, and User lists. This allows views to render using .map() loops instead of hardcoded HTML.
services/api.js: A centralized service object (billingService) that handles all fetch calls to NoCodeBackend. It manages headers, authentication tokens, and error handling.

B. Admin Panel (CRUD)

A fully functional interface to manage the Billing Database.
Create: Add new billing records (Date, Description, Amount, Status).
Read: Fetches live data from the API, sorted by date (newest first).
Update: Edit existing records with form pre-filling.
Delete: Remove records from the database.

C. Settings Page

Demonstrates advanced state management.
Tab System: Switch between Profile, Security, Notifications, etc.
Hybrid Data: The Billing History tab combines static mock data (historical) with live data fetched from the API, sorting them together by date.

D. Visuals & UX

3D Tilt: Cards respond to mouse movement with a 3D perspective effect.
Theming: Global Dark/Light mode toggle persisted in LocalStorage.
Responsiveness: Sidebar collapses on mobile; grids adjust columns automatically.

**5. Environment Configuration**

The project uses .env.local to secure API credentials (git-ignored).
VITE_TABLE_NAME=seitb
VITE_INSTANCE_ID=55370_my_db
VITE_API_TOKEN=xxxxxxxx

**6. How Data Flows**
   
Read: Admin.jsx calls billingService.getAll(). The service hits the /read endpoint with sub_table=billing.
Write: Submitting the form calls billingService.create() or billingService.update().
Reflect: On success, the local state is updated (optimistically or via re-fetch) to show changes immediately without a page reload.
