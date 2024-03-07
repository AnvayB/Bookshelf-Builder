import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    // id: {
    //   type: Number,
    //   required: true,
    //   unique: true
    // },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    publishYear: {
      type: Number, //change to Date?
      required: true
    },
  },
  {
    timestamps: true
  }
)

export const Book = mongoose.model("Book", bookSchema)