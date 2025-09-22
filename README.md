# SweetShop Backend & Frontend
**Deployed Link:** [Visit SweetShop] https://sweetshop-five.vercel.app/ (frontend deployed in vercel)
                   Backend: https://sweetshop-backend-2-gm50.onrender.com
SweetShop is a full-stack application for managing and ordering sweets. The backend handles user authentication, sweet management, and image uploads, while the frontend provides an intuitive interface for customers and admins.

---

## Features

* User authentication using JWT and cookies
* Sweet management (CRUD operations)
* Image upload for sweets using Multer + Cloudinary
* Session management with cookies
* Admin and user roles
* CORS enabled for frontend communication
* Responsive frontend design
* Search and filter sweets on the frontend

---

## Technologies

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (JSON Web Tokens)
* Argon2 (password hashing)
* Multer + Cloudinary (image uploads)
* CORS & Cookie-parser

**Frontend**

* React.js with Vite
* React Router DOM
* Context API for state management
* CSS modules for styling

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd sweetshop
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

4. Create `.env` files:

**Backend `.env`**

```
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
FRONTEND_URL=http://localhost:5173
COOKIE_SECURE=false
```

**Frontend `.env`**

```
VITE_API_BASE_URL=http://localhost:5000
```

5. Run backend:

```bash
cd backend
npm run dev
```

6. Run frontend:

```bash
cd frontend
npm run dev
```

---

## API Endpoints (Backend)

**Auth**

* `POST /login/login` – Login user
* `POST /auth/register` – Register user
* `POST /auth/logout` – Logout user

**Sweets**

* `POST /sweets` – Create new sweet
* `GET /sweets` – Fetch all sweets
* `GET /sweets/:id` – Fetch sweet by ID
* `PUT /sweets/:id` – Update sweet
* `DELETE /sweets/:id` – Delete sweet

---

## Frontend Pages

* **HomePage** – Shows sweets, search bar, navigation
* **LoginPage** – Login form for users/admins
* **RegisterPage** – Sign-up form
* **Sweet Management** – Admin CRUD interface for sweets

---

## My AI Usage

I used **ChatGPT (OpenAI)** extensively during the development of SweetShop. Here’s a breakdown of how it helped me:

* **Backend Design & Implementation**: I used ChatGPT to help me structure my Express routes, services, and repositories. For example, I asked it to generate the CRUD operations for sweets with proper error handling.
* **Authentication Flow**: ChatGPT helped me implement JWT-based authentication with cookies and secure headers. It also suggested proper handling of admin vs user roles.
* **Frontend Integration**: I used ChatGPT to write the React components for login, registration, and home page, including handling API calls and context-based state management.
* **UI/UX & Styling**: I asked ChatGPT to create CSS for the homepage and make the design responsive while keeping the layout clean and modern.
* **Debugging & Problem Solving**: Whenever I faced errors like “Failed to fetch” or CORS issues, I discussed them with ChatGPT, which suggested troubleshooting steps and correct configurations.

**Reflection**:
Using ChatGPT significantly accelerated my development process. It helped me generate boilerplate code, gave me ideas for clean architecture, and provided debugging guidance. While I wrote most of the logic myself, ChatGPT served as a mentor and pair-programmer, making the workflow smoother and less error-prone.

---

## Notes

* The project uses environment variables for security and configuration. Make sure to set them correctly.
* Admin users can manage sweets, while regular users can only view and buy.
* Images are uploaded to Cloudinary for persistence.
