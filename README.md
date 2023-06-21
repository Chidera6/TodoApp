**API Documentation**
This is a Todo_App API Documentation.
Backend

**API Reference Endpoints**

POST '/api/users/login'
An API that logs in an  Authenticated User.
Request body:{
    credential: "",
    password: "".
    }
Response: Logged in Users details.
URL: https://todobackend-1ey3.onrender.com/api/users/login

POST 'api/users/signup'
An API where a User can register.
Request Arguments: {
    "username":"",
    "email":"",
    "password":""
}
Response:Registered user's details.
URL: https://todobackend-1ey3.onrender.com/api/users/signup

DELETE 'api/users/logout'
An API that deleted the current logged in User.
URL:https://todobackend-1ey3.onrender.com/api/users/logout

POST '/api/tasks/create'
An API that creates a task by the logged in User. 
Request Arguments:{
    "title":"",
    "description":"",
    "userId":""
}
Returns:
URL: https://todobackend-1ey3.onrender.com/api/tasks/create

GET '/api/task/taskId'
Fetches a single task by id. 
URL: https://todobackend-1ey3.onrender.com/api/tasks/1

GET 'api/task/
Fetches all by tasks by a user.
URL: https://todobackend-1ey3.onrender.com/api/tasks/

DELETE '/api/task/taskId'
Deletes a specified task using the id of the task.
Response:Task deleted.
URL: https://todobackend-1ey3.onrender.com/api/tasks/1

PUT'/api/task/taskId'
Updates a specified task using the id of the task.You can choose to include completed or not in your request body.
Request body:{
    "title":"",
    "description":"",
    "completed":
}
Response:Task updated succesfully.
URL: https://todobackend-1ey3.onrender.com/api/tasks/1

**To test the endpoints,Visit the test endpoint URL below.**
URL: https://todobackend-1ey3.onrender.com/api/hello/world
- This will output hello world to your screen.
- Open the chrome dev tools and Visit Application/Cookies/URL underneath it.
- Copy the XSRF-TOKEN token there, mine looks like this "pcTouwu4-d4mEltv_NrDcXhM1pZS6PNDfRII".
- You will need it to make any requests to the server.
- To make requests,open the console tab of the chrome dev tools.
- A sample request will look like this below.
  ```
  fetch('/api/users/signup', {
  method: 'POST',
  headers: { "Content-Type": "application/json","XSRF-TOKEN": "19FR0V1R-tzHPToK9kRD3V2KJhwUJSoj5c2w"},
  body: JSON.stringify({ username: "chidera", email: "dicta@gmail.com", password: 'password' })
  })
  .then((data) => {
    console.log(data);
  });
  ```
- Adjust the body and methods based on the particular endpoint you want to access ,remember to always check your current XSRF-TOKEN and use it as appropriate.

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

6. Run `npx dotenv sequelize db:migrate` to create your database as well as run migrations,continue with step 10.

8. In the backend/config/database file uncomment the first development database set up,and comment out the second one.

9. Run `npx dotenv sequelize db:migrate` to create your database as well as run migrations.

10. Run the command `node app.js`

11. Check if everything is working by running the test endpoint, 
https://todobackend-1ey3.onrender.com/api/hello/world        
this should output `Hello World` on the screen.