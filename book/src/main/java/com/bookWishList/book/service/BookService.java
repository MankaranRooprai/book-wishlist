package com.bookWishList.book.service;

import com.bookWishList.book.entity.Book;
import com.bookWishList.book.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public Book postBook(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public void deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new EntityNotFoundException("Book with ID " + id + " not found");
        }

        bookRepository.deleteById(id);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book updateBook(Long id, Book book) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();

            existingBook.setAuthor(book.getAuthor());
            existingBook.setTitle(book.getTitle());
            existingBook.setYearPublished(book.getYearPublished());
            existingBook.setFictionOrNonFiction(book.getFictionOrNonFiction());

            return bookRepository.save(existingBook);
        }
        return null;
    }
}
