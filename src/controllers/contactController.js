const Contact = require('../models/Contact');

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.getAll();
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.getById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

const createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    if (err.message.includes('UNIQUE constraint failed')) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    next(err);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const updated = await Contact.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    const contact = await Contact.getById(req.params.id);
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const deleted = await Contact.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    next(err);
  }
};

const searchContacts = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    const contacts = await Contact.search(q);
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  searchContacts
};