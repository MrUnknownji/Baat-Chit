# Baat-Chit

Baat-Chit is a simple, real-time chat application that allows users to communicate across different browsers, including incognito windows.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.0 or higher recommended)

## Installation

1. Clone the repository or download the source code:
   ```
   git clone https://github.com/yourusername/baat-chit.git
   cd baat-chit
   ```

## Starting the Application

1. Start the server:
   Open a terminal in the project directory and run:
   ```
   node server.js
   ```
   You should see a message indicating the server is running and listening on a specific port. Mentioned in server.js

2. Access the chat application:
   Open a web browser and navigate to:
   ```
   http://localhost:3000
   ```
   (Replace 3000 with the actual port number if it's different)

3. Start chatting:
   - Open multiple browser windows or tabs to simulate different users.
   - You can also use incognito/private browsing windows to test.
   - Type messages and see them appear in real-time across all open instances.
   - You can create groups.
   - You can chat with a specific user by selecting him 
   - If you don't want to join any team you can go to default team by entering 1 as code

## Notes

- The chat is not persistent. Messages are only stored in memory and will be lost when the server restarts.

## Troubleshooting

- If you can't connect to the chat, ensure the server is running and you're using the correct port number.
- Check the console in your browser's developer tools for any error messages.
- If you make changes to the server code, you'll need to restart the server for the changes to take effect.

## Contributing

Feel free to fork the repository and submit pull requests with any enhancements.