import mongoose from "mongoose";
const audioBookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed, // Can hold any type of additional data
      default: {}, // Default is an empty object
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export const AudioBook = mongoose.model("audioBook", audioBookSchema);
