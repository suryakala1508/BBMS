# BBMS: Blood Bank Management System

A MERN-stack web app for managing blood donors and live blood inventory, with separate role-based access for donors and admins.

**Live Demo:** [https://astonishing-treacle-d02935.netlify.app/](https://astonishing-treacle-d02935.netlify.app/)


## Features

- **Role-based access control:** separate experiences for donors and admins
- **Donor management:** handles 500+ donor records
- **Real-time inventory:** blood stock tracking powered by MongoDB aggregation pipelines
- **Secure auth:** JWT authentication
- **REST API:** clean, structured endpoints consumed by the React frontend
- **Faster loading:** client-side caching and optimized React rendering (about 35% faster page load)

## Tech Stack

**Frontend:** React.js
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose)
**Auth:** JWT, role-based access control
**Hosting:** Netlify (frontend)

## Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB database (local or MongoDB Atlas)

### 1. Clone
```bash
git clone https://github.com/suryakala1508/BBMS.git
cd BBMS
```

### 2. Backend
```bash
cd backend            # adjust to your folder name
npm install
cp .env.example .env            # then fill in your values
npm start
```

### 3. Frontend
```bash
cd frontend           # adjust to your folder name
npm install
npm start
```


## What I Built / Challenges

- Designed role-based routes so donors and admins only see and change what they should
- Used MongoDB aggregation pipelines to compute inventory totals instead of calculating them on the client
- Reduced load time by caching repeated API responses on the client

## Author

**Suryakala Beesetti**: [LinkedIn](https://www.linkedin.com/in/suryakala-beesetti-a4844434a/) · [GitHub](https://github.com/suryakala1508) · beesettisuryakala@gmail.com
