# StudentMangementPortal_NodeJS


## Introduction

This NodeJS assignment is a simple web application that allows two types of users (Students and Teachers) to interact with the system. The application uses HTML, CSS, and JavaScript for the Frontend, while the Backend is powered by Express and NodeJS. SQL is used as the database to store and retrieve user data.

## Features

1. **User Authentication:**
   - Students and Teachers can log in to the application by clicking the respective buttons on the homepage.

2. **Student Functionality:**
   - Students can view their results by entering their roll number and date of birth.
   - If the entered roll number and date of birth do not match, an error is displayed on the screen.

3. **Teacher Functionality:**
   - Teachers can:
      - View all records.
      - Add new records.
      - Edit existing records.
      - Delete records.

## Prerequisites

Ensure that the following software is installed on your machine:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- SQL Database (MySQL)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vrun545/StudentMangementPortal_NodeJS.git
   ```

2. Change to the project directory:

   ```bash
   cd StudentMangementPortal_NodeJS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Set up the database:
   - Create a new database.
   - Update the database configuration in the `config/db.js` file.

2. Database Schema:
   - Create tables as per the requirements. You can find the SQL queries in the `database-schema.sql` file.

3. Environment Variables:
   - Create a `.env` file based on the `.env.example` file and update the values as needed.


## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: SQL (e.g., MySQL, PostgreSQL)


## License

This project is licensed under the [MIT License](LICENSE).
