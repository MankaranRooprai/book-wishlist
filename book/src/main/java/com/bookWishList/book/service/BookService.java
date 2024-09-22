package com.bookWishList.book.service;

import com.bookWishList.book.entity.Book;
import com.bookWishList.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public Book postBook(Book book) {
        return bookRepository.save(book);
    }
}
