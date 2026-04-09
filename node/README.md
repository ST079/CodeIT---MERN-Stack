Dependencies ma chai production ma chaine packages matra raknee..
locally chaine packages haru dev dependencies ma rakne

# JavaScript

- High-level programming language
- Interpreted programming language
- Built on C++
- Dynamically typed programming language
- Used to build interactive web pages
- ECMA Script (ES6 2015) Standardization of JS
- NodeJS, Electron.js, React Native, Tensorflow.js

# NodeJS

- It is a JavaScript runtime.
- Runtime: A program that runs another program
- Runs JS in local machine
- Build on C++
- Built on top of Google Chrome V8 engine
- Used for: API, micro-services, real time app, JSON based API

## Architecture

- Single threaded
- Non-blocking operation
- Event driven

# ExpressJS

- It is NodeJs API/backend framework, used to build API (Application program interface).
- It simplifies the HTTP module of Node.js
- Minimalist, unopinionated framework
- REST API

## API

- API format
  - JSON (we will use this)
  - XML
- REST (Representational state transfer) API

## JSON: JavaScript Object Notation

- JSON => JavaScript Object : JSON.parse()
- JavaScript Object => JSON : JSON.stringify()

# MongoDB

- Non-relational database
- Data are stored in collections & documents
- Database: Main container, where all collection of data are stored.
- Collection: Equivalent to table of relational database
- Document: Equivalent to Row
- Field: Equivalent to Column

## Tools used in MongoDB

- Locally: MongoDB Compass (shell included)
- Cloud: MongoDB Atlas

## Steps to run MongoDB locally

- Download and install MongoDB (https://www.mongodb.com/try/download/community)[https://www.mongodb.com/try/download/community]
- Download and install MongoDB Compass (https://www.mongodb.com/try/download/compass)[https://www.mongodb.com/try/download/compass]

_Note: In some cases, try to add the mongodb path in environment variables (system)_

1. Run MongoDB Compass
2. Setup a new connection (mongodb://localhost:27017)[mongodb://localhost:27017]

## MongoDB Queries/Commands

- show dbs: Show database list
- use <database name>: Use database (create database if not exists)
- show collections: Show list of collections (table)

### Create/Add data

1. insertOne

- db.<collectionName>.insertOne()
- for e.g: db.users.insertOne({name:"Ram", email: "ram@gmail.com"})

2. insertMany

- db.<collectionName>.insertMany()
- for e.g: db.users.insertOne([{name:"Ram", email: "ram@gmail.com"}, {name:"sita", email: "sita@gmail.com"}])

### Read data

1. find

- db.<collectionName>.find()
- for e.g: db.products.find()
- for e.g: db.products.find({name:"iphone"})

2. findOne

- db.<collectionName>.findOne({})
- for e.g: db.products.findOne({name:"iphone"})

3. countDocuments

- db.products.countDocuments()

### Update data

1. updateOne

- db.<collectionName>.updateOne({find}, {$set: {key: value} })

### Delete data

1. deleteOne

- db.<collectionName>.deleteOne({find})

## Complex filters

1. $eq: db.users.find({name: {$eq: "Ram"} })
2. $ne: db.users.find({name: {$ne: "Ram"} })
3. $gt/$gte: db.users.find({age: {$gt: 20} })
4. $lt/$lte: db.users.find({age: {$lt: 20} })
5. $and: db.users.find({$and : [ {age: {$gt: 20} }, {name: {$eq: "Ram"} } ] })
6. $or: db.users.find({$or : [ {age: {$gt: 20} }, {name: {$eq: "Ram"} } ] })

- sort: db.users.find().sort({name: 1}) 1: ASC, -1: DESC
- limit: db.users.find().limit(10)
- skip: db.users.find().skip(5)

# Mongoose
- ODM of MongoDB for Node.js
- Create Schema/ Validate Schema
- Create models using schema
- Middleware
- Relationships

# Cryptography
## Encryption

- Encryption: Converting readable text to cipher text (unreadable)
- for e.g: hello => 31586621468vq146qww1

- Decryption: Converting cipher text to readable
- for e.g: 31586621468vq146qww1 => hello

### Types
- Symmetric: Same key is used for encryption and decryption
- Asymmetric: Different keys are used in encryption and decryption, Public key/Private Key

## Hashing
- One way encryption
- Convert readable text to cipher but not back to readable
- Hashing of a text always returns same cipher

## Salt
- Adding random characters in hash value

- 123456 => arfgsdfuiqwerasopdfa45ydpsdf
- 123456 => as12345idfqweuiorasdfa0sdfgd

## Authentication & Authorization

- Authentication: Who you are? Logged in user
- Authorization: What you can do? User role

## JWT - JSON Web Token

- Self verified
- Used for auth
- Tamper proof

### JWT Structure

- Header
- Payload
- Signature

## Storage

1. Cookie storage
   - Size: 4KB
   - Storage: Server & Browser
   - Expiry: Cookie expiry
2. Local storage
   - Size: 5MB
   - Storage: Only Browser
   - Expiry: Never expires
3. Session storage
   - Size: 5MB
   - Storage: Only Browser
   - Expiry: On Tab close

## Auth Process

1. Login/Register success
2. Generate token (JWT)
3. Store token: Cookie, Session storage, Local storage
4. Append token in every request to handle auth
5. Verify the token and authenticate/authorize user

## Middleware

- Function that lies between request and response.

Browser ------------ Request -----------> Server
Middleware
Server ------------- Response -----------> Browser

- Function that has the access of both request and response object
- It has additional functionality to go to next() middleware call

### Usage
- Logging
- Authentication & Authorization
- Request & Response object modification
- Error handling, data validation

## Authorization - RBAC (Role based access control)

1. USER -> Order create
2. MERCHANT -> Product create/update/delete
3. ADMIN -> Product mngt, User mngt, Order mngt

## Validation (data)
- Check/Verify whether the input data is valid or not
- For e.g. name (string), age (number), isActive (boolean)

- Validation -> API (Most important), Frontend, Database (optional)

## HTTP Methods

1. GET : Used to fetch/retrieve data, No request body (READ)
2. POST : Used to create data, uses request body to send data to API (CREATE)
3. PUT : Used to update data, uses request body to send data to API (UPDATE)
4. DELETE : Used to delete data (DELETE)
5. PATCH : Used to partially update data

POST /product JSON(data) -> Validate data -> Store in Database

## HTTP Status Code

1. 1xx - Informational (rarely used)
2. 2xx - Success
   - 200: OK
   - 201: Created
   - 204: No content (delete)
3. 3xx - Redirect (rarely used)
   - 301: Moved permanently
   - 304: Not modified (used for caching)
4. 4xx - Client Error
   - 400: Bad request (invalid input)
   - 401: Unauthorized (not logged in user, no token/expired token)
   - 403: Forbidden (logged in but not allowed)
   - 404: Not found
   - 405: Method not allowed
   - 409: Conflict (duplicate email, phone)
   - 422: Unprocessable entity (validation error)
5. 5xx - Server Error
   - 500: Internal server error
   - 502: Bad gateway (invalid response from another service)
   - 503: Service unavailable (temporary)
   - 504: Timeout

# Resume (CV) tips

- Use templates, from google docs, canva
- Your personal info like, name, email, address, phone along with github & linkedin account
- Your short bio, summary
- Experiences (Internship)
- Avoid using paragraph
- Add technical skills based on job, for e.g use MERN stack related tech for MERN stack developer
- Highest level of education

## Layered Architecture

1. API Layer
   a. Routes
   - Handle the routes/endpoints
     b. Controllers
   - Handle requests and responses
     c. Middlewares
   - Handle requests and responses
   - Logging, Auth
2. Business Logic Layer
   a. Services
3. Data Logic Layer
   a. Models
4. Database Layer

## NodeJS Code Semantics

- Always format your code (Use prettier code formatter)
- Use proper spacing and line spacing.
- Always use camelCase while naming your files and folders in JS (helloWorld)
- Always use camelCase while naming your function & variables in JS (createUser)
- File, variable names must be NOUN
- Function & methods names must be VERB
- Also check singular & plural case e.g (getUserById, getUsers)
- Avoid using number while naming variable, function, file (test1 ❌, testOne ✅)
- Add a line above `return` statement
- If you have list of codes, arrange in ASC order `ctrl + shift + s`

### Entity
- Model
- Service
- Controller
- Routes
- Validation Schema (libs)

# Product Orders
- user (customer)
- orderItems
   - product
   - quantity
- status: pending, confirmed, shipped, delivered, cancelled
- shippingAddress
- totalPrice
- orderNumber
- payment

## File upload

1. File data -> Send as FormData
2. Use multer package to handle formdata
3. Upload to cloudinary
4. Receive the file url from uploaded file
5. Store the URL in database

## Debugging
1. Check from root app.js file
2. Check in the routes file. for e.g `product.route.js`
3. Check in the controller file. for e.g `product.controller.js` 
4. Check in the service file. for e.g `product.service.js`
5. Check imported files/functions

## Forgot password/Reset password

1. User requests for forgot password
2. User inputs the email address
3. Using the email address, find the user and create a reset password link & token
4. Send the reset password link to that email

5. User clicks on the reset password link from the received email.
6. User inputs the new password, along with the token (reset password link)
7. Verify the user & token
8. Update the password.

## Mongodb Aggregation
- Performing operation in multiple documents (table)
- Filtering in multiple documents
- Data formatting

1. $match => Filtering
2. $lookup => LEFT JOINS
3. $unwind => INNER JOIN
4. $project => Data formatting
5. $group => complex grouped operations

=========================================================================================

## JS course content

- Print
- Variables
- Data types
- Operators (arithmetic, logical, relational)
- Conditional Statement (if, else, switch, ternary operator)
- Loop (for, while)
- Function
- EcmaScript (Template literals, spread operator, destructuring, arrow function)
- Array methods (map, reduce, sort, filter, find, includes, every, some)

## NodeJS course content

- NodeJS
- CommonJS/ES modules
- File system
- HTTP
- Event
- Path
- URL
- HTTP methods, HTTP status codes (API)
- Callbacks, Promises, async/await
- Express
- Environment variables (secrets, config)
- Architecture
- Postman
- Semantics
- Filter queries, pagination
- Orders management
- Payment (khalti)
- File upload (Cloudinary, multer)
- Debugging
- Forgot password, reset password
- Email send
- User management
- Mongodb Aggregation
- Deployment
- MongoDB Atlas
- AI integration
- Template engine

## React course content
- Refresh token (front end)
- Pay via stripe

## Learning Path

1. JS

Backend 2. Node 3. Express 4. MongoDB

Frontend

- DOM manipulation

5. React
6. Next.js

# Github Pull request

- Always create a new branch from `main` branch
- Always format your code, use prettier code formatter
