<h1 align="center">NestJS Tutorial for Beginners</h2>



  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


 

This project serves as a starting point for learning NestJS, a powerful framework for building server-side applications with Node.js. It leverages the concepts and examples presented in a comprehensive YouTube tutorial : https://www.youtube.com/watch?v=8_X0nSrzrCw&t=1277s

**What is NestJS?**

NestJS is a progressive Node.js framework heavily inspired by Angular. It embraces a modular and layered architecture, promoting clean code separation and maintainability. NestJS provides features like:

* Dependency injection
* Routing
* Controllers
* Services
* Middleware
* Exception handling
* Built-in testing capabilities

**Getting Started**

This tutorial assumes you have Node.js and npm (or yarn) installed on your system. Here's how to get started:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/Ruvini-Rangathara-org/learn-nestJs.git
   ```

2. **Install dependencies:**

   ```bash
   cd your-project-name
   npm install
   ```
   (or `yarn install` if using yarn)

3. **Start the development server:**

   ```bash
   npm run start:dev
   ```
   (or `yarn start:dev`)

   This will start the NestJS application in development mode, automatically restarting the server when you make changes to your code.

**Following the Tutorial**

The provided YouTube tutorial https://www.youtube.com/watch?v=8_X0nSrzrCw&t=1277s  guides you through various NestJS functionalities step-by-step. It covers topics like:

* Setting up a NestJS project
* Creating a logger service
* Implementing an all exceptions filter
* Using Prisma with NestJS
* ... and more!

**Additional Resources**

* **API Documentation for Employee :** https://documenter.getpostman.com/view/28283365/2sA3JQ5Km4

* **NestJS Documentation :** [https://docs.nestjs.com/](https://docs.nestjs.com/)

* **NestJS GitHub Repository :** [https://github.com/nestjs](https://github.com/nestjs)



## 


### Usefull commands

```bash
nest g module users

nest g controller users

nest g service users
```

* **commands for prisma**
```bash
npm i prisma -D
npx prisma init
```

```bash
npx prisma migrate dev --name init
```

* **When changes are made to the schema**
```bash
npx prisma generate
npx prisma migrate dev --name [name_change]
```

```bash
nest g module database
nest g service database
```

```bash
nest g resource employees
REAST API , y
```


* **rate limiting**
```bash
npm i --save @nestjs/throttler
```

##