import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/books");
        const data = await response.json();

        setBooks(data);
      } catch (error) {
        console.error("Error fetching employees:", error.message);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/book/${bookId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      }

      console.log(`Book with ID ${bookId} deleted successfully`);
    } catch (error) {
      console.log("Error deleting employee:", error.message);
    }
  };

  const handleUpdate = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Books</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Year Published</th>
                  <th>Fiction or Non-Fiction</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.yearPublished}</td>
                    <td>{book.fictionOrNonFiction}</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleUpdate(book.id)}
                      >
                        Update{" "}
                      </Button>{" "}
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDelete(book.id)}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
