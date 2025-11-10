import express from "express";
import { AudioBook } from "../models/audioBookModel.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST route for creating a new audiobook
router.post("/", authenticateToken, async (request, response) => {
  try {
    // Check if the required fields are present
    const { title, author, genre, publicationYear, duration, price } =
      request.body;
    if (
      !title ||
      !author ||
      !genre ||
      !publicationYear ||
      !duration ||
      !price
    ) {
      return response
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Create a new audiobook with the entire request body (to allow extra fields like metadata)
    const newAudioBook = new AudioBook(request.body);

    // Save the new audiobook document in the database
    const savedAudioBook = await newAudioBook.save();

    // Send the saved document as a response
    return response.status(201).json(savedAudioBook);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ message: error.message });
  }
});

// GET route for fetching all audiobooks
router.get("/", authenticateToken, async (request, response) => {
  try {
    const audioBooks = await AudioBook.find({});
    response.status(200).json(audioBooks);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ message: error.message });
  }
});

export default router;
