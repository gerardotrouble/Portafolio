# User API Technical Test

Spring Boot REST API for user management with authentication, validation, filtering, sorting, Docker packaging, Swagger documentation, Postman collection, and unit tests.

---

## Requirements

* Java 17+
* Maven 3.9+
* Docker (optional)

---

## Run locally

### Option 1 - Run with Spring Boot

```
mvn clean install
mvn spring-boot:run
```

API runs on

```
http://localhost:8080
```

Health check

```
GET /health
```

Root

```
GET /
```

---


### Option 2 - Run generated JAR

```
.\mvnw.cmd clean package -DskipTests
java -jar target/user-api-0.0.1-SNAPSHOT.jar
```

## Swagger / OpenAPI

```
http://localhost:8080/swagger-ui.html
```

or

```
http://localhost:8080/swagger-ui/index.html
```

---

## Docker

Build image

```
docker build -t user-api .
```

Run container

```
docker run -p 8080:8080 user-api
```

Test

```
http://localhost:8080/health
```

---

## Postman Collection

Included file:

```
User_API_Technical_Test.postman_collection.json
```

Import into Postman to test all endpoints.

Collection includes:

* Root
* Health
* Login
* Create user
* Update user
* Delete user
* Sorting
* Filtering
* Validation tests

---

## Unit Tests

Implemented with:

* JUnit 5
* MockMvc
* Mockito

Run tests

```
./mvnw test
```

---

## Timezone and Date Format

The API uses the timezone required by the test:

```
Indian/Antananarivo (Madagascar)
```

Date format used in responses:

```
dd-MM-yyyy HH:mm
```

Example:

```
23-03-2026 18:00
```

---

## Default Users

The application starts with predefined users for testing login.

User 1

```
taxId: AARR990101XXX
email: user1@mail.com
phone: +15555555555
password: password1
```

User 2

```
taxId: BBBB990101XXX
email: user2@mail.com
phone: +15555555556
password: password2
```

User 3

```
taxId: CCCC990101XXX
email: user3@mail.com
phone: +1555555557
password: password3
```

Passwords are stored encrypted using AES256.

---

## Features

* AES256 password encryption
* RFC taxId validation
* Phone validation (AndresFormat)
* Filtering
* Sorting
* Global exception handler
* Swagger documentation
* Docker support
* Unit tests
* Postman collection
* Git versioning
* Madagascar timezone support

---

## Project structure

```
src/main/java/com/gerardo/user_api
├── config
├── controller
├── dto
├── exception
├── mapper
├── model
├── repository
├── security
├── service
├── validation
└── UserApiApplication.java
```

---

## Author

Gerardo Santillan
