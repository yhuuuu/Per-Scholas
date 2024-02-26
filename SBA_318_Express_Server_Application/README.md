# SBA 318 Express Server Application

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies](#technologies-used)
  - [Installation](#installation)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Dependencies](#dependencies)


## Introduction

This project aims to create a server-side application using Node.js and Express framework to build a RESTful API. The API will serve as a backend service for managing resources like users, plant information, and swap information. Express middleware will be implemented to handle tasks such as request parsing, logging, and error handling. Additionally, the project will utilize a template engine like EJS to render dynamic views for interacting with the API through HTML forms.


## Features

Create, read, update, and delete operations for users, plant information, and swap information.
Implement Express middleware for request parsing, logging, and error handling.
Render dynamic views using EJS template engine.
Interact with the RESTful API through HTML forms.

## Technologies Used

* Nodes.js
* Express.js
* EJS(Embedded JavaScripted) template engine

## Installation

1.Clone the repository: git clone <repository-url>
2.Navigate to the project directory: cd <project-folder>
3.Install dependencies: npm install

## Usage

1.Start the server: npm start
2.Access the API endpoints via HTTP requests.
3.Use HTML forms to interact with the API.

## Endpoints
* GET /users: Retrieve all users.
* POST /users: Create a new user.
* GET /users/:user_id: Retrieve a specific user by ID.
* PATCH /users/:user_id: Update a specific user by ID.
* DELETE /users/:user_id: Delete a specific user by ID.
* GET /users/:user_id/info: Retrieve plant information and swap informationfor a specific user.
* GET /plantInfo: Retrieve all plant information.
* POST /plantInfo: Create a plant.
* GET /plantInfo?user_id=<VALUE>: Retrieve all plant information by user ID.
* GET /swapInfo: Retrieve all swap information.
* POST /swapInfo: Create a swap.
* GET /userForm: create a new by submission





## Dependencies

* EJS (Embedded JavaScript): Version 3.1.9
* Express.js: Version 4.18.2