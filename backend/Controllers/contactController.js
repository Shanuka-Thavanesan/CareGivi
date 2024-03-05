import asyncHandler from 'express-async-handler';
import contactModel from '../models/contactModel.js';
import slugify from 'slugify';
// create new contact message
const createContactMessage = asyncHandler(async (req, res) => {
    try {
        if (req.body.name) {
            req.body.slug = slugify(req.body.name);
        }
        const newContactMessage = await contactModel.create(req.body);
        res.json(`Successfully Submitted`);
    } catch (error) {
        throw new Error(error);
    }
});

// get all contact messages
const getallContact = asyncHandler(async (req, res) => {
    try {
        const allContacts = await contactModel.find();
        res.json(allContacts);
    } catch (error) {
        throw new Error(error);
    }
});
export {
    createContactMessage,
    getallContact
};