const express = require('express');
const router = express.Router();
const { validateContact } = require('../middleware/validation');
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  searchContacts
} = require('../controllers/contactController');

router.get('/search', searchContacts);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', validateContact, createContact);
router.put('/:id', validateContact, updateContact);
router.delete('/:id', deleteContact);

module.exports = router;