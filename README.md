# ChatSphere: Real-Time Chat Application

A full-stack real-time messaging app. The React interface updates instantly through Socket.io WebSockets, with private chats, group chats, and live online/offline status.


## Features

- **Private messaging** and **group chats**
- **Instant delivery:** messages arrive without a page refresh through Socket.io events
- **Online/offline presence** for every user
- **Persistent history:** messages stored in MongoDB
- **Media sharing:** send images and use an emoji picker
- **Voice-call integration**
- **Secure auth:** JWT authentication
- **Connection tracking:** the Node.js backend keeps concurrent socket connections in an in-memory Map

## Tech Stack

**Frontend:** React.js
**Backend:** Node.js, Express.js
**Real-time:** Socket.io (WebSockets)
**Database:** MongoDB
**Auth:** JWT

## Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB database (local or MongoDB Atlas)

### 1. Clone
```bash
git clone https://github.com/suryakala1508/ChatSphere.git
cd ChatSphere
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

- Designed the Socket.io event flow so messages, typing and presence updates reach the right users in real time
- Tracked which users are online by mapping user IDs to active socket connections on the server
- Kept chat history in MongoDB so conversations survive refreshes and reconnects

## Author

**Suryakala Beesetti**: [LinkedIn](https://www.linkedin.com/in/suryakala-beesetti-a4844434a/) · [GitHub](https://github.com/suryakala1508) · beesettisuryakala@gmail.com
