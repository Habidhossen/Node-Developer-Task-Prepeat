# Food Application API Documentation

This project involved the development of a Node.js application for a food-related service. The task requirements were successfully implemented, and the application now provides three main APIs for handling food-related data: GET, POST, PUT and DELETE.

## API Documentation

### 1. Add a New Food

- POST `/api/v1/foods`

### 2. Get All Foods

- GET `/api/v1/foods`

### 3. Get a Single Food

- GET `/api/v1/foods/:id`

### 4. Update Food Details

- PUT `/api/v1/foods/:id`

### 5. Delete Food

- DELETE `/api/v1/foods/:id`

### Request Body

```
{
  "name": "Pizza",
  "description": "Delicious pizza with various toppings",
  "cuisine": "Italian",
  "price": 12.99
}
```

### Response Structure

```
{
  "status": "success",
  "message": "Food added successfully",
  "data": {}
}
```
