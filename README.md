# 🏠 Housify  

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)  
[![Sass](https://img.shields.io/badge/Style-Sass-cc6699?logo=sass)](https://sass-lang.com/)  
[![Node.js](https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Backend-Express.js-lightgrey?logo=express)](https://expressjs.com/)  
[![Prisma](https://img.shields.io/badge/Database-Prisma-2D3748?logo=prisma)](https://www.prisma.io/)  
[![Leaflet](https://img.shields.io/badge/Maps-Leaflet-199900?logo=leaflet)](https://leafletjs.com/)  

---

Housify is a web app that helps people **find houses to rent or buy**.  
Property owners can create accounts and list properties, while users can search by location, price, and category (rent/buy) and view results on an interactive map.  

---

## 🚀 Tech Stack  
- **Frontend:** React, Sass  
- **Backend:** Node.js, Express.js  
- **Database:** Prisma  
- **Maps:** Leaflet.js  

---

## ✨ Features  
- 🔑 User authentication  
- 🏠 Rent or Buy categories  
- 📍 Search by location & price range  
- 🗺️ Interactive map view with Leaflet.js  
- 📝 Property management for owners  

---

## 📸 Preview  

### 🔹 Homepage  
![Homepage Screenshot](./Screenshots/Screenshot 2025-08-23 153400.png)  

### 🔹 Property Listings  
![Property Listings Screenshot](./Screenshots/Screenshot 2025-08-23 153500.png)  

### 🔹 Map View  
![Map View Screenshot](./Screenshots/Screenshot 2025-08-23 153529.png)  


---

## ⚡ Getting Started  

```bash
# Clone repo
git clone https://github.com/your-username/housify.git

# Install dependencies
npm install

# Setup .env file
DATABASE_URL=your_prisma_db_url
JWT_SECRET=your_secret

# Run migrations
npx prisma migrate dev --name init

# Start dev server
npm run dev
