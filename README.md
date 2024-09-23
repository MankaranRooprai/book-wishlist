# Book List Management System

The Book List Management System is a full-stack CRUD (Create, Read, Update, Delete) application designed to manage a collection of books. Built using Spring Boot for the backend and React.js for the frontend, this app provides a simple and efficient interface for managing book records.

## Features

1. **Add Book:**
   - Users can add new books to the system.
   - The form captures essential details such as book title, author, publication year, and whether the book is fiction or non-fiction.

2. **View Books:**
   - Provides a user-friendly interface to view a list of all books.
   - Detailed book profiles displayed.

3. **Update Book:**
   - Enables users to modify existing book details.
   - Changes are reflected in real-time.

4. **Delete Book:**
   - Users can delete book records when necessary.

## Technology Stack

### Backend (Spring Boot):
- **Java**: The application logic is implemented using Java programming language.
- **Spring Boot**: Provides a robust and scalable framework for building backend services.
- **Spring Data JPA**: Simplifies data access and persistence.
- **RESTful API**: Exposes endpoints for communication with the frontend.
- **MySQL**: The database stores book information persistently.

### Frontend (React.js):
- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: Handles HTTP requests to interact with the backend.
- **React Router**: Facilitates navigation and routing within the application.
- **CSS/Bootstrap**: For styling and responsive design.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/downloads/)

### Installation
# Backend (Spring Boot):

Navigate to the backend folder and run:

```bash
cd book
mvn spring-boot:run
```

Ensure your MySQL server is running, and update the `application.properties` file with your MySQL credentials.

# Frontend (React.js):

Navigate to the frontend folder and run:

```bash
cd bookweb
npm install
npm start
```

# Database Setup:

Create a MySQL database for the application.  
Update the Spring Boot `application.properties` file with your database details.

```properties
spring.application.name=book
spring.datasource.url=jdbc:mysql://localhost:3306/book
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

# Run the Application:

- The frontend will run on `http://localhost:3000`.
- The backend Spring Boot application will run on `http://localhost:8080`.

# API Endpoints

- `GET /api/books` - Get all books
- `POST /api/book` - Add a new book
- `PATCH /api/book/{id}` - Update book information
- `DELETE /api/book/{id}` - Delete a book

# Screenshots

Main Page displaying all the books on the list
![image](https://github.com/user-attachments/assets/40df1825-b1e5-414f-8658-8ada91fd0dd7)

Updating book details
![image](https://github.com/user-attachments/assets/96b1133a-1384-4602-8b48-b87ea522c6b0)

Adding a new book
![image](https://github.com/user-attachments/assets/f3e4e0cd-c62d-43d3-8db8-4864372614d6)

Database storing book info
![image](https://github.com/user-attachments/assets/67ed1bc4-4493-440d-a6fe-4b039885f276)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/book-list-management-system.git
