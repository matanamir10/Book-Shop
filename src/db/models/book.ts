import mongoose from "mongoose";

interface BookAttrs {
  book: string;
  author: string;
  publisher: string;
}

interface BookDoc extends mongoose.Document {
  book: string;
  author: string;
  publisher: string;
}

interface BookModel extends mongoose.Model<BookDoc> {
  build(attrs: BookAttrs): BookDoc;
}

const bookSchema = new mongoose.Schema(
  {
    book: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      default: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

bookSchema.statics.build = (attrs: BookAttrs) => {
  return new Book(attrs);
};

const Book = mongoose.model<BookDoc, BookModel>("Book", bookSchema);

export { Book };
