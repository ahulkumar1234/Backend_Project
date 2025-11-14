| Property         | Purpose                               |
| ---------------- | ------------------------------------- |
| `process.env`    | Access environment variables          |
| `process.argv`   | Read command-line arguments           |
| `process.exit()` | Stop the app                          |
| `process.cwd()`  | Get current working directory         |
| `process.pid`    | Get process ID (useful for debugging) |


process.exit(1)=> means code exit with error
process.exit(0)=> means code exit succesfully without error

🧩 What is process in Node.js?

process is a global object in Node.js that gives information and control over the currently running Node app.

----------------------------------------------------------------------------------------------------------------------------------------------

⭐ Summary (One-line memory hack)

| Folder/File      | Kaam (Super Simple)            |
| ---------------- | ------------------------------ |
| **config/**      | Project setup & settings       |
| **controllers/** | Logic handle karta hai         |
| **middlewares/** | Gatekeeper functions           |
| **models/**      | Database ka blueprint          |
| **routes/**      | API endpoints                  |
| **utils/**       | Helper functions               |
| **.env**         | Secret values                  |
| **app.js**       | Project start point            |
| **package.json** | Project details + dependencies |

📁 Node.js / Express Project Folder Structure – Simple Explanation
1️⃣ config/

Kaam:

Server ko setup karna

Database se connection banana

Cloudinary config, JWT config, etc.

Simple words:
👉 "Yaha hum project ke setting rakhte hain."

Example:

database.js → MongoDB connect

cloudinary.js → Cloudinary setup

2️⃣ controllers/

Kaam:

Routes se aayi request ko process karna

Logic likhna: create user, login, upload image, etc.

Simple words:
👉 "Yaha poora dimaag ka kaam hota hai—logic handle hota hai."

Example:

userController.js

productController.js

3️⃣ middlewares/

Kaam:

Request-response ke beech me chalne wale functions

Auth check, error handler, multer upload, etc.

Simple words:
👉 "Gatekeeper ki tarah—request ko allow ya block karta hai."

Example:

authMiddleware.js

errorMiddleware.js

4️⃣ models/

Kaam:

Database ka structure (schema) banana

Kaunsa data save hoga? kis format me?

Simple words:
👉 "Yaha hum database ka blueprint banate hain."

Example:

User.js

Product.js

5️⃣ routes/

Kaam:

API endpoints define karna

/login, /signup, /products, /upload etc.

Simple words:
👉 "User kis URL ko call karega aur kya karega—ye yaha decide hota hai."

Example:

userRoutes.js

productRoutes.js

6️⃣ utils/

Kaam:

Common helper functions

Email sender, token generator, password hasher, etc.

Simple words:
👉 "Small tools jise code me baar-baar use karte hai."

Example:

sendEmail.js

generateToken.js

7️⃣ .env

Kaam:

Secret values store karna

API keys, database URL, JWT secret

Simple words:
👉 "Secret locker — important values yaha rakhte hain."

8️⃣ app.js (ya server.js)

Kaam:

Entire server yahin se start hota hai

Middlewares, routes, database connection sab yaha import hote hain

Simple words:
👉 "Yeh project ka boss file hai. Yahin se sab kuch chalna start hota hai."

9️⃣ package.json

Kaam:

Project ki settings

Kaunse dependencies install hain

Scripts (start server, dev mode)

Simple words:
👉 "Project ka ID card + shopping list."
