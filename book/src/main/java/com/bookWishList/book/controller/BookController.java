package com.bookWishList.book.controller;

import com.bookWishList.book.entity.Book;
import com.bookWishList.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping("/book")
    public Book postBook(@RequestBody Book book) {
        return bookService.postBook(book);
    }
}
