import { requireAuth } from "./../middlewares/require-auth";
import {
  ClassMiddleware,
  Controller,
  Middleware,
  Get,
  Post,
} from "@overnightjs/core";
import { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest } from "../middlewares/validationError";
import { BadRequestError } from "../errors/badRequest";
import { currentUser } from "../middlewares/current-user";
import { Book } from "../db/models/book";

@Controller("api/books")
@ClassMiddleware([currentUser, requireAuth])
export class BookController {
  @Get("")
  private async getBooks(req: Request, res: Response) {
    const books = await Book.find();
    res.status(200).send(books);
  }

  @Post("create")
  @Middleware([
    body("book").isString().withMessage("Book name must be provided"),
    body("author").isString().withMessage("Author must be provided"),
    body("publisher").isString().withMessage("Publisher name must be provided"),
    validateRequest,
  ])
  private async createBook(req: Request, res: Response) {
    const { book, author, publisher } = req.body;

    const newBook = Book.build({ book, author, publisher });
    await newBook.save();

    res.status(201).send(newBook);
  }
}
