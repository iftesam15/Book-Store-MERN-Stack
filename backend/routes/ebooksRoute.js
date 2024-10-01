import express, { request } from 'express';
import { Ebook } from '../models/ebookModel.js';

const router = express.Router();
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear, category, price } = request.body;
        if (!title || !author || !publishYear || !category || !price) {
            response.status(400).json({ message: 'Please fill all fields' });
            return;
        }

        const newEbook = new Ebook({ title, author, publishYear, category, price });
        const eBook = await Ebook.create(newEbook);
        response.json(eBook);
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
})

router.get('/', async (request, response) => {
    try {
        const eBooks = await Ebook.find({});
        response.status(200).json({
            count: eBooks.length,
            data: eBooks
        });
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
})
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        console.log(id);

        const ebook = await Ebook.findById(id);
        return response.status(200).json(ebook);
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
})
export default router;