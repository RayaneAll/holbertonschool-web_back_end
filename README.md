# Web Back-End

This repository contains projects and exercises focused on the fundamentals of web back-end development. It covers a range of technologies and concepts used to build and manage the server-side logic of web applications.

## Table of Contents

- [Overview](#overview)  
- [Technologies](#technologies)  
- [Key Concepts](#key-concepts)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Author](#author)

## Overview

The goal of this project is to understand the core principles of back-end development. This includes working with servers, databases, APIs, authentication, and how to handle data and logic that run on the server side of a web application.

## Technologies

- Python 3.x  
- Flask / Django (depending on the project)  
- SQL and SQLAlchemy / ORM  
- RESTful APIs  
- HTML/CSS (for integration with front-end)  
- JSON  
- Postman for testing endpoints  
- MySQL / SQLite  
- Git & GitHub for version control

## Key Concepts

- Server-side programming and routing  
- HTTP methods: GET, POST, PUT, DELETE  
- RESTful API design and architecture  
- Middleware and request handling  
- Authentication and authorization (JWT, sessions)  
- Data modeling and schema design  
- CRUD operations (Create, Read, Update, Delete)  
- Database connections and migrations  
- Error handling and response codes  
- Environment variables and configuration management

## Project Structure

Each directory in this repository corresponds to a specific task or project related to web back-end development. Common folders and files include:

- `/api` - Contains all API routes and logic  
- `/models` - ORM models or raw SQL schema definitions  
- `/static` - Static assets if needed  
- `/templates` - HTML templates for server-side rendering  
- `app.py` or `main.py` - Main entry point of the application  
- `requirements.txt` - List of dependencies  
- `.env` - Environment configuration (not pushed to repo)  

## Getting Started

To run any back-end project in this repository:

1. Clone the repo  
2. Create a virtual environment and activate it  
3. Install dependencies using `pip install -r requirements.txt`  
4. Set up your environment variables (e.g. DB credentials, secret keys)  
5. Run the server using `python app.py` or equivalent  

You can test the endpoints using Postman or `curl`.

## Author

This project is maintained by Rayane, a student at Holberton School, as part of the Web Back-End curriculum.