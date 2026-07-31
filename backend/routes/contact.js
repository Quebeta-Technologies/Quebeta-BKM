import express from 'express';
import { saveContact, listContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', saveContact);
router.get('/', listContacts); // Protect with auth middleware in production

export default router;
