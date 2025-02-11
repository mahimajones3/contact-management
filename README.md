# Contact Management Application Backend

A RESTful API backend service for managing contacts built with Node.js, Express.js, and SQLite. This application provides complete CRUD operations for contact management with data validation, error handling, and search functionality.

## Features

- Complete CRUD operations for contacts
- Data validation using Joi
- SQLite database for data persistence
- Search functionality for contacts
- Comprehensive error handling
- Unit testing with Jest
- Clean and maintainable code structure
- RESTful API design

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Project Structure

```
contact-management/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   └── app.js
├── tests/
│   └── contact.test.js
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contact-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will start on port 3000 by default. You can modify this by setting the `PORT` environment variable.

## API Endpoints

### Get All Contacts
```
GET /api/contacts
```
Returns a list of all contacts.

### Get Single Contact
```
GET /api/contacts/:id
```
Returns a single contact by ID.

### Create Contact
```
POST /api/contacts
```
Creates a new contact. Required fields:
- name (string)
- email (string, unique)
- phone (string, optional)
- address (string, optional)

Example request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St"
}
```

### Update Contact
```
PUT /api/contacts/:id
```
Updates an existing contact. Same fields as create contact.

### Delete Contact
```
DELETE /api/contacts/:id
```
Deletes a contact by ID.

### Search Contacts
```
GET /api/contacts/search?q=searchterm
```
Searches contacts by name or email.

## Data Validation

The API implements validation for contact data:
- Name: Required, 2-100 characters
- Email: Required, valid email format, unique
- Phone: Optional, must match pattern +?[0-9\s-]+, 10-20 characters
- Address: Optional, max 200 characters

## Error Handling

The application includes comprehensive error handling for:
- Invalid input data
- Non-existent resources
- Duplicate email addresses
- Database errors
- Server errors

## Testing

Run the test suite:
```bash
npm test
```

The tests cover:
- Contact creation
- Data validation
- Error handling
- CRUD operations
- Search functionality

## Development

Start the development server with hot reload:
```bash
npm run dev
```

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run the test suite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email your-email@example.com or open an issue in the repository.