**API Documentation**
This is a Todo_App API Documentation.
Backend

**API Reference Endpoints**

POST '/api/users/login'
An API that logs in an  Authenticated User.
Request body:{
    email: "",
    password: "".
    }
Response: Logged in Users details and a token.
URL: https://todobackend-ew9a.onrender.com/api/users/login

POST 'api/users/signup'
An API where a User can register.
Request Arguments: {
    "username":"",
    "email":"",
    "password":""
}
Response:Registered user's details and a  token.
URL: https://todobackend-ew9a.onrender.comm/api/users/signup


POST '/api/tasks/create'
An API that creates a task by the logged in User. 
Request Arguments:{
    "title":"",
    "description":"",
    "userId":""
}
Returns:Created task.
URL: https://todobackend-ew9a.onrender.com/api/tasks/create

GET '/api/task/taskId'
Fetches a single task by id. 
URL: https://todobackend-ew9a.onrender.com/api/tasks/1

GET 'api/task/
Fetches all by tasks by a user.
URL: https://todobackend-ew9a.onrender.com/api/tasks/

DELETE '/api/task/taskId'
Deletes a specified task using the id of the task.
Response:Task deleted.
URL: https://todobackend-ew9a.onrender.com/api/tasks/1

PUT'/api/task/taskId'
Updates a specified task using the id of the task.You can choose to include completed or not in your request body.
Request body:{
    "title":"",
    "description":"",
    "completed":
}
Response:Task updated succesfully.
URL: https://todobackend-ew9a.onrender.com/api/tasks/1

**To test the endpoints on Postman,Visit the test endpoint URL below.**
https://todobackend-ew9a.onrender.com/api/tasks/signup
- Sign up and copy the returned token.
- Use this token as Authorization header when creating a task/todo.

**To use this API in development.**

**Prerequisites**
- Nodejs
- A Postgres Database Url or a local Postgres Database.
 
1. Run these commands `mkdir todo_app && cd todo_app`,these will create a directory and enter into the directory.
2. Clone the github repository via this URL https://github.com/Chidera6/TodoApp.git in your local machine.
3. Install the required dependencies by running `npm install`.
4. Create a .gitignore file and add the following files to it. 
    ```
    node_modules/
    .env
    build 
    .DS_Store
 
    ```
5. Connect to your database URL by going to step 7 or skip to step 8 to connecct to a local Postgres URl.

6. Create a .env file and add the following to it with your own values.
    - PORT=5000
    - DB_USERNAME="postgres"
    - DB_PASSWORD="put your value"
    - DB_DATABASE="put your value"
    - DB_HOST="localhost"
    - JWT_SECRET="put your value"
    - JWT_EXPIRES_IN=604800
    - DATABASE_URL="put your value"

6. Run `npx sequelize db:migrate` to create your database as well as run migrations,continue with step 10.

8. In the backend/config/database file uncomment the first development database set up,and comment out the second one.

9. Run `npx sequelize db:migrate` to create your database as well as run migrations.

10. Run the command `npx nodemon  app.js`

11. Check if everything is working by running the test endpoint, 
https://todobackend-ew9a.onrender.com/        
this should output `Hello World` on the screen.