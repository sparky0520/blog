# Full Stack Blog App
### Features
1. Create a blog - Create a new blog which includes blog title, image, author and content.
2. Update a blog - Ability to change any field of the blog.
3. View Blog - View a specific blog by clicking on it.
4. Delete a blog - Delete a blog along with its data from the database
### Tech Stack:
-  ReactJS   
- MongoDB
- ExpressJS
- NodeJS
### Frontend:
1. Using React-router-dom to assign routes to different react components. 
2. Using axios library in react to make requests to different endpoints of the server.
3. Displaying the update data on the webpage.
### Backend:
1. Using express.router() to assign the /blogs prefix to all the endpoints for the server.
2. Using mongoose library to build a schema of the blogs database.
3. Storing all urls in .env file for increased security.

## Steps to run this project
1. Clone this repo in your computer using `git clone https://github.com/sparky0520/blog.git`.
2. In the terminal type `cd backend` and then `npm i` to install all dependencies/node modules. Do the same for the frontend folder.
3. In the `.env` files in `backend` and `frontend` folders, replace the values for the respective keys.
4. While in the backend folder type `node index.js` to run the server. In the frontend type  `npm run dev` to start the react development server.
5. View your webpage on `http://localhost:5173` 
