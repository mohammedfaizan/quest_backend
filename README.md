# Quest Tracker Backend

This is the backend for the Quest Tracker project, built with Node.js, Express, and MongoDB.

## Features

- Create new quests
- Retrieve all quests
- Delete quests by ID

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/quest-tracker-backend.git
cd quest-tracker-backend
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5002
```

### 4. Run the Server

```sh
npm start
```

The backend will run on `http://localhost:5002`.

## API Endpoints

### Create a Quest

**POST** `/api/quests`  
Request Body:

```json
{
  "name": "Workout",
  "completedDays": { "2025-03-08": true }
}
```

### Get All Quests

**GET** `/api/quests`

### Delete a Quest

**DELETE** `/api/quests/:id`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

## License

MIT License
