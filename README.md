# Full Stack Todo Application

A modern Full Stack Todo Application built using React.js, Node.js, Express.js, and MySQL. This application allows users to create, update, delete, and manage tasks efficiently through a responsive and user-friendly interface.

## 🚀 Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Responsive UI
* RESTful API integration
* MySQL database connectivity
* Error handling and validation
* Cross-Origin Resource Sharing (CORS) support

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MySQL

## 📂 Project Structure

```
project-root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── db/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_db
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🗄️ Database Setup

Create a MySQL database:

```sql
CREATE DATABASE todo_db;
```

Create table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);
```

## 🔗 API Endpoints

### Get All Records

```http
GET /api/users
```

### Create Record

```http
POST /api/users
```

### Update Record

```http
PUT /api/users/:id
```

### Delete Record

```http
DELETE /api/users/:id
```

## 🌐 Deployment

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway

### Database

* Railway MySQL
* PlanetScale
* MySQL Server

## 📸 Screenshots

Add project screenshots here.

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit pull requests.

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Mohd Muqeem Alam**

* GitHub: https://github.com/mohdmuqeemalam01
* Email: momuqeem
