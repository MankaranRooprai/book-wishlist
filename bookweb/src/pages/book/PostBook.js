import "./PostBook.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const PostBook = () => {
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Book added: ", data);
      navigate("/");
    } catch (error) {
      console.log("Error adding book:", error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Add New Book</h1>
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
            Add Book
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PostBook;
