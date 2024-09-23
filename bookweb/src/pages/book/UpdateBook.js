import "./UpdateBook.css";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    yearPublished: "",
    fictionOrNonFiction: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/book/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching book:", error.message);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/book/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Book updated:", data);

      navigate(`/`);
    } catch (error) {
      console.error("Error updating book:", error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Edit Book</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="author"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="yearPublished"
              placeholder="Enter year book was published"
              value={formData.yearPublished}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="fictionOrNonFiction"
              placeholder="Is the book 'fiction' or 'non-fiction'?"
              value={formData.fictionOrNonFiction}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Edit Book
          </Button>
        </Form>
      </div>
    </>
  );
};
export default UpdateBook;
