# Tech-Space---CMS-Blog

## Table of Contents:

- [Description](#description)
- [Technologies-Used](#technologies-used)
- [Required Additional Technologies](#required-additional-technologies) 
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Description:

Welcome to techspace. A CMS style website that allows users to write and post blogs that can be seen amongst all users. Users have the ability to create their own accounts in order to contribute to the site and join the techspace conversation.

## Technologies Used:

- MySQL 
- Node.js
- NPM Express
- NPM Mysql2
- NPM dotenv
- NPM Sequelize
- Handlebars
- CSS
- JavaScript
- Bootstrap

## Installation:

This application requires npm package dependencies.
For installation, in your terminal command line, run:
```
npm install
```
In order to access the database you will need to establish an environment variable file (.env) in the root of your file system. In this file include:
```
DB_NAME = 'techspace_db' | database name
DB_PASSWORD = '' | enter your password
DB_USER = '' | enter root user
``` 
Next, you will need to source the SQL database, in your terminal command line, run:
``` 
mysql -uroot -p
```
and enter your SQL login credentials. 
Once logged in, run the following in your terminal command line:
```
SOURCE db/schema.sql |to create the database
USE techspace_db;  | to set the databasea you want to use
quit | to exit SQL
```
Once you have set up the databse, you are ready to use the application. To launch the server, in your terminal command line, run:
```
npm start
```
When successfully launched, you will see the following message in your terminal:
``` 
App listening on port 3001!
```

## Usage:

To use, simply navigate to the deployed site. You will be prompted to set up an account if you do not already have one - or you can login if you are an existing user. 

Once you are logged in to the site you can see a full list of all posts already deployed to the site by all users, and have the option to visit your personal dashboard to view your own posts, make edits, or delete any content. You can also leave a comment on any blog that exists on the site. Have fun!

## Demo:

[View Deployed Application on Heroku]()


<img src="public/images/deployed site - create post.png" width="200px" alt="deployed site - userdashboard">
<img src="public/images/deployed site - homepage.png" width="200px" alt="deployed site - homepage">
<img src="public/images/deployed site - user dashboard.png" width="200px" alt="deployed site - userdashboard">


## License: 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)