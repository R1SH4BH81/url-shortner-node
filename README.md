

# URL Shortener API

A simple URL shortener built with **Node.js**, **Express**, and **MongoDB**. This API allows users to create short URLs, track visits, and get analytics for each short URL.

---

## Features

* Generate short URLs from long URLs
* Track visit history with timestamps
* Get analytics for each short URL
* Redirect users from short URL to original URL

---

## Technologies

* Node.js
* Express.js
* MongoDB & Mongoose
* Nanoid for generating unique short IDs
* dotenv for environment variable management

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/R1SH4BH81/url-shortner-node
cd url-shortner-node
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root folder with the following:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=urlShortener
```

> If using MongoDB Atlas, replace `MONGODB_URI` with your cluster connection string.

### 4. Start the server

```bash
node index.js
```

Server will run on `http://localhost:3000`.

---

## API Endpoints

### 1. Generate a Short URL

**POST** `/url`

**Request Body:**

```json
{
  "url": "https://www.example.com"
}
```

**Response:**

```json
{
  "id": "abc12345"
}
```

---

### 2. Redirect to Original URL

**GET** `/url/:shortId`

* Redirects the user to the original URL
* Adds a timestamp to the visit history

---

### 3. Get Analytics

**GET** `/url/analytics/:shortId`

**Response:**

```json
{
  "shortId": "abc12345",
  "redirectUrl": "https://www.example.com",
  "visitHistory": [
    { "timestamp": 1690000000000 },
    { "timestamp": 1690000100000 }
  ]
}
```

---

## Project Structure

```
├── controllers/
│   └── url.controllers.js
├── model/
│   └── url.models.js
├── routes/
│   └── url.routes.js
├── db.js
├── index.js
├── package.json
└── .env
```

---

## Notes

* Make sure MongoDB is running locally or your Atlas cluster is accessible.
* Use **Postman**  to test API endpoints.



Do you want me to do that?
