# Job Application Tracker

A full-stack MERN application that helps users manage their job applications in one place.

Users can record job details, track application statuses, and monitor their progress through a dashboard.

## Features

- User registration and login with password hashing and authentication.
- Add, view, edit, and delete job applications.
- Track application statuses: Applied, Interview, Offer, and Rejected.
- Dashboard displaying application statistics.
- Store job details such as company name, job title, job link, location, and required skills.
- Optional fields for application date and number of openings.
- User-specific job data protected by backend authentication.
- Responsive interface built with React and Tailwind CSS.
- Inline validation and error messages.

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication and Security
- JSON Web Tokens (JWT)
- bcryptjs for password hashing

## Installation and Setup

### Prerequisites
- Node.js and npm
- MongoDB database

### 1. Install Frontend Dependencies

Run this command in the project root directory:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend` folder.

Add your MongoDB connection variable:

```env
MONGO_URI=your_mongodb_connection_string
```

Create a `backend/.env` file and add your MongoDB connection string.

Keep your `.env` file private. Do not upload it to GitHub.

### 3. Start the Backend

Open a terminal and run:

```bash
cd backend
npm install
npm run dev
```

### 4. Start the Frontend

Open a separate terminal in the project root directory and run:

```bash
npm run dev
```

### 5. Open the Application

Visit the frontend URL shown in your terminal, usually:

http://localhost:5173