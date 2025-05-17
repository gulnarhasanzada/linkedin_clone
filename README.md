## 🔗 LinkedIn Clone — Microservices Edition

A full-stack, scalable LinkedIn-style application built with modern web technologies using microservices architecture. This project is designed to simulate a real-world enterprise-grade system, providing features like user authentication, posting, job applications, chat, and more.

---

### 🚀 Features

* 🔐 **User Authentication** (Passport.js, JWT)
* 👤 **User Profiles**
* 📝 **Posts & Feeds**
* 💬 **Real-time Chat**
* 💼 **Job Listings & Applications**
* 📮 **Notifications**
* 🌐 **Next.js Frontend** with React and Tailwind CSS
* 🐳 **Fully containerized** using Docker and Docker Compose
* 🔸 **Microservices architecture** for scalability and modularity

---

### 🛠️ Tech Stack

| Layer                | Technologies                                           |
| -------------------- | ------------------------------------------------------ |
| Frontend             | Next.js (React), Tailwind CSS, Axios                   |
| Backend (API)        | Node.js, Express, Passport.js                          |
| Database             | MongoDB (each service uses its own DB)                 |
| Real-time            | WebSockets (Chat service)                              |
| Messaging (optional) | RabbitMQ or Kafka (future improvement)                 |
| Auth                 | Passport (local + JWT strategies)                      |
| Containerization     | Docker, Docker Compose                                 |
| Dev Tools            | ESLint, Prettier, Nodemon                              |
| Security             | Environment variable management, secure Docker configs |

---

### 📦 Microservices Overview

* `auth-service/` — Handles login, registration, JWT authentication
* `profile-service/` — User profile management
* `post-service/` — Posts, likes, and comments
* `chat-service/` — Real-time messaging with WebSockets
* `job-service/` — Job listings and applications

All services are located inside the `services/` folder.

---

### 🔐 Container Security Practices

* Uses minimal base images (e.g., `node:18-alpine`)
* Avoids running containers as root
* `.env` files excluded from version control
* Services are isolated on internal Docker networks
* Ports and volume names are scoped per service

---

### ⚙️ Getting Started

#### Prerequisites

* Docker
* Docker Compose
* Node.js (optional if not using Docker for dev)

#### 🔪 Clone & Run

```bash
git clone https://github.com/gulnarhasanzada/linkedin-clone.git
cd linkedin-clone
docker-compose up --build
```



