# Real-Time Messaging Chat Application

## Overview
This project is a real-time messaging chat application built using the MERN stack (MongoDB, Express, React, Node.js) along with Socket.io for instant communication. The application supports features like group chats, file upload/download, and secure user authentication.

## Features
- **Real-Time Messaging:** Instant communication between users with Socket.io.
- **Group Chats:** Create and manage group chats with multiple participants.
- **File Upload/Download:** Share files within chat conversations.
- **Secure Authentication:** JWT-based authentication ensures secure access and user management.
- **State Management:** Efficient state management with Redux-Toolkit and Zustand.
- **Responsive Design:** Fully responsive interface using Tailwind CSS for optimal experience across devices.

## Tech Stack
- **Frontend:** React, Redux-Toolkit, Zustand, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io
- **Authentication:** JSON Web Tokens (JWT)

## APIs
The backend provides a set of RESTful APIs for managing the following:

- **Messages:** Sending, receiving, and retrieving chat messages.
- **Users:** User registration, authentication, and profile management.
- **Groups:** Creating and managing group chats.

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/MayankHarnotiya/chat-app.git
    cd chat-app/backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following:
    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://mayankharnotiya25:8qTDY0g0N2jzaZr8@cluster0.tqkg3xt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET="QWERTYUIOP"
    ```
4. Start the server:
    ```bash
    npm run start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run start
    ```

## Usage
- **Login/Register:** Create an account or log in with existing credentials.
- **Chat:** Start chatting in real-time, create group chats, and share files.
- **Group Management:** Manage group participants and settings.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or issues, please reach out to(mailto:mayankharnotiya25@gmail.com).
