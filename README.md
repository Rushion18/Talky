# Talky Social Media Web App

Talky is a social media web app that combines the best features of Pinterest and Instagram, providing users with a platform to connect, share, and discover content.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [Node.js Backend](#nodejs-backend)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Interlink is a social media web app designed to facilitate user interactions through posts, comments, and likes. It incorporates elements of both Pinterest and Instagram, providing a visually engaging and user-friendly experience.

## Features

- User authentication and account management
- Post creation with text or images
- Interaction through likes and comments
- Comment hierarchy with up to two levels
- User following system
- User profile pages displaying posts, followers, and following

## Technologies Used

- **Frontend:** Angular
- **Backend:** Node.js
- **Database:** SQL (MSSQL)
- **Tools:** Azure Data Studio, Postman

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/interlink.git
   cd interlink
   ```

2. **Set Up Database:**
   - Install and open Azure Data Studio.
   - Connect to your MSSQL server.
   - Create a new database for Interlink.

3. **Configure Backend:**
   - Initialize your Node.js project.
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Connect Backend to Database:**
   - Update `server.js` with your MSSQL connection details.

5. **Create API Endpoints:**
   - Define API routes in `server.js` for user actions, posts, and comments.

6. **Test with Postman:**
   - Use Postman to test your API endpoints.

7. **Run the Application:**
   ```bash
   npm start
   ```

8. **Explore the App:**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Database Schema

Review the [Database Schema](#database-schema) section for information on the database tables used in Interlink.

## Node.js Backend

Explore the [Node.js Backend](#nodejs-backend) section for details on setting up the backend server.

## API Endpoints

Refer to the [API Endpoints](#api-endpoints) section for information on available API routes.

## Testing with Postman

Use the [Testing with Postman](#testing-with-postman) section to test your API endpoints using Postman.

## Contributing

We welcome contributions! If you have ideas for improvements, feature requests, or found a bug, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
