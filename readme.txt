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

config : setup server,connect to database etc.
controllers : handle request logic
middlewares : custom functions to handle requests and responses
models : define data schemas and interact with the database
routes : define endpoints and their logic
utils : utility functions and helpers
.env : environment variables
app.js : entry point of the application
package.json : configuration file and dependencies for project