# 🍽️ Hunger Hero

**Hunger Hero** is a full-stack MERN application built to help reduce food waste and serve the community. Users can donate food, request food, and manage their contributions, all while ensuring secure access through authentication and JWT protection.

## 🚀 Live Website

🌐 [Live Site](https://hungerhero-ca978.web.app)  
🔗 [Server Repo](https://github.com/Sayed161/Assignment-11-Client-Side)  
🔗 [Client Repo](https://github.com/Sayed161/Assignment-11-ServerSide)

---

## 🛠️ Tech Stack

**Client Side:**
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- SweetAlert2 / Toast
- Firebase Auth (Email/Password, Google login)
- TanStack React Query
- JWT for private routes

**Server Side:**
- Node.js
- Express.js
- MongoDB Atlas
- CORS
- JSON Web Token (JWT)
- dotenv

---

## 📚 Features

### ✅ Public Features:
- 🔎 View **Available Foods**
- 🔍 **Search** food by name
- 🔄 **Sort** foods by expiration date
- 👁️ View detailed food information
- 🔐 Redirect to login if unauthenticated

### ✅ Authentication
- 📧 Register with name, email, photoURL, password
- 🔐 Login with email/password
- ☁️ Google login
- 🚫 Form validation on register:
  - 1 uppercase
  - 1 lowercase
  - Minimum 6 characters
- ✅ SweetAlert feedback on success/failure
- 🔐 JWT token generated and stored locally

### ✅ Private Routes
Only accessible when logged in:
- ➕ **Add Food**
- ⚙️ **Manage My Foods**
- 🧾 **My Food Requests**

### ✅ Add Food
- Name, image, quantity, pickup location, expiry, notes
- Auto-fill user (donor) info
- Default food status: `available`

### ✅ Manage My Foods
- View all your added foods
- 📝 Update food details (modal or route)
- ❌ Delete with confirmation prompt

### ✅ Available Foods
- 🃏 Show only foods with status = `available`
- 🧮 Sort by Expiration Date
- 🎛️ Toggle layout (3-column ↔ 2-column)

### ✅ Food Request System
- Request food via a modal form
- Auto-fill food/user/donor info
- Changes status to `requested`
- Adds to `My Food Requests`

### ✅ My Food Requests
- Card view of all requested foods by the user
- Includes donor name, pickup location, expiry, request date, etc.

---

## 🔐 JWT & Security
- Token generated after successful login/register
- Token stored on client
- Token sent in headers with protected API calls
- Private routes are guarded with token validation


