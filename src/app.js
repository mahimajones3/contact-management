const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Add this root route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Contact Management API",
        endpoints: {
            getAllContacts: "GET /api/contacts",
            getContactById: "GET /api/contacts/:id",
            createContact: "POST /api/contacts",
            updateContact: "PUT /api/contacts/:id",
            deleteContact: "DELETE /api/contacts/:id",
            searchContacts: "GET /api/contacts/search?q=searchterm"
        }
    });
});

app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;